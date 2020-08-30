module.exports = {
	name: 'np',
	description: 'Now playing command.',
	cooldown: 5,
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('ไม่ได้เล่นอะไรนิ?');
		return message.channel.send(`🎶 กำลังเล่น: **${serverQueue.songs[0].title}**`);
	}
};