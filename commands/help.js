const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'ดูคำสั่งทั้งหมด',
    execute(message, args) {
    const data = [];
    const { commands } = message.client;
    const embed = new MessageEmbed()
    .setTitle("คำสั่งของบอท")
    .setColor("GREEN")
    .addField("🤖ตารางคำสั่ง🤖", "Prefix = `g.` นะครับ")
    .addField("🔒**Admin Only**🔒", "g.status <open / close> = แจ้งว่าเปิดหรือปิดร้าน")
    .addField("")
    }
}