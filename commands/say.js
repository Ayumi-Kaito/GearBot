module.exports = {
    name: 'say',
    args: true,
    execute: async(message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) { 
message.channel.send("Not Enough Permission")
} else {
        let text = args.join(" ");
        message.delete()
        await message.channel.send(text)
}
    }
}
