/* eslint-disable import/no-named-default, no-unused-vars, new-cap */

import 'dotenv/config'

import { Bot, InlineKeyboard } from 'grammy'
import { default as OutlineVPN } from 'outlinevpn-api'

const bot = new Bot(process.env.BOT_TOKEN)
const outlineVpn = new OutlineVPN.default(process.env.OUTLINE_API_URL)

const isAdmin = ctx => ctx.from?.id === parseInt(process.env.BOT_ADMIN, 10)
const multiline = text => text.replace(/^[ \t]+|[ \t]+$/gm, '')

bot.command('start', async (ctx) => {
  const user = ctx.from.username || 'username'
  const year = new Date().getFullYear()

  await ctx.reply(multiline(`
    Hey, <b>${user}</b>!
    Welcome to <del>${year}</del> <b>1984</b>!
  `), {
    parse_mode: 'HTML',
    reply_markup: new InlineKeyboard()
      .webApp('Get Outline', process.env.GET_OUTLINE_URL).row()
      .webApp('Free Access Keys', process.env.ACCESS_KEYS_URL)
  })
})

bot.catch((err) => {
  const ctx = err.ctx
  console.error(`Error while handling update ${ctx.update.update_id}:`, err.error)
})

process.once('SIGINT', () => bot.stop())
process.once('SIGTERM', () => bot.stop())

bot.start({ drop_pending_updates: true })
