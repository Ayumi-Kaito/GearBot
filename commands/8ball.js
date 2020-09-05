const MessageEmbed = require('discord.js')

module.exports = {
    name: "8ball",
    execute(message, args) {

        function RANDOM() {
            let banswer = [
                "Yes",
                "No",
                "For sure!",
                "Not in a century"
            ]
            return banswer[Math.floor(Math.random() * banswer.length)]
        }

        if(!args) return;
        let answer = new MessageEmbed()
        .setTitle("8ball")
        .setColor("GREEN")
        .addField("This is your answer:", RANDOM())
        message.channel.send(answer)
    }
}