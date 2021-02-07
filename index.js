
    
    const Dis = require('discord.js');///////Birdyt
    const Nova = new Dis.Client();///////Birdyt
    const fs = require('fs');///////Birdyt
    const sdb = require('x73db');///////Birdyt
    const db = new sdb("points");///////Birdyt
    const Canvas = require("canvas");///////Birdyt
    // const Canvas2 = require("Canvas-constructor");
    const { registerFont } = require('canvas');///////Birdyt
    registerFont('Cairo-Black.ttf', { family: 'Cario' });
    const jimp = require("jimp");///////Birdyt
    const prefix = "*"; //البريفكس الخاص بك


    Nova.on('ready', () => {
        console.log(`Logged in ${Nova.user.tag}!`);
        Nova.user.setActivity(`USE ${prefix}help To Get Commands`);//الحالة اللي تبيها
        });  

    Nova.on('message', msg => {
        if(msg.author.bot) return;
                
                  if (msg.content.startsWith(prefix + 'فكك') || msg.content.startsWith(prefix+"fkk")) {
                    if(!msg.channel.guild) return msg.reply('**هذا الأمر للسيرفرات فقط**').then(ms => ms.delete(3000));

                  const type = require('./fkk.json');
                  const item = type[Math.floor(Math.random() * type.length)];
              let author = msg.author;
                  const filter = response => {

                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };///////Birdyt
                  msg.channel.send('**لديك __20__ ثانيه لتفكيك الكلمه**').then(async msg => {
                    const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743551839512821822/807653962575773716/sdfg.png");
                    const canvas =  Canvas.createCanvas(700, 250);///////Birdyt
              const  ctx = canvas.getContext('2d');
                    const fkk = "فكك الجملة:";
                  ctx.fillStyle = '#ffffff';
                  
              
              ctx.drawImage(background, 10, 0, canvas.width, canvas.height);///////Birdyt
      
              ctx.font = '25px Cario';
            
              ctx.strokeRect(0, 0, canvas.width, canvas.height);///////Birdyt
              
          

    ctx.fillText(fkk  , 535, 50);///////Birdyt
    ctx.font = '35px Cario';
    ctx.textAlign = "center";
            ctx.fillText(item.type  , 300, 160);
        


                let url = msg.author.displayAvatarURL({ dynamic: true, format: "png" });
                jimp.read(url, (err, ava) => { 
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                      
                    
              let Avatar = Canvas.Image;
              let ava = new Avatar;
              ava.src = buf;
              ctx.beginPath();///////Birdyt
              ctx.arc(999, 999, 999, 999, Math.PI*2);
                ctx.closePath(); 
                ctx.clip();
                ctx.drawImage(ava, 999, 999, 999, 999);   
                    const attachment = new Dis.MessageAttachment(canvas.toBuffer());

    msg.channel.send(attachment);///////Birdyt
    })

    msg.channel.awaitMessages(filter, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                }).then(collected => {
      copy = collected.first().content;
      won = collected.first().author;
      let r = db.get(`points_${won.id}`);
      if (copy == item.answers){
        if(!r) {
          r = 0;
          db.set(`points_${won.id}`, 0);///////Birdyt
        }
        var embed = new Dis.MessageEmbed() 
          .setColor('#ffffff')
          .setDescription(`**${collected.first().author} ✅احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`)
    msg.channel.send(embed);
    console.log(`[Typing] ${collected.first().author} typed the word.`);
                  copy = collected.first().content;
        db.set(`points_${won.id}`, r + 1);
      }else{
                if(!r) {
          r = 0;
          db.set(`points_${won.id}_trgm`, 0);
        } 
        var embed = new Dis.MessageEmbed()
          .setColor('#ffffff')
          .setDescription(`**${collected.first().author} ✅احسنت لقد تمكنت من تفكيك الكلمه بسرعه**`)
    msg.channel.send(embed);
    console.log(`[Typing] ${collected.first().author} typed the word.`);
                  copy = collected.first().content;
        db.set(`points_${won.id}_trgm`, r + 1);
      }
      })
      .catch(collected=>{
        let embed = new Dis.MessageEmbed()
        .setTitle(`Time End`)
        .setColor('RED')
        .setDescription(`**20 ثانية لقد انتهت حظ اوفر**`)
        .setImage(Nova.user.avatarURL)
        msg.channel.send(embed);
      })///////Birdyt

    })///////Birdyt

    })///////Birdyt
    }
  });///////Birdyt
  Nova.on("message", async message =>{
    let args = message.content.split(" ");///////Birdyt
    if(args[0] == prefix + "help"){
                  let embed = new Dis.MessageEmbed()
.setTitle(`Commands Games ${Nova.user.username}`)
.setColor(`RANDOM`)
.setImage(Nova.user.avatarURL())///////Birdyt
.addField(`\`${prefix}fkk\` Or \`${prefix}فكك\``, `\`للعب لعبة فكك مع اصدقائك بالسيرفر \``)
.addField(`\`${prefix}type\` Or \`${prefix}اسرع\``, `\`للعب لعبة اسرع مع اصدقائك بالسيرفر\``)///////Birdyt
.addField(`\`${prefix}ترجم\` Or \`${prefix}translate\``, `\`للعب لعبة ترجمة مع اصدقائك بالسيرفر\``)
.addField(`\`${prefix}info\` Or \`${prefix}معلومات\``, `\`لرؤية معلومات مطور البوت\``)///////Birdyt
///////Birdyt
message.channel.send(embed);
    }else if(args[0] == prefix + "info" || args[0] == prefix + "معلومات"){
                        let embed = new Dis.MessageEmbed()
.setColor(`RANDOM`)
.setImage(Nova.user.avatarURL())///////Birdyt
.setDescription(`by Bird YT`)
      message.channel.send(embed);///////Birdyt
    }
  })

