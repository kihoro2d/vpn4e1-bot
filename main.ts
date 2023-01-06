import { bot } from "./src/bot.ts";

// Deno.addSignalListener("SIGINT", () => bot.stop());
// Deno.addSignalListener("SIGTERM", () => bot.stop());

await bot.start({
  drop_pending_updates: true,
  allowed_updates: ["message"],

  onStart: (botInfo) =>
    console.log(`Bot https://t.me/${botInfo.username} has been started`),
});
