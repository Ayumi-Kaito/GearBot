const db = require('quick.db')
module.exports = {
    name: 'bal',
    aliases: ['checkbal', 'balance'],
    execute(message, args) {
        var member = message.mentions.members.first() || message.author;

        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        const MessageEmbed = require('discord.js')
        var embed = new MessageEmbed()
        .setTitle(`${member.username} Intelligence`)
        .addField(`💡Intelligence`, `${bal}`, true)
        .addField(`📁Stored Intelligence`, `${bank}`, true)
        message.channel.send(embed)
    }
}