module.exports = {
    name: 'say',
    execute: async(message, args) => {
        let text = args.join(" ");
        message.delete()
        await message.channel.send(text)
    }
}