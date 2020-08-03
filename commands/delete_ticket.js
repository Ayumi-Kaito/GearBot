const Discord = require('discord.js')
const guild = new Discord.Guild()

module.exports = {
    name: 'end', 
    execute(message) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("คุณไม่สามารถใช้คำสั่งนี้ได้")
        } else if (message.member.hasPermission("ADMINISTRATOR")) {
        guild.channels.delete(`ticket-${message.member.username}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL', 'SEND_MESSAGE', 'READ_MESSAGE'],
                },
                {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGE', 'READ_MESSAGE'],
                },
            ],
        })
        .then(channel => console.log(`Delete channel ${channel}`))
        .catch(console.error);
    }
}
}