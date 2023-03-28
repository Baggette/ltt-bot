const {Client, Intents, EmbedBuilder, Events, GatewayIntentBits, Partials } = require('discord.js');
const Discord = require('discord.js');
const fs = require("node:fs")
const path = require("node:path")
const dotenv = require('dotenv');
dotenv.config();
const chat = "lucas";
const Prefix = "t!"
const prettyMilliseconds = require("pretty-ms");
const client = new Client({
    intents: Object.keys(GatewayIntentBits), // all intents
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
  });

  client.commands = new Discord.Collection();

  const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
  
      client.commands.set(command.name, command)
  }
  client.slashcommands = new Discord.Collection();
  
  const slashcommandsPath = path.join(__dirname, 'slash');
  const slashcommandFiles = fs.readdirSync(slashcommandsPath).filter(file => file.endsWith('.js'));
  
  for (const file of slashcommandFiles) {
      const filePath = path.join(slashcommandsPath, file);
      const slashcommand = require(filePath);
      // Set a new item in the Collection with the key as the command name and the value as the exported module
      if ('data' in slashcommand && 'execute' in slashcommand) {
          client.slashcommands.set(slashcommand.data.name, slashcommand);
      } else {
          console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
      }
  }

client.on('ready', () => {
    console.log('Lucas is online')
    client.user.setPresence({ activities: [{ name: 'Anwsering your questions' }], status: 'active' });
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const slash = interaction.client.slashcommands.get(interaction.commandName);

	if (!slash) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await slash.execute(interaction, client);
	} catch (error) {
		console.error(`Error executing ${interaction.commandName}`);
		console.error(error);
	}
});

client.on('messageCreate', (message) =>{
        if(message.content.toLowerCase().includes(chat)){
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
            "my source code https://github.com/Baggette/ltt-bot",
            "<@530485284685479936> is the fake",
            "ligma",
            "you *shutters* sicken me",
            "you should give <@887756464020672523> some nitro",
            "you are gay"
        ];
        message.channel.send(
            `${lucas[Math.floor(Math.random() * lucas.length)]}`
          )
    } else if (!message.content.startsWith(Prefix) || message.author.bot) return;
    const args = message.content.slice(Prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // If command does not exist, return
    if (!client.commands.get(command)) {
        return
    }
      
    client.commands.get(command).execute(client, message, args)

});
client.login(process.env.TOKEN);
