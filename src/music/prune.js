module.exports.run = async (message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('คุณไม่สามารถใช้ได้')
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('Enter valid number');
        } else if (amount < 2 || amount > 100) {
            return message.reply('Enter number among 2 - 100');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('Oopsie, Something went wrong in progress');
        });
message.channel.send("✅ Message deleted")
    }

module.exports.help = {
    name: 'clear',
    description: 'Clear unwanted message',
    aliases: ['prune', 'delete'],
    category: "Music",
};