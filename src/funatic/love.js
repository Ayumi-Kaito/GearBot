module.exports = {
    name: 'ilove',
    args: true,
    aliases: ['il'],
    category: "",
    execute: async(message, args) => {
        let ping = message.mentions.users.first();
        if(!ping) return;
        message.delete()
        await message.channel.send(`${message.author.username} is love ${ping.username}`)
    }
}