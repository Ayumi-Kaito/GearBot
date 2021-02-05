const db = require('quick.db')
module.exports.run = async (message, args) => {
        var member = message.mentions.members.first() || message.author;

        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        const MessageEmbed = require('discord.js')
        var embed = new MessageEmbed()
        embed.setTitle(`${member.username} Intelligence`)
        embed.addField(`💡Intelligence`, `${bal}`, true)
        embed.addField(`📁Stored Intelligence`, `${bank}`, true)
        message.channel.send(embed)
    }


module.exports.help = {
    name: 'bal',
    aliases: ['checkbal', 'balance'],
    category: "Economic",
};