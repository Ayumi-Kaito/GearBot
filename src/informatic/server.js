module.exports = {
    name: 'server',
    args: false,
    category: "",
    execute: async(message) => {
        let verify = ["None", "Low", "Medium", "High", "Highest"];
        let region = {
            "brazil": ":flag_br: Brazil",
            "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
        const MessageEmbed = require('discord.js')
        let embed = new MessageEmbed()
        .setTitle(`${message.guild.name} server info`)
        .setThumbnail(message.guild.iconURL)
        .addField("Name", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Owner", `<@${message.guild.owner.user.id}>`, true)
        .addField("Region", region[message.guild.region], true)
        .addField("All members", `${message.guild.members.size}`, true)
        .addField("Bots", `${message.guild.members.filter(member => !member.user.bot).size}`, true)
        .addField("Members", `${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Verification Level", verify[message.guild.verificationLevel], true)
        .addField("Channels", message.guild.channels.size, true)
        .addField("Roles", message.guild.roles.size, true)
        .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        message.channel.send(embed)
    }
}