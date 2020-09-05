// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Join voice channel first');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nothing to skip');
		serverQueue.connection.dispatcher.end(`'Ok, I skip ${serverQueue.songs[0].title}'`);
	}
};