const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu2", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
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

    moment.tz.setDefault('EAT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg =  `
╭──────────────────☠︎︎
┊☠︎╭───*𝐇𝐀𝐍𝐒-𝐌𝐃*────☠︎︎
┊⚠︎┊ *𝐔𝐬𝐞𝐫* : ${s.OWNER_NAME}
┊⚠︎┊ *𝐌𝐨𝐝𝐞* : ${mode}
┊⚠︎╰───────────────☠︎︎
┊⚠︎┊ *𝐓𝐢𝐦𝐞* : ${temps}  
┊⚠︎┊ *𝐑𝐀𝐌* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┊☠︎︎╰───────────────☠︎︎
╰──────────────────☠︎︎ \n\n`;

    let menuMsg = `*𝐇𝐀𝐍𝐒 𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*\n`;

    let buttonArray = []; // This will store the buttons

    for (const cat in coms) {
        menuMsg += `*╭────☠︎︎* *${cat}* *☠︎︎*`;
        for (const cmd of coms[cat]) {
            menuMsg += `\n*┊☠➪︎︎* ${cmd}`;
            
            // Create a button for each command
            buttonArray.push({
                buttonText: { displayText: cmd },
                type: 1,
                clickAction: { type: "message", text: `${prefixe}${cmd}` } // This sends the command when the button is clicked
            });
        }
        menuMsg += `\n*╰═════════════☠︎︎* \n`
    }

    menuMsg += `
   ◇           ◇
*—————👊👊👊👊—————*

  *𝐇𝐀𝐍𝐒 𝐓𝐄𝐂𝐇*                                         
*╰═════════════☠︎︎*
`;

    var lien = mybotpic();

    // Sending the message with buttons
    try {
        if (lien.match(/\.(mp4|gif)$/i)) {
            zk.sendMessage(dest, {
                video: { url: lien },
                caption: infoMsg + menuMsg,
                footer: "Je suis *Zokou-MD*, développé par Djalega++",
                gifPlayback: true,
                buttons: buttonArray
            }, { quoted: ms });
        }
        else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
            zk.sendMessage(dest, {
                image: { url: lien },
                caption: infoMsg + menuMsg,
                footer: "*popkid*",
                buttons: buttonArray
            }, { quoted: ms });
        } 
        else {
            repondre(infoMsg + menuMsg, { buttons: buttonArray });
        }
    } catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
});