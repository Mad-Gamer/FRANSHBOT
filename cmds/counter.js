const Discord = require('discord.js');

function milliseconds_until_WatchDogs_3(){
    return Date.parse("Mars 6 2020 00:00:00 GMT+0200") - Date.parse(new Date());
}
function days_until_WatchDogs_3(){
    var distance = milliseconds_until_WatchDogs_3()
    var days = Math.floor( milliseconds_until_WatchDogs_3()/(1000*60*60*24) );
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function WatchDogs_3_countdown(client) {
    const channel = client.channels.get('593723613874618379');
        if (!channel) {
        console.log(`Channel: ${channel.id} cannot be found`);
        return;
    }
    const cd = function() {
        if (milliseconds_until_WatchDogs_3() < 0) {
            channel.setName(`WatchDogs 3 coming soon!!`).catch(err=>console.log(err));
            return;
        }
        const text = `${days_until_WatchDogs_3()}`
        channel.setName(`${text}`)
            .then(a=>setTimeout(cd, 1000))
            .catch(err=>console.log(err));
    };
    cd();
}
    
    


module.exports = WatchDogs_3_countdown;