const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const prefix = "lucas";
const prettyMilliseconds = require("pretty-ms");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('Lucas is online')
    client.user.setPresence({ activities: [{ name: 'Anwsering your questions' }], status: 'active' });
});
client.on('messageCreate', (message) =>{
        if(message.content.startsWith(prefix)){
        let lucas = [
            "yes",
            "no",
            "maybe",
            "FUCK OFF",
            "DID I ASK!?!?!?!?",
            "Go ask another bot",
            "ugh",
            "ur mum",
            "Subscribe to Linus Tech Tips on youtube",
            "Go fuck your self",
            "ewwwww",
            "Baggette is cool",
            "Uno Reverse",
            "my source code https://github.com/Baggette/ltt-bot"
        ];
        message.channel.send(
            `${lucas[Math.floor(Math.random() * lucas.length)]}`
          )
    }
});
client.login(process.env.TOKEN);