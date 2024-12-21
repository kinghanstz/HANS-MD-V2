const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "help", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
*𝙃𝘼𝙉𝙎 𝙈𝘿 ✌️ 𝘼𝙑𝘼𝙄𝙇𝘼𝘽𝙇𝙀 𝙈𝙀𝙉𝙐𝙎* 

    ▸ *𝙘𝙤𝙢𝙢𝙣𝙙𝙚𝙧* : ${cm.length} 
    ▸ *𝙧𝙤𝙢* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
    ▸ *𝙪𝙥𝙩𝙞𝙢𝙚* : ${os.platform()}
    ▸ *𝙩𝙝𝙚𝙢* : *𝙃𝘼𝙉𝙎*

> 𝙃𝘼𝙉𝙎 𝙈𝘿 𝙉𝙀𝙒 𝙐𝙋𝘿𝘼𝙏𝙀
> 𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝙃𝘼𝙉𝙎𝙏𝙕 💎\n${readmore}`;
    
let menuMsg = `
> Hello ${nomAuteurMessage},,, Type menu to access a list of commands. 
  
╚═══════════════════📡`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Hansmd*, déveloper hans md bot" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *HANS MD ✌️*, déveloper HANS MD BOT" }, { quoted: ms });
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
