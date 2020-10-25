module.exports.run = async (message, args) => {
        let ping = message.mentions.users.first();
        if(!ping) return;
        message.delete()
        await message.channel.send(`${message.author.username} is love ${ping.username}`)
    }

module.exports.help = {
    name: 'ilove',
    args: true,
    aliases: ['il'],
    category: "Fun",
};