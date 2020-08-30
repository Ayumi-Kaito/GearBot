module.exports = {
	name: 'skip',
	description: 'Skip command.',
	cooldown: 5,
	execute(message) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('มึงเข้าห้องก่อน');
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('ให้กูข้ามอากาศมั้ง');
		serverQueue.connection.dispatcher.end('ข้ามละ');
	}
};