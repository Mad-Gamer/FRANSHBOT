const Discord = require('discord.js');
function days_until_WatchDogs_3(){
    var distance = milliseconds_until_WatchDpgs_3()
    var days = Math.floor( milliseconds_until_WatchDogs_3()/(1000*60*60*24) );
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
function milliseconds_until_WatchDogs_3(){
    return Date.parse("Mars 6 2010 00:00:00 GMT-0400") - Date.parse(new Date());
}


function WatchDogs_3_countdown(client) {
    const channel = client.channels.get('591620909987790879');
        if (!channel) {
        console.log(`Channel: ${channel_id} cannot be found`);
        return;
    }
}
    
    const cd = function() {
        if (milliseconds_until_WatchDogs_3() < 0) {
            channel.setName(`WatchDogs 3 is coming !!`).catch(err=>console.log(err));
            return;
        }
        const text = `${days_until_WatchDogs_3()}`
        channel.setName(`${text}`)
            .then(a=>setTimeout(cd, 1000))
            .catch(err=>console.log(err));
    };
    cd();


module.exports = WatchDogs_3_countdown;