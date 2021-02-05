const { MessageEmbed } = require('discord.js')
const MusicClient = require('../../struct/Client');
const client = new MusicClient
const { readdirSync } = require('fs');
const prefix = require('../../config.json')

module.exports.run = async (message, args) => {  
        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("ChanonBot")
            .setFooter(`A ${message.author.tag} Requested, at`, message.author.displayAvatarURL)
            .setTimestamp();
        if (!args[0]) {
            let command = args[0];
            let cmd;
            if (client.commands.has(command)) {
                cmd = client.commands.get(command);
            }
            else if (client.aliases.has(command)) {
                cmd = client.commands.get(client.aliases.get(command));
            }
            if(!cmd) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`));
            command = cmd.help;
            embed.setTitle(`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)} command help`);
            embed.setDescription([
                `❯ **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}`,
                `❯ **Description:** ${command.description || "No Description provided."}`,
                `❯ **Usage:** ${command.usage ? `\`${client.config.prefix}${command.name} ${command.usage}\`` : "No Usage"} `,
                `❯ **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None"}`,
                `❯ **Category:** ${command.category ? command.category : "General" || "Misc"}`,
            ].join("\n"));
    
            return message.channel.send(embed);
        }
        const categories = readdirSync("./src/");
        embed.setDescription([
            `Available commands for ${client.username}.`,
            `The bot prefix is **c.**`,
        ].join("\n"));
        categories.forEach(category => {
            const dir = client.commands.filter(c => c.help.category.toLowerCase() === category.toLowerCase());
            const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);
    
            try {
                if (dir.size === 0) return;
                if (client.config.owners.includes(message.author.id)) embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
                else if (category !== "Developer") embed.addField(`❯ ${capitalise}`, dir.map(c => `\`${c.help.name}\``).join(", "));
            }
            catch (e) {
                console.log(e);
            }
        });
    };
    

module.exports.help = {
    name: 'help',
    aliases: ['h'],
    category: "Info",
    description: 'Show all commands',
};