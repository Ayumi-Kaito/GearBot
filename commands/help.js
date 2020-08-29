const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'ดูคำสั่งทั้งหมด',
    execute(message) {
    const embed = new MessageEmbed()
    .setTitle("คำสั่งของบอท")
    .setColor("GREEN")
    .setThumbnail("https://media.discordapp.net/attachments/739464988841869336/739795917514866699/gear.png")
    .addField("🤖ตารางคำสั่ง🤖", "Prefix = `g.` นะครับ")
    .addField("🔒**Admin Only**🔒", "g.prune = ลบข้อความ")
    .addField("🎈Common🎈", "g.say = พูดตาม\ng.handsome = ความหล่อของคุณ\ng.ilove = นั่นแหละ\n")
    .setDescription("———————————————————————————————")
    message.channel.send(embed)
    }
}