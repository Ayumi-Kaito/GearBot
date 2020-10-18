require('dotenv').config();
const MusicClient = require('./struct/Client');
const { Collection } = require('discord.js');
const fs = require('fs');
const { readdirSync } = require('fs')
const client = new MusicClient({ token: process.env.TOKEN, prefix: process.env.DISCORD_PREFIX });
const config = require('./config.json')
const { sep } = require("path");


client.config = config;

fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
	  const event = require(`./events/${file}`);
	  let eventName = file.split(".")[0];
	  client.on(eventName, event.bind(null, client));
	});
  });

["commands", "aliases"].forEach(x => client[x] = new Collection());

const load = (dir = "./src/") => {

	readdirSync(dir).forEach(dirs => {
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

		for (const file of commands) {
			const pull = require(`${dir}/${dirs}/${file}`);
			if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
				if (client.commands.get(pull.help.name)) return console.warn(`${warning} Two or more commands have the same name ${pull.help.name}.`);
				client.commands.set(pull.help.name, pull);
				console.log(`${success} Loaded command ${pull.help.name}.`);

			}
			else {
				console.log(`${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
				continue;
			}
			if (pull.help.aliases && typeof (pull.help.aliases) === "object") {
				pull.help.aliases.forEach(alias => {
					if (client.aliases.get(alias)) return console.warn(`${warning} Two commands or more commands have the same aliases ${alias}`);
					client.aliases.set(alias, pull.help.name);
				});
			}
		}

	});
};
load();

/**
 * 
 * @description
 */

client.once('ready', () => console.log('READY!'));

/**
 * 
 * @param message
 */

//https://gist.github.com/Anish-Shobith/f818c6ef4e0bfa32c6527b219558e78a

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