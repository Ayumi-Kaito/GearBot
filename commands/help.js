const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'ดูคำสั่งทั้งหมด',
    execute(message) {
    const embed = new MessageEmbed()
    .setTitle("คำสั่งของบอท")
    .setColor("GREEN")
    .addField("🤖ตารางคำสั่ง🤖", "Prefix = `g.` นะครับ")
    .addField("🔒**Admin Only**🔒", "g.status <open / close> = แจ้งว่าเปิดหรือปิดร้าน\ng.end = ปิดห้อง ticket\ng.say <ข้อความ> = ทำให้บอทพูดตามข้อความ\ng.donate = บอกช่องทางการโดเนท")
    .addField("🎈Common🎈", "g.buy = สร้างห้อง ticket")
    message.channel.send(embed)
    }
}