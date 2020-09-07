// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports = {
	name: 'pause',
	description: 'Pause command.',
	cooldown: 5,
	aliases: ['pa'],
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ STOP!');
		}
        return message.channel.send('Nothing to pause.');
	}
};