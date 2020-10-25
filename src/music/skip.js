// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/

module.exports.run = async (message) => {
{
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Join voice channel first');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('Nothing to skip');
		serverQueue.connection.dispatcher.end(`'Ok, I skip ${serverQueue.songs[0].title}'`);
	}
};

module.exports.help = {
	name: 'skip',
	description: 'Skip playing song',
	cooldown: 5,
	category: "Music",
	usage: ""
};