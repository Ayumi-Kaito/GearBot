const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: "",
    description: 'ดูคำสั่งทั้งหมด',
    execute(message) {
    const embed = new MessageEmbed()
    .setTitle("Bot Commands")
    .setColor("GREEN")
    .setThumbnail("https://media.discordapp.net/attachments/739464988841869336/739795917514866699/gear.png")
    .addField("🤖commands table🤖", "Prefix = `c.`")
    .addField("🔒**Admin Only**🔒", "c.prune = Prune message\nc.kick = Kick members\nc.ban = Ban members")
    .addField("🎈Fun🎈", "c.say = Say what you say\nc.handsome = How handsome?\nc.ilove = Who do you love?\nc.8ball = Ask 8ball")
    .addField("💉Others💉", "c.avatar = Show user avatar\nc.server = Show server infomation\nc.meme = Show some memes")
    .addField("🎶Music🎶", "c.play = Play a song\nc.pause = Pause a song\nc.resume = Resume a song\nc.queue = Show queue\nc.skip = Skip the song\nc.np = Show now playing songs")
    .setDescription("———————————————————————————————")
    message.channel.send(embed)
    }
}