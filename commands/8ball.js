module.exports = {
    name: "8ball",
    execute(message, args) {

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
}