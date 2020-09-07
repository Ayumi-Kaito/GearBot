// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports = {
	name: 'resume',
	description: 'Resume command.',
	cooldown: 5,
	aliases: ['re'],
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ RESUME!');
		}
		return message.channel.send('Nothing to resume');
	}
};