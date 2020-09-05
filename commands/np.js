// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports = {
	name: 'np',
	description: 'Now playing command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('doesn\'t play anything');
		return message.channel.send(`🎶 Playing: **${serverQueue.songs[0].title}**`);
	}
};