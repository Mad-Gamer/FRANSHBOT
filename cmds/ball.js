const Discord = require("discord.js");

function ball(message, client, prefix){

    if(message.content.startsWith(prefix + "8ball") || message.content.startsWith(prefix + '8b')){
        const reponses = [
            'shortly',
            'oui',
            'absolument!',
            'Jamais',
            'Quand vous serez prêt.',
            'avec un peu de chance',
            "Je suis un bot je ne peux pas vous répondre",
            'N\'no ntm',
            'Pourquoi tu me demandes ça ??',
            'MIAW MIAW NIBBA',
            'Sur mon cadavre!',
            'Haha, bonne blague !',
            'Qui est tu ?',
            'Seriez-vous un cousin de Lepen ??',
            'NO',
            "c'est marrant ptdr",
            "01110010110000111010101010011",
            "erreur 404",
            ". . .",
            "JPP je suis mort",
            "ou bien pensez-y et vous serez en mesure d'être la réponse. !",
            "AH !",
            "Vous êtes une sous-race",
            "Tu suce pour un Mars ?",
            "Euuuh Va te faire foutre, ta mère.",
            "Tu es drôle, -_-",
            "Demande à ta mère",
            "Ne ragez pas mon enfant",
        
            
            
        ];
 let args = message.content.split(" ")
 args.shift()
        function randomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        let reponse = randomItem(reponses);

        if (args.length < 1) {
            message.channel.send('**Pose moi une question bordel !**');
        } else
            message.channel.send("Allons....").then((msg) => {
                msg.edit(`:8ball: | **${reponse}**`);
            });
}      
}

module.exports = ball;