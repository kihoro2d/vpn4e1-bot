import { Composer } from "../../deps.ts";
import { checkIfAdmin } from "../middlewares.ts";

const AdminComposer = new Composer();

AdminComposer.command("me", checkIfAdmin, async (ctx) => {
  const json = JSON.stringify(ctx.from, null, 2);
  const text = `<pre language="json">${json}</pre>`;

  await ctx.reply(text, { parse_mode: "HTML" });
});

export default AdminComposer;
