const Discord = require("discord.js");

function ball(message, client, prefix){

    if(message.content.startsWith(prefix + "8ball") || message.content.startsWith(prefix + '8b')){
        const reponses = [
            'Prochainement',
            'Oui',
            'Absolument!',
            'Jamais',
            'Quand tu es prêt.',
            'Espérons',
            "Je suis un bot je ne peut pas vous repondre",
            'N\'espérons pas',
            'Pourquoi demandez-vous cela?',
            'Quel genre de question est-ce?',
            'Sur mon cadavre!',
            'Haha, Bonne blague !',
            'Tu es qui ?',
            'Mais nimp',
            'Serait tu un cousin de Lepen ??',
            'Non',
            "c'est drole ptdr",
            "01110010110000111010101010011",
            "Erreur 404",
            "Euuu FBI [Fausse bonne idée]",
            ". . .",
            "JPP chui mort",
            "ou sinon reflechis et t'auras peu etre la reponse ! *sinon c que t con*",
            "AH !",
            "Nan jure ?! *M'en blc frr*",
            "Tu es une sous race",
            "Tu suce pour un Mars ?",
            "Euuuh nique ta mère",
            "T'es drôle toi -_-",
            "Demande a ta mère",
            "Ne rage pas mon enfant",
            
            
        ];
 let args = message.content.split(" ")
        function randomItem(array) {
            return array[Math.floor(Math.random() * array.length)];
        }

        let reponse = randomItem(reponses);

        if (args.length < 1) {
            message.channel.send('Dis moi une phrase et je te répondrais ⚛️ !');
        } else
            message.channel.send("Voyons....").then((msg) => {
                msg.edit(`:8ball: | **${reponse}**`);
            });
}      
}

module.exports = ball;