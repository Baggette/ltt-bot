const {EmbedBuilder, SlashCommandBuilder} = require("discord.js")
module.exports={
    data: new SlashCommandBuilder()
    .setName("userbench")
    .setDescription("Why userbenchmark is not good")
    .addUserOption(option=>
        option
        .setName("user")
        .setDescription("The user to ping")
        ),
    async execute(interaction, client){
    const user = interaction.options.getUser("user")
    if(user){
        const embed = new EmbedBuilder()
        .setTitle('Userbenchmark is unreliable')
        .setColor("#f5e942")
        .setDescription(
            `UserBenchmark is considered bad is because of its flawed benchmarking methodology and biased scoring system, which often leads to inaccurate and misleading results. The benchmarking tests are not consistent or representative of real-world usage scenarios, and the scoring system favors certain components over others, often leading to unrealistic and inaccurate rankings. Additionally, there have been allegations of UserBenchmark being biased towards Intel over AMD processors, which has caused controversy in the PC building community.`
        )
        await interaction.reply({content: `${user}`, embeds:[embed]})
    }else {
        const embed = new EmbedBuilder()
        .setTitle('Userbenchmark is unreliable')
        .setColor("#f5e942")
        .setDescription(
            `UserBenchmark is considered bad is because of its flawed benchmarking methodology and biased scoring system, which often leads to inaccurate and misleading results. The benchmarking tests are not consistent or representative of real-world usage scenarios, and the scoring system favors certain components over others, often leading to unrealistic and inaccurate rankings. Additionally, there have been allegations of UserBenchmark being biased towards Intel over AMD processors, which has caused controversy in the PC building community.`
        )
        await interaction.reply({embeds:[embed]})
    }
    }
}