const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
module.exports={
    data: new SlashCommandBuilder()
    .setName("lmgtfy")
    .setDescription("Let me google that for you")
    .addStringOption(option =>
        option
        .setName("lmgtfy query")
        .setDescription("The query for the bot to generate the lmgtfy link")
        .setRequired(true)
    )
    .addUserOption(option=>
        option
        .setName("user")
        .setDescription("user to ping after making the url")
    ),
    async execute(interaction, client){
        const query = interaction.options.getString("lmgtfy query")
        const user = interaction.options.getUser("user") || " "
        await interaction.reply(`https://letmegooglethat.com/?q=${encodeURIComponent(query)} ${user}`)
    }
}