const db = require('quick.db')
module.exports.run = async (message, args) => {
        var bal = db.fetch(`bal_${member.id}_${message.guild.id}`)
        if(bal < 10) {
            message.channel.send("You need 10 Intelligence to play!")
        } else {
        var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        var randomNum = Math.floor(Math.random() + 10) - 1;
        var playToken = 10;
        const MessageEmbed = require('discord.js')
        if (args === randomNum) {
            var result = ['❌ Wrong']
        } else if (args != randomNum) {
            var result = ['✔ Correct']
        }
        if(args === NaN) {
            message.channel.send(`The ${args} is Not A Number!`)
        } else if (args > num) {
            message.channel.send(`The ${args} is more than 0-9!`)
        } else if (args === num) {
            db.subtract(`bal_${message.guild.id}_${user.id}`, playToken)
            var embed = new MessageEmbed()
            .setTitle("🔢 Guess The Number Game!")
            .addField("🎯 Target Number", `${randomNum}`, true)
            .addField("💭 Your Guess", `${args}`)
            .addField("🧾 Result", `${result}`)
            message.channel.send(embed)
        }
        var amount = 30;
        var lose = 10;
        if (result === '✔ Correct') {
            db.add(`bal_${message.guild.id}_${user.id}`, amount)
        } else if (result === '❌ Wrong') {
            db.subtract(`bal_${message.guild.id}_${user.id}`, lose)
        }
    
}
};

module.exports.help = {
    name: 'random',
    aliases: ['ran', 'r'],
    category: "Economic",
};