import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
const roller = require('./roller')

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
})

client.on('ready', () => {
    console.log("The bot is on")
})

client.on('messageCreate', (message) =>{
    if (message.content === 'd4')
        message.reply( { content: roller.d4().toString() } )
    if (message.content === 'd6')
        message.reply( { content: roller.d6().toString() } )
    if (message.content === 'd8')
        message.reply( { content: roller.d8().toString() } )
    if (message.content === 'd10')
        message.reply( { content: roller.d10().toString() } )
    if (message.content === 'd12')
        message.reply( { content: roller.d12().toString() } )
    if (message.content === 'd20')
        message.reply( { content: roller.d20().toString() } )
    if (message.content === 'd100' || message.content === 'd%')
        message.reply( { content: roller.d100().toString() } )
    if (message.content === 'dbody')
        message.reply( { content: roller.rollBody().toString() } )
})

client.login(process.env.TOKEN)