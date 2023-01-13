# VPN4e1-bot

[Telegram Bot](https://t.me/vpn4e1_bot) to get free access keys for [OutlineVPN](https://getoutline.org).\
Source of access keys [getoutline.me](https://getoutline.me/access-keys/).

## Running Locally
Make sure you have installed [Deno CLI](https://deno.land).
- Clone the repository
- Create a .env file with your data _(follow the .env.example file)_
- Run `deno task dev`

```shell
git clone https://github.com/kihoro2d/vpn4e1-bot.git
cd vpn4e1-bot
cp .env.example .env
deno task dev
```

## Set Webhook

`https://api.telegram.org/bot<TOKEN>/setWebhook?url=<APP_URL>`
