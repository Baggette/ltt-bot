const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"source",
    description:"See the source code for the bot",
    execute(client, message, args){
        const embed = new EmbedBuilder()
        .setTitle("Source code for this bot")
        .setURL("https://github.com/Baggette/ltt-bot")
        .setColor("#f5e942")
        .setDescription(
            `If you are interested in helping out in the development of this bot feel free to contribute:
            https://github.com/Baggette/ltt-bot
            Things like fixing grammar, bugs and other miscellaneous things are greatly appreciated`
        )
        message.channel.send({embeds:[embed]})
    }
}