module.exports = {
    name: 'say',
    execute: async(message, args) => {
        let text = args.join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("คุณไม่สามารถใช้คำสั่งนี้ได้")
        } else if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete()
        await message.channel.send(text)
        }
    }
}