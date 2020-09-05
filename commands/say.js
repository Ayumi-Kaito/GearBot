module.exports = {
    name: 'say',
    args: true,
    execute: async(message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
        let text = args.join(" ");
        message.delete()
        await message.channel.send(text)
    }
}