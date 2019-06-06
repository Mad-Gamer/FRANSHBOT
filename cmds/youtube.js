const Discord = require("discord.js");

function youtube(message, client, prefix) {

    if (message.content.startsWith(prefix + 'yt')) {
        let args = message.content.split(" ")
        args.shift()
        if (args.length < 1) return message.channel.send('https://www.youtube.com/');
        let embed = new Discord.RichEmbed()
        embed.setColor("#00ff00")
            .setTimestamp()
            .addField("Voila votre recherche", `Recheche [Youtube]: \n [${args.join(" ")}](https://www.youtube.com/results?search_query=${args.join("%20")})`)
            .setThumbnail("https://media.giphy.com/media/2LA53y7maD8is/giphy.gif")
            .setFooter("Recherche YT ", "https://media.giphy.com/media/2LA53y7maD8is/giphy.gif")
            .setFooter("MadGamer : plein de nouveaux trucs cool vont arrivé 😜! | ", `${client.user.displayAvatarURL}`)
        message.channel.send({ embed: embed });
    }
}

module.exports = youtube;