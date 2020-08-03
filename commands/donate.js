const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'donate',
    execute: async(message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("คุณไม่สามารถใช้คำสั่งนี้ได้")
        } else if (message.member.hasPermission("ADMINISTRATOR")) {
        let donate = new MessageEmbed()
        .setTitle("💵ช่องทางการโดเนท📌")
        .setColor("GREEN")
        .addField("▶0947450363 OR 0864563832🎉", "📌ขอบคุณค้าบบ👑")
        message.channel.send("||@everyone||", donate)
        }
    }
}