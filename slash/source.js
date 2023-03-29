const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
module.exports={
    data: new SlashCommandBuilder()
    .setName("source")
    .setDescription("See the source code for the bot"),
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle("Source code for this bot")
        .setURL("https://github.com/Baggette/ltt-bot")
        .setColor("#f5e942")
        .setDescription(
            `If you are interested in helping out in the development of this bot feel free to contribute:
            https://github.com/Baggette/ltt-bot
            Things like fixing grammar, bugs and other miscellaneous things are greatly appreciated`
        )
        await interaction.reply({embeds:[embed]})
    }
}