const Discord = require("discord.js");

function twitchlive(message, client, prefix) {

    if (message.content.startsWith(prefix + 'twitchlive')) {
        let args = message.content.split(" ")
        args.shift()
        if (args.length < 1) return message.channel.send('https://www.twitch.tv/twitchmadgaming');
        let embed = new Discord.RichEmbed()
        embed.setColor("#01FFDD")
            .setTimestamp()
            .addField("here is the link to access the live ", `MA CHAINE TWITCH: \n [${args.join(" ")}](https://www.twitch.tv/twitchmadgaming${args.join("%20")})`)
        message.channel.send({ embed: embed });
    }
}

module.exports = twitchlive;