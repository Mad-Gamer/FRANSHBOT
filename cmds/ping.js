const Discord = require("discord.js");

function ping(message, client, prefix) {

    if (message.content === prefix + 'ping') {
        message.channel.send(`Pong! ${Math.round(client.ping)} ms.`);
    }
}

module.exports = ping;