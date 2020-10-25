// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports.run = async (message) => {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ RESUME!');
		}
		return message.channel.send('Nothing to resume');
	}


module.exports.help = {
	name: 'resume',
	description: 'Resume a song',
	cooldown: 5,
	aliases: ['re'],
	category: "Music",
};