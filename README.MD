# Italian Volley League - USCALI - Telegram Bot V2
_This bot has been developed for fun, with the dual purpose of experimenting with something new and creating a straightforward and fast way to retrieve data from various leagues organized by IVL._
> Note: All the data that the bot retrieves and processes is publicly viewable on the [IVL](https://ivl.usacli.it/) website.

## Commands
- `/start` Used to initiate the initial chat with the bot (displays a greeting message).
- `/healthcheck` Allows you to check if the bot is active.
- `/classifica` Allows you to view the standings of your group after applying a series of filters.
- `/calendario` Enables you to view the schedule of a specific team by specifying the date and opponent after applying a series of filters.

## Development
_The bot has been written using TypeScript and the GrammY framework to facilitate the integration with the Telegram API._

### How to run locally
```bash
git clone
cd <clone-folder>

cp .env.template .env # Fill the file with your bot token

# If you are using node
npm i
npm run dev

# else you can use docker
docker compose up -d # make start
```
The bot operates via a webhook. When the project is launched, it is exposed on port 3000.
It uses a tunneling system (ngrok) to connect the local bot to the internet.

### Get bot token
To obtain a bot token, start a chat with @BotFather on Telegram and follow the instructions provided.

### Set webhook url
`https://api.telegram.org/bot<BOT-TOKEN>/setWebhook?url=<WEBHOOK-URL-PATH-TO-FILE>`

[@Eilgug](https://linktr.ee/eilgug)
