const Discord = require('discord.js')
exports.run = async (client, message, args, prefix) => {

    if(message.deletable) message.delete();
        
        if(args.length < 0)return message.reply(`Não tem nada para falar?`).then(m => m.delete(5000));

        let roleColor = message.guild.me.displayHexColor;

        if(args[0].toLowerCase() === "embed"){
            let embed = new RichEmbed()
            .setTimestamp()
            .setTitle(`${message.author.username}`)
            .setDescription(args.slice(1).join(" "))
            .setColor(roleColor === "#000000" ? "#ffffff" : roleColor)    

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "))}}