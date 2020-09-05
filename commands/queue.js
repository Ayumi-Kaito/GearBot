// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports = {
	name: 'queue',
	description: 'Queue command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nothing playing');
		return message.channel.send(`
__**QUEUE:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**PLAYING:** ${serverQueue.songs[0].title}
		`);
	}
};