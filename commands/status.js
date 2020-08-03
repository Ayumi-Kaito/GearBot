const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'status',
    aliases: ['st'],
    execute(message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("คุณไม่สามารถใช้คำสั่งนี้ได้")
        } else if (message.member.hasPermission("ADMINISTRATOR")) {
        if(args[0] === "open") {
    let openembed = new MessageEmbed()
    .setTitle("✅・𝐒𝐭𝐚𝐭𝐮𝐬")
    .setColor("GREEN")
    .setThumbnail("https://cdn.discordapp.com/icons/730249722991870062/3ac2edc859d6ab9112315d40cd5b7181.png")
    .addField("📌🛍**::สถานะร้าน::**🛍📌", `🧨＜ร้านเปิดให้บริการแล้วจ้าาา＞🧨\n`)
    .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", `[SxilieaCommission](https://discord.gg/Zsvw3td)💎`)
    .addField("▶ขณะนี้ <@694857558095298611> ไม่อยู่โปรดรอจนร้านจะเปิดหรือออน✅", "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
    .addField("`ผู้ขายในครั้งนี้`", "<@694857558095298611>")
    message.channel.send("||@everyone||", openembed)
        } else if(args[0] === "close") {
            let closeembed = new MessageEmbed()
            .setTitle("✅・𝐒𝐭𝐚𝐭𝐮𝐬")
            .setColor("RED")
            .setThumbnail("https://cdn.discordapp.com/icons/730249722991870062/3ac2edc859d6ab9112315d40cd5b7181.png")
            .addField("📌🛍**::สถานะร้าน::**🛍📌", `🧨＜ร้านปิดให้บริการแล้วจ้าาา＞🧨\n`)
            .addField("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", `[SxilieaCommission](https://discord.gg/Zsvw3td)💎`)
            .addField("▶ขณะนี้ <@694857558095298611> ไม่อยู่โปรดรอจนร้านจะเปิดหรือออน✅", "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬")
            .addField("`ผู้ขายในครั้งนี้`", "<@694857558095298611>")
            message.channel.send("||@everyone||", closeembed)
        } else {
            let elseembed = new MessageEmbed()
            .setTitle("**คำสั่ง Status**")
            .setColor("BLUE")
            .addField(`[อาร์กิวเมนต์](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)`, "open / close")
            message.channel.send(elseembed)
        }
    }
}
}