const Discord = require("discord.js")

const giflist = [
    `https://media1.tenor.com/images/537b00dd8bdac0fb1831e5930dfdc9bd/tenor.gif?itemid=12025865`, //shrekgif
    `https://medias.francoischarron.com/thumbnail/medias.francoischarron.com/gifs/original/gif-humour-7Dn7VkrKPa.gif`, //gifjoconde
    `https://media.tenor.com/images/c93f6b355513bf7c1b3c415a83323fcd/tenor.gif`, //gifsimpson
    `https://media.tenor.com/images/f1b4974edac7876dc2fba34b3ecb2d50/tenor.gif`, //gif bobl'éponge
    `https://media.tenor.com/images/99f451146a0e21070f57bbd648723e4c/tenor.gif`, //gif avengers
    `https://media1.tenor.com/images/83e350b1245c670d8491958aa6029779/tenor.gif?itemid=4972673`, //gif cat
    `https://media1.tenor.com/images/4d615cf3736110120a34b969cc485caa/tenor.gif?itemid=10122431`, //gif ma famille dabord
    `https://media1.tenor.com/images/0708db2304e1dc441e96fe276c9426e8/tenor.gif?itemid=14220711`, //gif pikachu
    `https://media1.tenor.com/images/e5dab3697b62150a3b5b0f4b1a1f76f5/tenor.gif?itemid=5571450`, //gif surprise
]

function randomItem(array){
    return array[Math.floor(Math.random() * array.length)]
}

function gifs(message,client,prefix){
    if(message.content === prefix + "gifs"){
        let gif = randomItem(giflist)
        let embed = new Discord.RichEmbed()
        embed
            .setTitle("On rigole bien avec mes GIFS ;D")
            .setColor("RANDOM")
            .setImage(gif)
            .setFooter("by GREEP avec l'aide MadGamer !")
        message.channel.send(embed)
    }    
}

module.exports = gifs;