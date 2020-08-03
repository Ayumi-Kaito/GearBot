module.exports = {
    name: 'hentai',

    description: 'See random hentai image',
    execute: async (message) => {
    const { MessageEmbed } = require('discord.js')
    if(message.channel.nsfw === true) {
    const nekoclient = require('nekos.life');
    const neko = new nekoclient();
    const GIF = await neko.nsfw.hentai();
    const embed = new MessageEmbed()
    .setColor('#202225')
    .setTitle(`${message.author.tag} ขอให้สนุก`)
    .setImage(GIF.url)
    message.channel.send(embed);
    } else {
      message.channel.send("นี่ไม่ใช่ช่อง NSFW นะเทอ")
    }
  }
  }
  