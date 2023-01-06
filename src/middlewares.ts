import { env } from "./env.ts";
import { Context, NextFunction } from "../deps.ts";

export async function checkIfAdmin(ctx: Context, next: NextFunction) {
  if (env.BOT_ADMIN && env.BOT_ADMIN === ctx.from?.id) await next();
}
