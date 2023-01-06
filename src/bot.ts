import { env } from "./env.ts";
import { Bot } from "../deps.ts";

import MainComposer from "./composer/MainComposer.ts";
import AdminComposer from "./composer/AdminComposer.ts";

export const bot = new Bot(env.BOT_TOKEN);

bot.use(MainComposer);
bot.use(AdminComposer);

bot.catch(console.error);
