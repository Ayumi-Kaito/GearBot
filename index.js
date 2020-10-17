require('dotenv').config();
const MusicClient = require('./struct/Client');
const { Collection } = require('discord.js');
const fs = require('fs');
const client = new MusicClient({ token: process.env.TOKEN, prefix: process.env.DISCORD_PREFIX });

const modules = ['music', 'moderatric', 'economic', 'informatic', 'funatic'];

modules.forEach(file => {
	fs.readdir(`./src/${file}/`, (err, files) => { 
	if (err) throw err; 
	console.log(`bruh`); 
	​
	files.forEach(f => {
	const props = require(`./src/${file}/${f}`);
	client.commands.set(props.help.name, props); 
	props.conf.aliases.forEach(alias => { 
	client.aliases.set(alias, props.name); 
});
});
});
});
//https://medium.com/discordbot/create-a-basic-command-handler-for-your-discord-js-bot-4e24e17cb594

client.once('ready', () => console.log('READY!'));
client.on('message', message => {
	if (!message.content.startsWith(client.config.prefix) || message.author.bot) return;
	const args = message.content.slice(client.config.prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	if (command.guildOnly && message.channel.type !== 'text') return message.reply('I can\'t execute that command inside DMs!');
	if (command.args && !args.length) {
		let reply = `No args, ${message.author}!`;
		if (command.usage) reply += `\nCorrect usage is: \`${client.config.prefix}${command.name} ${command.usage}\``;
		return message.channel.send(reply);
	}
	if (!client.cooldowns.has(command.name)) {
		client.cooldowns.set(command.name, new Collection());
	}
	client.user.setActivity(`${client.guilds.cache.size} servers | c.help`, {
		type: "WATCHING",
	  });
	const now = Date.now();
	const timestamps = client.cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`wait ${timeLeft.toFixed(1)} before reusing \`${command.name}\``);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('ERR!');
	}
});

client.login(client.config.token);