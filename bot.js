const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`break servers...`)

});

const prefix = config.prefix
client.on('message', message => {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);

    if (message.author.bot) return;

    const gifs = require('./cmds/gifs.js');
    gifs(message, client, prefix);

    const ping = require('./cmds/ping.js');
    ping(message, client, prefix);

    const google = require('./cmds/google.js');
    google(message, client, prefix);

    const youtube = require('./cmds/youtube.js');
    youtube(message, client, prefix);

    const help = require('./cmds/help.js');
    help(message, client, prefix);

    const report = require('./cmds/report.js');
    report(message, client, prefix, args);

    const kick = require('./cmds/kick.js');
    kick(message, client, prefix, args);

    const ban = require('./cmds/ban.js');
    ban(message, client, prefix, args);

    const clear = require('./cmds/clear.js');
    clear(message, client, prefix, args);

    const level = require('./cmds/level.js');
    level(message, client, prefix,);

    const botinfo = require('./cmds/botinfo.js');
    botinfo(message, client, prefix);

    const serverinfo = require('./cmds/serverinfo.js');
    serverinfo(message, client, prefix);

    const userinfo = require('./cmds/userinfo.js');
    userinfo(message, client, prefix);

    const bugs = require('./cmds/bugs.js');
    bugs(message, client, prefix);

    const invites = require('./cmds/invites.js');
    invites(message, client, prefix);
});

client.login(config.token);