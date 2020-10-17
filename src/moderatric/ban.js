module.exports = {
    name: "ban",
execute(message, args) {
      if(!message.member.hasPermission("BAN_MEMBERS")) {
          message.channel.send("You don't have permissions to kick.")
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
            message.reply(`I already kick ${user.tag}`);
          })
          .catch(err => {
            message.reply('I can\'t kick');
            console.error(err);
          });
      } else {
        message.reply("I don't want to kick ghost or dead people.");
      }
    } else {
      message.reply("I don't want to kick  \"\" ");
    }
  }
}
