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
    .addField("🎈Common🎈", "g.say = พูดตาม\ng.handsome = ความหล่อของคุณ\ng.ilove = รักใคร?\n")
    .addField("🎶Music🎶", "g.play = เล่นเพลง\ng.pause = หยุดเพลง\ng.resume = เล่นเพลงต่อ\ng.queue = แสดงคิว\ng.skip = ข้าม\ng.np = แสดงเพลงที่กำลังเล่น")
    .setDescription("———————————————————————————————")
    message.channel.send(embed)
    }
}