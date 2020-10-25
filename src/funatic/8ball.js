module.exports.run = async (message, args) => {

        function RANDOM() {
            let banswer = [
                "Yes",
                "No",
                "For sure!",
                "Not in a century"
            ]
            return banswer[Math.floor(Math.random() * banswer.length)]
        }

        if(!args) return;
        message.channel.send(RANDOM())
    }


module.exports.help = {
    name: "8ball",
    aliases: ['8b'],
    args: true,
    category: "Fun",
};