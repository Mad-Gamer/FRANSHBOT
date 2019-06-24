const Discord = require('discord.js');


function twitch_link(message, client, prefix) {
    if (message.content === prefix + 'twitchlive') {
        message.channel.send('**TwitchMadGaming : n\'hésitez pas à venir en masse et à partager un max le live!\
             \rJe vous retrouve tout de suite dessus! Le lien :** \r\r \
              https://www.twitch.com/twitchmadgaming');
    };
};

module.exports = twitch_link;