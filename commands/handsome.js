const MessageEmbed = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'handsome',
    execute(message) {
        if(message.author.id === "508473794994896896") {
        let embed = new Discord.MessageEmbed()
        .setColor("PINK")
        .setTitle(`ความ หล่อ/สวย ของ ${message.author.username}`)
        .setDescription(`คุณมีความหล่อที่ 10000000% 💞`)
        message.channel.send(embed)
        } else {
            let hd = Math.floor(Math.random() * 100) + 1;
            let embed = new Discord.MessageEmbed()
            .setColor("PINK")
            .setTitle(`ความ หล่อ/สวย ของ ${message.author.username}`)
            .setDescription(`คุณมีความหล่อที่ ${hd}% 💞`)
            message.channel.send(embed)
        }
    }
}