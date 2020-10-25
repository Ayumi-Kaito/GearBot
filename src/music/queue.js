// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports.run = async (message) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nothing playing');
		return message.channel.send(`
__**QUEUE:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**PLAYING:** ${serverQueue.songs[0].title}
		`);
	}


module.exports.help = {
	name: 'queue',
	description: 'Show song list.',
	cooldown: 5,
	aliases: ['q'],
	category: "Music",
};