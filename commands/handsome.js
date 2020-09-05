const MessageEmbed = require("discord.js")
const Discord = require('discord.js')

module.exports = {
    name: 'handsome',
    execute(message, args) {
        let ping = message.mentions.users.first();
        if(!ping){
            let hd = Math.floor(Math.random() * 100) + 1;
            let embed = new Discord.MessageEmbed()
            .setColor("PINK")
            .setTitle(`How handsome is ${message.author.username}`)
            .setDescription(`${hd}% 💞`)
            message.channel.send(embed)
        } else if(ping) {
            let hd = Math.floor(Math.random() * 100) + 1;
            let embed = new Discord.MessageEmbed()
            .setColor("PINK")
            .setTitle(`How handsome is ${ping.username}`)
            .setDescription(`${hd}% 💞`)
            message.channel.send(embed)
        }
    }
}