const { execute } = require("./status");
const { MessageReaction } = require("discord.js");

module.exports = {
    name: 'say',
    execute: async(message, args) => {
        message.delete()
        await message.channel.send(args)
    }
}