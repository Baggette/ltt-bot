const {EmbedBuilder, SlashCommandBuilder} = require("discord.js")
module.exports={
    data: new SlashCommandBuilder()
    .setName("fpscalc")
    .setDescription("Why fpscalculators are not good")
    .addUserOption(option=>
        option
        .setName("user")
        .setDescription("The user to ping")
        ),
    async execute(interaction, client){
    const user = interaction.options.getUser("user")
    if(user){
        const embed = new EmbedBuilder()
        .setTitle('fps calculators are unreliable')
        .setColor("#f5e942")
        .setDescription(
            `FPS calculators are considered bad is because they often provide inaccurate and misleading results due to various factors such as differences in hardware configurations, software settings, and testing conditions. They also do not account for variations in real-world gameplay, which can result in unrealistic expectations and disappointment for users. Additionally, FPS calculators may not be updated frequently or may not account for new games or hardware components, which can lead to further inaccuracies.`
        )
        await interaction.reply({content: `${user}`, embeds:[embed]})
    }else {
        const embed = new EmbedBuilder()
        .setTitle('fps calculators are unreliable')
        .setColor("#f5e942")
        .setDescription(
            `FPS calculators are considered bad is because they often provide inaccurate and misleading results due to various factors such as differences in hardware configurations, software settings, and testing conditions. They also do not account for variations in real-world gameplay, which can result in unrealistic expectations and disappointment for users. Additionally, FPS calculators may not be updated frequently or may not account for new games or hardware components, which can lead to further inaccuracies.`
        )
        await interaction.reply({embeds:[embed]})
    }
    }
}