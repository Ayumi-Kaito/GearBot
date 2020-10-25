module.exports.run = async (message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) { 
message.channel.send("Not Enough Permission")
} else {
        let text = args.join(" ");
        message.delete()
        await message.channel.send(text)
}
    }


module.exports.help = {
    name: 'say',
    args: true,
    category: "Fun",
};