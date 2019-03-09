const Discord = require('discord.js');
const devs = ['452551643343487007','452551643343487007'];
var prefix = "!";
const adminprefix = "!"
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 

,ti={}  
,spee={};

 


client.on('message', message => {

 

    if (message.content === "قفل الشات") {

                        if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: false

 

           }).then(() => {

               message.reply("تم تقفيل الشات :white_check_mark: ")

           });

             }

 

if (message.content === "فتح الشات") {

    if(!message.channel.guild) return message.reply(' This command only for servers');

 

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');

           message.channel.overwritePermissions(message.guild.id, {

         SEND_MESSAGES: true

 

           }).then(() => {

               message.reply("تم فتح الشات:white_check_mark:")

           });

             }

 

 

 

});








 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح للأستخدام 5 مرات 
---------------------
-هذا الرابط صالح لمده 24 ساعه 
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
}); 







 client.on("message", message => {
    var prefix = "رسالة";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + '') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    }); 







 client.login(process.env.BOT_TOKEN);
