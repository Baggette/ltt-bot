const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
module.exports={
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("List the commands of the bot"),
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle("List of bot commands")
        .setColor("#f5e942")
        .addFields(
            {name:"`/bhq`", value:"Sends the build help questions embed"},
            {name:"`/fpscalc`", value:"Why fps calculators are unreliable and inaccurate"},
            {name:"`/userbench`", value:"Why userbenchmark is unreliable and cannot be trusted"},
            {name:"`/ping`", value:"See bot latency and uptime"},
            {name:"`/help`", value:"This help menu"}
        )
        await interaction.reply({embeds:[embed]})
    }
}