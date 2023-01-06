import { cleanEnv, load, num, str, url } from "../deps.ts";

await load({ export: true });

export const env = cleanEnv(Deno.env.toObject(), {
  BOT_ADMIN: num(),
  BOT_TOKEN: str(),

  GET_OUTLINE_URL: url(),
  ACCESS_KEYS_URL: url(),
});
