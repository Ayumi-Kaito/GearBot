module.exports = {
    name: 'clear',
    description: 'Clear unwanted message',
    aliases: ['prune', 'delete'],
    execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('คุณไม่สามารถใช้ได้')
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('โปรดระบุตัวเลขให้ถูกต้อง');
        } else if (amount < 2 || amount > 100) {
            return message.reply('ใส่จำนวนระหว่าง 2 - 100');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('มีบางอย่างผิดพลาด!!!');
        });
    }
}