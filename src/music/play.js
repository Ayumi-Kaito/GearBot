// original script by iCrawl https://github.com/iCrawl/discord-music-bot/blob/master/src/commands/play.js

const { Util } = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'play',
	description: 'เล่นเพลง',
	usage: '[เพลงเนม]',
	category: "",
	args: true,
	cooldown: 5,
	aliases: ['p'],
	async execute(message, args) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('Join voice room first!');
		const permissions = channel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send('I don\'t have perms');
		if (!permissions.has('SPEAK')) return message.channel.send('I don\'t have perms');

		const serverQueue = message.client.queue.get(message.guild.id);
		const songInfo = await ytdl.getInfo(args[0].replace(/<(.+)>/g, '$1'));
		const song = {
			id: songInfo.videoDetails.video_id,
			title: Util.escapeMarkdown(songInfo.videoDetails.title),
			url: songInfo.videoDetails.video_url
		};

		if (serverQueue) {
			serverQueue.songs.push(song);
			console.log(serverQueue.songs);
			return message.channel.send(`✅ Queued **${song.title}**`);
		}

		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: channel,
			connection: null,
			songs: [],
			volume: 2,
			playing: true
		};
		message.client.queue.set(message.guild.id, queueConstruct);
		queueConstruct.songs.push(song);

		const play = async song => {
			const queue = message.client.queue.get(message.guild.id);
			if (!song) {
				queue.voiceChannel.leave();
				message.client.queue.delete(message.guild.id);
				return;
			}

			const dispatcher = queue.connection.play(ytdl(song.url))
				.on('finish', () => {
					queue.songs.shift();
					play(queue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
			queue.textChannel.send(`🎶 Playing: **${song.title}**`);
		};

		try {
			const connection = await channel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			message.client.queue.delete(message.guild.id);
			await channel.leave();
			return message.channel.send(`ERR!: ${error}`);
		}
	}
};