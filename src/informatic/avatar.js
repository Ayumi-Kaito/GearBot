module.exports = {
    name: "avatar",
    aliases: ['av'],
    category: "",
    execute(message, args) {
        let ping = message.mentions.users.first();
        if(!ping) {
            message.channel.send(message.author.displayAvatarURL())
        } else if(ping) {
            message.channel.send(ping.displayAvatarURL())
        }
    }
}