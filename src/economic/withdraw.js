const db = require('quick.db')
module.exports = {
    name: 'withdraw',
    aliases: ['with', 'w'],
    category: "",
    execute(message, args) {
        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        let x = 1
        if(args === NaN) return;

        if (bank < x) {
            message.channel.send(`You don't have any stored intelligence to withdraw`)
        } else if (bank = x || bal > x) {
            db.add(`bal_${member.id}_${message.guild.id}`, args)
            db.subtract(`bank_${member.id}_${message.guild.id}`, args)
            message.channel.send(`You have withdraw ${args} in to your pocket, Now you have ${bal} Intelligence and ${bank} Stored Intelligence`)
        }
    }
}