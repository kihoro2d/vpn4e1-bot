import { env } from "../env.ts";
import { Composer, InlineKeyboard } from "../../deps.ts";

const MainComposer = new Composer();

MainComposer.command("start", async (ctx) => {
  const username = ctx.from?.username ?? "username";
  const fullyear = new Date().getFullYear();

  const text =
    `Hey, <b>${username}</b>! \nWelcome to <del>${fullyear}</del> <b>1984</b>!`;

  await ctx.reply(text, {
    parse_mode: "HTML",
    reply_markup: new InlineKeyboard()
      .webApp("Get Outline", env.GET_OUTLINE_URL).row()
      .webApp("Free Access Keys", env.ACCESS_KEYS_URL),
  });
});

export default MainComposer;
