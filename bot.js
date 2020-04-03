const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Olá meu prefixo é `;`")}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

    let status = [
        {name:`me adicione em um servidor entrando em "bruti-bot.glitch.me"`},
        {name:`Estou em ${client.guilds.size} servidores`},
        {name:`estou em desenvolvimento`},
        {name:`aleluia uma hospedagem😀😁`},
        {name:`o kauã ta cansado só de ter ficado um tempão programando isso:)`},
        {name:`${client.users.size} pessoas!`, type: 'LISTENING'}
        ]
        function setStatus(){ 
            let randomStatus = status[Math.floor(Math.random()*status.length)]
            client.user.setPresence({game: randomStatus})
        }
        setStatus();
        setInterval(() => setStatus(),5000)



})

client.login(config.token)
