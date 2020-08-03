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
    .addField("🔒**Admin Only**🔒", "g.status <open / close> = แจ้งว่าเปิดหรือปิดร้าน\ng.end = ปิดห้อง ticket\ng.say <ข้อความ> = ทำให้บอทพูดตามข้อความ\ng.donate = บอกช่องทางการโดเนท")
    .addField("🎈Common🎈", "g.buy = สร้างห้อง ticket\ng.hentai = 18+ เท่านั้น")
    .setDescription("———————————————————————————————")
    message.channel.send(embed)
    }
}