const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"userbench",
    descrription:"Why userbenchmark is not good",
    execute(client, message, args){
        if(args[0]){
            const rawid1 =  args[0].replace("@", "")
            const rawdid2 = rawid1.replace("<", "")
            const id = rawdid2.replace(">", "")
            const embed = new EmbedBuilder()
            .setTitle('Userbenchmark is unreliable')
            .setColor("#f5e942")
            .setDescription(
                `UserBenchmark is considered bad is because of its flawed benchmarking methodology and biased scoring system, which often leads to inaccurate and misleading results. The benchmarking tests are not consistent or representative of real-world usage scenarios, and the scoring system favors certain components over others, often leading to unrealistic and inaccurate rankings. Additionally, there have been allegations of UserBenchmark being biased towards Intel over AMD processors, which has caused controversy in the PC building community.`
            )
            message.channel.send({content: `<@${id}>`, embeds:[embed]})
        }else {
            const embed = new EmbedBuilder()
            .setTitle('Userbenchmark is unreliable')
            .setColor("#f5e942")
            .setDescription(
                `UserBenchmark is considered bad is because of its flawed benchmarking methodology and biased scoring system, which often leads to inaccurate and misleading results. The benchmarking tests are not consistent or representative of real-world usage scenarios, and the scoring system favors certain components over others, often leading to unrealistic and inaccurate rankings. Additionally, there have been allegations of UserBenchmark being biased towards Intel over AMD processors, which has caused controversy in the PC building community.`
            )
            message.channel.send({embeds:[embed]})
        }
    }
}