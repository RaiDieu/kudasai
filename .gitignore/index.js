const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = ("?")
bot.login("NDM1Mzk2MTE1OTg3MTY5MzAx.DbZavQ.O64C1MB-FEkGSEUssqY80jpsErA");

bot.on('ready', function() {
    bot.user.setGame("");
    console.log("Connectedç");
});
bot.on('guild.member.add', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})
bot.on('message', message => {
    if (message.content === prefix + "Yamete!"){
        message.channel.sendMessage("Kudasai !");
    }

    if (message.content === prefix + "info"){
        var embed = new Discord.RichEmbed()
            .setTitle("Ｙᴀ ᴍ ᴇ ᴛ ᴇ ! 『止めて』")
            .setDescription("Ｙᴀ ᴍ ᴇ ᴛ ᴇ ! 『止めて』, est un serveur communautaire, du hentai est à disposition avec un choix très large au niveau des catégories.") 
            .setColor("0x04B486")
            .setFooter("Amusez vous bien !")
        message.channel.sendEmbed(embed);
    }
})
