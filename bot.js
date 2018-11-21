const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : End `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});

client.on('message', msg =>{
        let args = msg.content.slice(4);
  if (msg.author.id !== '316324088865882142') return;
  if (msg.content.startsWith('say')) {
   msg.channel.send(args)   
  }
})

client2.on('message', msg =>{
        let args = msg.content.slice(4);
  if (msg.author.id !== '316324088865882142') return;
  if (msg.content.startsWith('say')) {
   msg.channel.send(args)   
  }
})

client3.on('message', msg =>{
        let args = msg.content.slice(4);
  if (msg.author.id !== '316324088865882142') return;
  if (msg.content.startsWith('say')) {
   msg.channel.send(args)   
  }
})

client4.on('message', msg =>{
        let args = msg.content.slice(4);
  if (msg.author.id !== '316324088865882142') return;
  if (msg.content.startsWith('say')) {
   msg.channel.send(args)   
  }
})

client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Mohamed Padr , Farm Credit By Mohamed Padr, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Mohamed Padr , Farm Credit By Mohamed Padr, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Mohamed Padr , Farm Credit By Mohamed Padr, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client4.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Mohamed Padr , Farm Credit By Mohamed Padr, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




var ServerID = "509375429413699585";
var ChannelID = "514413581064994816";

client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By End','\n','ProBot credits miner is ready!'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


    client.on('ready', () => {
    function timerFunc() {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 
    }

    var timer = setInterval(timerFunc, 1000);


    });



client2.on('warn', console.warn);

client2.on('error', console.error);


client2.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By End','\n','ProBot credits miner is ready!'));

client2.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client2.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


    client2.on('ready', () => {
    function timerFunc() {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 
    }

    var timer = setInterval(timerFunc, 1000);


    });



client3.on('warn', console.warn);

client3.on('error', console.error);


client3.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By End','\n','ProBot credits miner is ready!'));

client3.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client3.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


    client3.on('ready', () => {
    function timerFunc() {
        client3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 
    }

    var timer = setInterval(timerFunc, 1000);


    });



client4.on('warn', console.warn);

client4.on('error', console.error);


client4.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By End','\n','ProBot credits miner is ready!'));

client4.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client4.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


    client4.on('ready', () => {
    function timerFunc() {
        client4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 
    }

    var timer = setInterval(timerFunc, 1000);


    });






















client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client2.login(process.env.TOKEN3);// لا تغير فيها شيء
client2.login(process.env.TOKEN4);// لا تغير فيها شيء
