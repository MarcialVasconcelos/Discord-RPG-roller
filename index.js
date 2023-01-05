const DiscordJS = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()

const Reply = require('./src/diceReplyer')

const client = new DiscordJS.Client({
    intents: [
        DiscordJS.GatewayIntentBits.Guilds,
        DiscordJS.GatewayIntentBits.GuildMessages,
        DiscordJS.GatewayIntentBits.MessageContent,
    ]
})

client.on('ready', () => {
    console.log("The bot is online")
})

client.on('messageCreate', (msg) => Reply(msg))

client.login(process.env.TOKEN)