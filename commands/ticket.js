const Discord = require('discord.js')
const guild = new Discord.Guild()

module.exports = {
    name: 'buy', 
    execute(message) {
        guild.channels.create(`ticket`, {
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
        .then(channel => console.log(`Create channel ${channel}`))
        .catch(console.error);
       
    }
}