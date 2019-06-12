const Discord = require("discord.js");

function bug(message, client, prefix) {

    if (message.content.startsWith(prefix + 'bugs')) {
        message.channel.send('Le BOT bug ? then click on the link to explain : https://github.com/Mad-Gamer/FRANSHBOT/issues/created_by/Mad-Gamer');
    }
}

module.exports = bug;