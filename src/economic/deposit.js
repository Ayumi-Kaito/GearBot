const db = require('quick.db')
module.exports = {
    name: 'stored',
    aliases: ['str', 'keep'],
    category: "",
    execute(message, args) {
        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if (bal === null) bal = 0

        var bank = db.fetch(`bank_${member.id}_${message.guild.id}`)
        if (bank === null) bank = 0

        let x = 10
        if(args === NaN) return;

        if (bal < x) {
            message.channel.send(`You need atleast ${x} Intelligence to stored!`)
        } else if (bal = x || bal > x) {
            db.subtract(`bal_${member.id}_${message.guild.id}`, args)
            db.add(`bank_${member.id}_${message.guild.id}`, args)
            message.channel.send(`You have stored ${args} in to your brain, Now you have ${bal} Intelligence and ${bank} Stored Intelligence`)
        }
    }
}