import { serve, webhookCallback } from "./deps.ts";
import { bot } from "./src/bot.ts";

const handleUpdate = webhookCallback(bot, "std/http");
await bot.init();

serve(async (req) => {
  if (req.method == "POST") {
    try {
      return await handleUpdate(req);
    } catch (err) {
      console.error(err);
      return new Response();
    }
  }

  return Response.redirect(`https://t.me/${bot.botInfo.username}`);
});
