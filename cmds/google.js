const Discord = require("discord.js");

function google(message, client, prefix) {

    if (message.content.startsWith(prefix + 'google')) {
        let args = message.content.split(" ")
        args.shift()
        if (args.length < 1) return message.channel.send('https://www.google.com/');
        let embed = new Discord.RichEmbed()
        embed.setColor("#00ff00")
            .setTimestamp()
            .addField("Voila votre recherche", `Recheche [Google]: \n [${args.join(" ")}](https://www.google.fr/#q=${args.join("%20")}&btnI=I%27m+Feeling+Lucky)`)
            .setThumbnail("http://www.slate.com/content/dam/slate/blogs/future_tense/2015/09/01/google_s_new_animated_logo_is_the_future_of_mobile_branding/google_logo.gif.CROP.original-original.gif")
            .setFooter("Recherche Google ", "http://www.slate.com/content/dam/slate/blogs/future_tense/2015/09/01/google_s_new_animated_logo_is_the_future_of_mobile_branding/google_logo.gif.CROP.original-original.gif")
            .setFooter("MadGamer : plein de nouveaux trucs cool vont arrivé 😜! | ", `${client.user.displayAvatarURL}`)
        message.channel.send({ embed: embed });

    }
}

module.exports = google;