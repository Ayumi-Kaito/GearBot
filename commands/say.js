module.exports = {
    name: 'say',
    execute: async(message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("คุณไม่สามารถใช้คำสั่งนี้ได้")
        } else if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete()
        await message.channel.send(args)
        }
    }
}