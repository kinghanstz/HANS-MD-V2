const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "sc", categorie: "My Contact" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
✰━━━════──⊷──═══━━✰
 *INFORMATION ABOUT HANSTZ* 
✰━━━➳════⊷════━━━━✰

*GITHUB LINK*
> https://github.com/HANSTZTECH

*FOR DEVELOPER T.ME*
> https://wa.me/255692540143
> https://wa.me/255756530143
> https://wa.me/255760774888

*WHATSAPP CHANNEL*
> https://whatsapp.com/channel/0029Vav3hzmCsU9JziuwwJ02 

*FOR MORE INFO TAP ON THE LINK BELOW*
> https://github.com/Mrhanstz/HANS-MD
╭──━━━━═════════━━━━❖
┃ ✰━━━════════━━━━✰
┃▓▒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃▓▒  *DEV* : *HANS BOT*
┃ ✰━━━════════━━━━✰
⁠⁠⁠⁠╰──━━━━═════════━━━━❖ 
  `;
    
let menuMsg = `
     ╭──━━━━══⊷══━━━━❖
     ┃ ✰━━━━━━━━━━━━✰
     ┃. ║  ✨HANS MD ✌️
     ┃ ✰━━━━━━━━━━━━✰
     ╰──━━━━══⊷══━━━━❖
✰━━━━═════⊷═════━━━━✰
   THIS IS HANS-MD WHA BOT 
✰━━━════────════━━━✰`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *hans Md*, Developed By hanstz" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "I am *HANS MD*, Developed By Hans Md" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
