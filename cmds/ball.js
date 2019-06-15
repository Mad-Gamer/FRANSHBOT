const Discord = require("discord.js");

function ball(message, client, prefix){

    if(message.content.startsWith(prefix + "8ball") || message.content.startsWith(prefix + '8b')){
        const reponses = [
            'shortly',
            'yes',
            'Absolutely!',
            'Jamais',
            'When you are ready.',
            'hopefully',
            "I am a bot I can not answer you",
            'N\'hope not',
            'Why are you asking this?',
            'What kind of question is this?',
            'On my corpse!',
            'Haha, good joke !',
            'Who are you ?',
            'Would you be a cousin of Lepen ??',
            'NO',
            "it's funny ptdr",
            "01110010110000111010101010011",
            "Fault 404",
            ". . .",
            "JPP I am dead",
            "or else think about it and you will be able to be the answer ! *if not what you are con*",
            "AH !",
            "You are a sub race",
            "You suck for a Mars ?",
            "Euuuh fuck your mother",
            "You're funny, you -_-",
            "Ask your mother",
            "Do not rage my child",
            
            
        ];
 let args = message.content.split(" ")
 args.shift()
        function randomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        let reponse = randomItem(reponses);

        if (args.length < 1) {
            message.channel.send('**Ask me a question brothel !**');
        } else
            message.channel.send("Let's....").then((msg) => {
                msg.edit(`:8ball: | **${reponse}**`);
            });
}      
}

module.exports = ball;