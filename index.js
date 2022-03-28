const DiscordJS = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()

const Reply = require('./replyer')

const client = new DiscordJS.Client({
    intents: [
        DiscordJS.Intents.FLAGS.GUILDS,
        DiscordJS.Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log("The bot is running")
})

client.on('messageCreate', (message) => Reply(message))

client.login(process.env.TOKEN)