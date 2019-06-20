const Discord = require('discord.js');

function speakup(message, client, prefix) {

    const speakup = [
        '“Hey, how are you, my friend?!”',
        '“I hope youre getting some good on the server.”',
        '“what is two holes in a hole”',
        '“...”',
        '“Dont talk to me. Im not in a good mood.”',
        '“youre more chocolate or chocolate bread.”',
        ]

    function randomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    if (message.content.startsWith(prefix + 'speakup')) {
        let rspeakup = randomItem(speakup);

        let embed = new Discord.RichEmbed()
            embed.setColor("#4C01C4")
                .addField("here is one answer among others :", `${rspeakup}`)
                .setFooter("don't worry about any more sentences coming soon so no you can propose some.")
                .setFooter(`you're still mad at me, so type the following command? ${prefix}speakup`, `${client.user.avatarURL}`)
                .setFooter(`By MadGamer`)
            message.channel.send({ embed: embed })
    }
}

module.exports = speakup;