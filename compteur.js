const discord = require('discord.js');
const client = new Discord.client;
client.token = require('./config.json').token;

const channelID = '590845015727538196';

client.token('ready', () => {
    console.log('ready !');
    client.user.setActivity('!help', {type: "WATCHING"});
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

function updateStatus(guild){
    let max = guild.memberCount-1;
    let online = guild.members.filter(m => m.prensence.status != 'offline').size-1;
    let formatString = 'il y a : ' + online+ '/' + max
    let channel = guild.channel.get(channelID);
    if(channel.name !== formatString){
        channel.setName(formatString);
    }
}


client.login(client.token);