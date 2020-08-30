module.exports = {
    name: 'say',
    args: true,
    execute: async(message, args) => {
        let text = args.join(" ");
        message.delete()
        await message.channel.send(text)
    }
}