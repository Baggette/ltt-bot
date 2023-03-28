const {EmbedBuilder} = require("discord.js")
module.exports={
    name:"bhq",
    description:"Build Help Questions",
    execute(client, message, args){
    if(args[0]){
        const rawid1 =  args[0].replace("@", "")
        const rawdid2 = rawid1.replace("<", "")
        const id = rawdid2.replace(">", "")
        const embed = new EmbedBuilder()
        .setTitle('Pc build help questions')
        .setColor("#f5e942")
        .setDescription(
            `1. - When do you intend to buy the PC/parts?\n
            2. - What is your budget and country? (Include your local currency)\n
            3. - What are the applications and resolution that you are planning to use?\n
            4. - Do you have any design preferences? (This include size, style, and color)\n
            5. - Do you need peripherals? (Mouse, keyboard, monitor, headset, etc.)\n
            6. - Do you want/need to use Ethernet (internet cable), Wi-Fi - and/or Bluetooth?\n
            7. - Any additional details/requirements? (Do you want to overclock, do you own any parts already, etc)`
        )
        message.channel.send({content: `<@${id}>`, embeds:[embed]})
    }else {
        const embed = new EmbedBuilder()
        .setTitle('Pc build help questions')
        .setColor("#f5e942")
        .setDescription(
            `1. - When do you intend to buy the PC/parts?\n
            2. - What is your budget and country? (Include your local currency)\n
            3. - What are the applications and resolution that you are planning to use?\n
            4. - Do you have any design preferences? (This include size, style, and color)\n
            5. - Do you need peripherals? (Mouse, keyboard, monitor, headset, etc.)\n
            6. - Do you want/need to use Ethernet (internet cable), Wi-Fi - and/or Bluetooth?\n
            7. - Any additional details/requirements? (Do you want to overclock, do you own any parts already, etc)`
        )
        message.channel.send({embeds:[embed]})
    }
    }
}