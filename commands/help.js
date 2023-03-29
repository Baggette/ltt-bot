const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"help",
    name:"List the commands of the bot",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setTitle("List of bot commands")
        .setColor("#f5e942")
        .addFields(
            {name:"`t!bhq`", value:"Sends the build help questions embed"},
            {name:"`t!fpscalc`", value:"Why fps calculators are unreliable and inaccurate"},
            {name:"`t!userbench`", value:"Why userbenchmark is unreliable and cannot be trusted"},
            {name:"`t!ping`", value:"See bot latency and uptime"},
            {name:"`t!help`", value:"This help menu"},
            {name:"`t!source`", value:"View the source code of the bot"}
        )
        .setDescription("*note, most of these commands can be run with mentioning a user and the bot will mention the user upon sending the embed")
        message.channel.send({embeds:[embed]})
    }
}