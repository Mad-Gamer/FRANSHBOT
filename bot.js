const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const cooldowns = new Discord.Collection();
const channelID = '593804684951683083';

function functiondate() {
    const datefu = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = datefu.getFullYear();
    const month = months[datefu.getMonth()];
    const getdate = datefu.getDate();
    const date = getdate + ' ' + month + ' ' + year;
    return date;
};

function functiontime() {
    const datefu = new Date();
    const hour = datefu.getHours();
    const min = datefu.getMinutes();
    const sec = datefu.getSeconds();
    const time = hour + ':' + min + ':' + sec;
    return time
}

const WatchDogs_3_countdown = require('./cmds/counter.js');

client.on('ready', () => {
    const readylog = `Logged in as ${client.user.tag}!\nOn ${functiondate(0)} at ${functiontime(0)}`
    console.log(readylog);
    client.user.setStatus('dnd')
    WatchDogs_3_countdown(client);
});

function updateStatus(guild){
    let max = guild.memberCount-1;
    let online = guild.members.filter(m => m.presence.status != 'offline').size-1;
    let formatString = 'Il y a : ' + online + '/' + max;
    let channel = guild.channels.get(channelID);
    if(channel.name !== formatString){
        channel.setName(formatString);
    }
}

const prefix = config.prefix
client.on('message', message => {
    WatchDogs_3_countdown(client);
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);

    if (message.author.bot) return;

    const gifs = require('./cmds/gifs.js');
    gifs(message, client, prefix);

    const speakup = require('./cmds/speakup.js');
    speakup(message, client, prefix);

    const time = require('./cmds/time.js');
    time(message, client, prefix);

    const ball = require('./cmds/ball.js');
    ball(message, client, prefix);

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

    const twitch_link = require('./cmds/twitchlive.js');
    twitch_link(message, client, prefix);
});

client.on('guildCreate', guild => {
    const botjoinguildlog = `${client.user.username} joined __${guild.name}__\n*ID: ${guild.id}*` 
    console.log(`[${functiondate(0)} - ${functiontime(0)}]\n${botjoinguildlog}`)

});

client.on('guildDelete', guild => { 
    const botleftguildlog = `${client.user.username} left __${guild.name}__\n*ID: ${guild.id}*`
    console.log(`[${functiondate(0)} - ${functiontime(0)}]\n${botleftguildlog}`)
});

client.on('guildMemberAdd', function (member) {
    updateStatus(member.guild);
});

client.on('guildMemberRemove', function (member) {
    updateStatus(member.guild);
});

client.on('presenceUpdate', function (member) {
    updateStatus(member.guild);
});

client.login(config.token);
