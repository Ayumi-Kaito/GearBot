// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/
module.exports.run = async (message) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('doesn\'t play anything');
		return message.channel.send(`🎶 Playing: **${serverQueue.songs[0].title}**`);
	}


module.exports.help = {
	name: 'np',
	description: 'Now playing command.',
	category: "Music",
	cooldown: 5,
};