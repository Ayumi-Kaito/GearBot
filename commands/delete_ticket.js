module.exports = {
    name: 'ticket', 
    execute(message) {
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
        });
       
    }
}