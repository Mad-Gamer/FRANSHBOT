const Discord  = require('discord.js');
const client = new Discord.Client;

const channelID = 'ID DU CHANNEL';

client.on('ready', () => {
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
    let online = guild.members.filter(m => m.presence.status != 'offline').size-1;
    let formatString = 'Il y a : ' + online + '/' + max;
    let channel = guild.channels.get(channelID);
    if(channel.name !== formatString){
        channel.setName(formatString);
    }
}




client.login(config.token);