const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"fpscalc",
    descrription:"Why fpscalculators are not good",
    execute(client, message, args){
        if(args[0]){
            const rawid1 =  args[0].replace("@", "")
            const rawdid2 = rawid1.replace("<", "")
            const id = rawdid2.replace(">", "")
            const embed = new EmbedBuilder()
            .setTitle('fps calculators are unreliable')
            .setColor("#f5e942")
            .setDescription(
                `FPS calculators are considered bad is because they often provide inaccurate and misleading results due to various factors such as differences in hardware configurations, software settings, and testing conditions. They also do not account for variations in real-world gameplay, which can result in unrealistic expectations and disappointment for users. Additionally, FPS calculators may not be updated frequently or may not account for new games or hardware components, which can lead to further inaccuracies.`
            )
            message.channel.send({content: `<@${id}>`, embeds:[embed]})
        }else {
            const embed = new EmbedBuilder()
            .setTitle('fps calculaots are unreliable')
            .setColor("#f5e942")
            .setDescription(
                `FPS calculators are considered bad is because they often provide inaccurate and misleading results due to various factors such as differences in hardware configurations, software settings, and testing conditions. They also do not account for variations in real-world gameplay, which can result in unrealistic expectations and disappointment for users. Additionally, FPS calculators may not be updated frequently or may not account for new games or hardware components, which can lead to further inaccuracies.`
            )
            message.channel.send({embeds:[embed]})
        }
    }
}