Nova.on('message', msg => {
        if(msg.author.bot) return;
                let args = msg.content.split(" ");
                  if (args[0] == prefix + "type" ||args[0] == prefix + "اسرع") {
                    if(!msg.channel.guild) return msg.reply('**هذا الأمر للسيرفرات فقط**').then(ms => ms.delete(3000));

                  const type = require('./type.json');
                  const item = type[Math.floor(Math.random() * type.length)];
              let author = msg.author;
                  const filter = response => {
                    
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  msg.channel.send('**لديك __20__ ثانية لكتابة الكلمة**').then(async msg => {
                    const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743551839512821822/807653962575773716/sdfg.png");
                    const canvas =  Canvas.createCanvas(700, 250);
              const  ctx = canvas.getContext('2d');
                    const fkk = "أكتب الجملة:";
                  ctx.fillStyle = '#ffffff';///////Birdyt
 
                  
              
              ctx.drawImage(background, 10, 0, canvas.width, canvas.height);
      
              ctx.font = '25px Cario';
            
              ctx.strokeRect(0, 0, canvas.width, canvas.height);
              
          

    ctx.fillText(fkk  , 535, 50);
    ctx.font = '35px Cario';
    ctx.textAlign = "center";
            ctx.fillText(item.type  , 300, 160);

                    

                let url = msg.author.displayAvatarURL({ dynamic: true, format: "png" }).endsWith(".webp") ? msg.author.displayAvatarURL({ dynamic: true, format: "png" }).slice(5, -20) + ".png" : msg.author.displayAvatarURL({ dynamic: true, format: "png" });
                jimp.read(url, (err, ava) => { 
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

              let Avatar = Canvas.Image;
              let ava = new Avatar;
              ava.src = buf;
                    const attachment = new Dis.MessageAttachment(canvas.toBuffer());

    msg.channel.send(attachment);
    })

    msg.channel.awaitMessages(filter, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                }).then(collected => {
      copy = collected.first().content;
      won = collected.first().author;
      let r = db.get(`points_${won.id}_type`);
      if (copy == item.answers){
        if(!r) {
          r = 0;
          db.set(`points_${won.id}_type`, 0);
        } 
        var embed = new Dis.MessageEmbed()
          .setColor('#ffffff')
          .setDescription(`**${collected.first().author} ✅احسنت لقد تمكنت من كتابة الكلمه بسرعه**`)
    msg.channel.send(embed);
    console.log(`[Typing] ${collected.first().author} typed the word.`);
                  copy = collected.first().content;
        db.set(`points_${won.id}_type`, r + 1);
      }else{
                if(!r) {
          r = 0;
          db.set(`points_${won.id}_trgm`, 0);
        } 
        var embed = new Dis.MessageEmbed()
          .setColor('#ffffff')
          .setDescription(`**${collected.first().author} ✅احسنت لقد تمكنت من كتابة الكلمه بسرعه**`)
    msg.channel.send(embed);
    console.log(`[Typing] ${collected.first().author} typed the word.`);
                  copy = collected.first().content;
        db.set(`points_${won.id}_trgm`, r + 1);
      } 
      })
      .catch(collected=>{
                let embed = new Dis.MessageEmbed()
        .setTitle(`Time End`)
        .setColor('RED')
        .setDescription(`**20 ثانية لقد انتهت حظ اوفر**`)
        .setImage(Nova.user.avatarURL)
        msg.channel.send(embed);
      })

    })

    })
    }
  });
  Nova.on('message', msg => {
        if(msg.author.bot) return;
                
                  if (msg.content.startsWith(prefix + 'ترجم') || msg.content.startsWith(prefix+"translate")) {
                    if(!msg.channel.guild) return msg.reply('**هذا الأمر للسيرفرات فقط**').then(ms => ms.delete(3000));

                  const type = require('./trgm.json');
                  const item = type[Math.floor(Math.random() * type.length)];
              let author = msg.author;
                  const filter = response => {
                    
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  msg.channel.send('**لديك __20__ ثانية لكتابة الكلمة**').then(async msg => {
                    const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/743551839512821822/807653962575773716/sdfg.png");
                    const canvas =  Canvas.createCanvas(700, 250);
              const  ctx = canvas.getContext('2d');
                    const fkk = "ترجم الكلمة:";
                  ctx.fillStyle = '#ffffff';
   
                  
              
              ctx.drawImage(background, 10, 0, canvas.width, canvas.height);
      
              ctx.font = '25px Cario';
            
              ctx.strokeRect(0, 0, canvas.width, canvas.height);
              
          

    ctx.fillText(fkk  , 535, 50);
    ctx.font = '35px Cario';
    ctx.textAlign = "center";
            ctx.fillText(item.type  , 300, 160);

                    

                let url = msg.author.displayAvatarURL({ dynamic: true, format: "png" }).endsWith(".webp") ? msg.author.displayAvatarURL({ dynamic: true, format: "png" }).slice(5, -20) + ".png" : msg.author.displayAvatarURL({ dynamic: true, format: "png" });
                jimp.read(url, (err, ava) => { 
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

              let Avatar = Canvas.Image;
              let ava = new Avatar;
              ava.src = buf;
                    const attachment = new Dis.MessageAttachment(canvas.toBuffer());

    msg.channel.send(attachment);
    })

    msg.channel.awaitMessages(filter, {
                  max: 1,
                  time: 20000,
                  errors: ['time']
                }).then(collected => {
      copy = collected.first().content;
      won = collected.first().author;
      let r = db.get(`points_${won.id}_trgm`);
      if (copy == item.answers){
        if(!r) {
          r = 0;
          db.set(`points_${won.id}_trgm`, 0);
        }
        var embed = new Dis.MessageEmbed()
          .setColor('#ffffff')
          .setDescription(`**${collected.first().author} ✅احسنت لقد تمكنت من كتابة الكلمه بسرعه**`)
    msg.channel.send(embed);
    console.log(`[Typing] ${collected.first().author} typed the word.`);
                  copy = collected.first().content;
        db.set(`points_${won.id}_trgm`, r + 1);
      }else{
                if(!r) {
          r = 0;
          db.set(`points_${won.id}_trgm`, 0);
        } 
        var embed = new Dis.MessageEmbed()
          .setColor('#ffffff')
          .setDescription(`**${collected.first().author} ✅احسنت لقد تمكنت من كتابة الكلمه بسرعه**`)
    msg.channel.send(embed);
    console.log(`[Typing] ${collected.first().author} typed the word.`);
                  copy = collected.first().content;
        db.set(`points_${won.id}_trgm`, r + 1);
      } 
      })
      .catch(collected=>{
                let embed = new Dis.MessageEmbed()
        .setTitle(`Time End`)
        .setColor('RED')
        .setDescription(`**20 ثانية لقد انتهت حظ اوفر**`)
        .setImage(Nova.user.avatarURL)
        msg.channel.send(embed);
      })

    })

    })
    }
  });
    Nova.on("message", async message =>{
      let args = message.content.split(" ");
      let c = message.mentions.members.first();
      let embed = new Dis.MessageEmbed()
      .setColor(`GREEN`);
      let cmd = ["نقاط","النقاط","points","Points","POINTS","ME","wtf"];
      if(cmd.some(c => message.content.includes(c))){
        if(!c){
          let points = db.get(`points_${message.author.id}`)
                    let pointstype = db.get(`points_${message.author.id}_type`)
                    let pointstrgm = db.get(`points_${message.author.id}_trgm`)
                              if(!pointstype) pointstype = 0;
          if(!points) points = 0;
          if(!pointstrgm) pointstrgm = 0;

        embed.setTitle(`Your Points`)
        embed.addField(` **Fkk = || فكك** ` , `\`${points}\``)
        embed.addField(` **Type = || اسرع** ` , `\`${pointstype}\``)
        embed.addField(` **translate = || ترجم** ` , `\`${pointstrgm}\``)
        embed.addField(`**xo = || اكس او**`,`\`${pointsxo}\``)
        embed.setThumbnail(message.author.avatarURL())
      message.channel.send(embed);

        }else{
          let points = db.get(`points_${c.id}`)
          let pointstype = db.get(`points_${c.id}_type`)
          let pointstrgm = db.get(`points_${c.id}_trgm`)
          let pointsxo   = db.get(`points_${c.id}_xo`)
          if(!pointstype) pointstype = 0;
          if(!points) points = 0;
          if(!pointstrgm) pointstrgm = 0;
          if(!pointxo) pointsxo = 0;
          
                   
        embed.setTitle(`Points ${c.user.username}`)
        embed.addField(` **Fkk = || فكك** ` , `\`${points}\``)
        embed.addField(` **Type = || اسرع** ` , `\`${pointstype}\``)
        embed.addField(` **translate = || ترجم** ` , `\`${pointstrgm}\``)
        embed.addField(`**xo = || اكس او**`,`\`${pointsxo}\``)
        embed.setThumbnail(c.user.avatarURL())
      message.channel.send(embed);
            
        }
      }
    })


    Nova.login()
    const keepAlive = require('./server');
keepAlive();


