module.exports = {
    name: "kick",
execute(message, args) {
if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
      if(!message.member.hasPermission("KICK_MEMBERS")) {
          message.channel.send("ยศต่ำไป")
      }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`เตะ ${user.tag} ละ`);
          })
          .catch(err => {
            message.reply('กูเตะไม่ได้!!!!!!!!');
            console.error(err);
          });
      } else {
        message.reply("ไม่รับเตะผี");
      }
    } else {
      message.reply("ไม่รับเตะอากาศ");
    }
  }
}
}