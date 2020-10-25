module.exports.run = async (message, args) => {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
          message.channel.send("Too low permission!")
      }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`I kick ${user.tag}`);
          })
          .catch(err => {
            message.reply('I can\'t kick!');
            console.error(err);
          });
      } else {
        message.reply("I don't want to kick ghosts or dead people");
      }
    } else {
      message.reply("I don't want to kick \"\"");
    }
  }


module.exports.help = {
  name: "kick",
  category: "Moderate",
};