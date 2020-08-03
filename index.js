const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const rpc = [
    `SxilieaCommission โคตรรดี | ${client.guilds.cache.size} servers`,
    `สร้างบอตโดย อายูปี๊ | ${client.guilds.cache.size} servers`,
    `g.help เพื่อดูคำสั้ง | ${client.guilds.cache.size} servers`,
    ]; 
    
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
const cooldowns = new Discord.Collection();
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(() => {
        const rpcrandom = Math.floor(Math.random() * (rpc.length - 1) + 1);
        client.user.setActivity(rpc[rpcrandom]);
    }, 10000);
    });
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName)
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
        if (!command) return;

    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('นี่มันไม่ใช่ที่ที่ควรสั่งคำสั่งนะ, ไปสั่งในเซิร์ฟเวอร์!');
    }

    if (command.args && !args.length) {
        let reply = `คุณไม่ได้ระบุอาร์กิวเมนต์, ${message.author}!`;

        if (command.usage) {
            reply += `\nการใช้ที่ถูกต้องคือ: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);

    }


    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`หยุดก่อน! รออีก ${timeLeft.toFixed(1)} วินาทีก่อนที่จะใช้ \`${command.name}\` command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(message, args)
    } catch (error) {
        console.error(error);
        message.reply('รันคำสั่งผิดพลาด');
    }
});

client.login(process.env.TOKEN);
