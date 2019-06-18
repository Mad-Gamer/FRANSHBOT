const Discord = require('discord.js');

const messages = [
    'welcome to the huge live and game cave :wave:',
    'Welcom to TwitchMadGaming :sunny:',
    'Hello, I hope you like it here.  <:MinnionExcited:https://media1.tenor.com/images/091dce7dfd72eaf126bb4767737c1a7b/tenor.gif?itemid=10479416>'
];

const images = [
    `https://media1.tenor.com/images/537b00dd8bdac0fb1831e5930dfdc9bd/tenor.gif?itemid=12025865`, //shrekgif
    `https://medias.francoischarron.com/thumbnail/medias.francoischarron.com/gifs/original/gif-humour-7Dn7VkrKPa.gif`, //gifjoconde
    `https://media.tenor.com/images/c93f6b355513bf7c1b3c415a83323fcd/tenor.gif`, //gifsimpson
    `https://media.tenor.com/images/f1b4974edac7876dc2fba34b3ecb2d50/tenor.gif`, //gif bobl'éponge
    `https://media.tenor.com/images/99f451146a0e21070f57bbd648723e4c/tenor.gif`, //gif avengers
    `https://media1.tenor.com/images/83e350b1245c670d8491958aa6029779/tenor.gif?itemid=4972673`, //gif cat
    `https://media1.tenor.com/images/4d615cf3736110120a34b969cc485caa/tenor.gif?itemid=10122431`, //gif ma famille dabord
    `https://media1.tenor.com/images/0708db2304e1dc441e96fe276c9426e8/tenor.gif?itemid=14220711`, //gif pikachu
    `https://media1.tenor.com/images/e5dab3697b62150a3b5b0f4b1a1f76f5/tenor.gif?itemid=5571450`,//gif surprise
    `https://media1.tenor.com/images/091dce7dfd72eaf126bb4767737c1a7b/tenor.gif?itemid=10479416` //gif de bienvenu
];

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function welcome(member, client) {
    let welcomemsg = randomItem(messages);
    let welcomeimg = randomItem(images);
    let embed = new Discord.RichEmbed()
    embed.setColor("#01B023")
        .setTimestamp()
        .addField(`${welcomemsg}`, `<@${member.user.id}>`)
        .setImage(`${welcomeimg}`)
        .setFooter(`${member.user.username} just entered the magic cave !`, `${member.user.displayAvatarURL}`)
    client.guilds.get('590579346272682032').channels.get('590579346272682032').send(embed);
}

module.exports = welcome;