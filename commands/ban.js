module.exports = {
    name: "ban",
execute(message, args) {
if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
          message.channel.send("ยศต่ำไป")
      }
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .ban({
            reason: 'Umm',
          })
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