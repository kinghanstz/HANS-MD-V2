const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;

    let { cm } = require(__dirname + "/../framework//zokou");

    var coms = {};

    var mode = "private";

    

    if ((s.MODE).toLocaleLowerCase() != "yes") {

        mode = "private";

    }





    



    cm.map(async (com, index) => {

        if (!coms[com.categorie])

            coms[com.categorie] = [];

        coms[com.categorie].push(com.nomCom);

    });



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `

╔═━ 𝙃𝘼𝙉𝙎 𝙈𝘿 𝘽𝙊𝙏 ━━┓
║ ☢︎︎➪ *ᴍʏ ᴏᴡɴᴇʀ* : ${s.OWNER_NAME}
║ ☢︎︎➪ *ᴄᴏᴍᴍᴀɴᴅᴇʀ* : ${nomAuteurMessage} 
║ ☢︎︎➪ *ᴅᴀᴛᴇ*: ${date}
║ ☢︎︎➪ *ᴘʀᴇғɪx* : ${s.PREFIXE}
║ ☢︎︎➪ *ᴡᴏʀᴋᴛʏᴘᴇ* : ${mode} ᴍᴏᴅᴇ
║ ☢︎︎➪ *ᴘʟᴜɢɪɴ* : ${cm.length} 
║ ☢︎︎➪ *ʀᴏᴍ* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
║ ☢︎︎➪ *ʀᴜɴɴɪɴɢ ᴏɴ* : ${os.platform()}
║ ☢︎︎➪ *ᴛʜᴇᴍ* : *ʜᴀɴs*
╚═━━━━━━━━━━━━━┛\n\n`;


    

let menuMsg = `
╔═━━═══━━━─━─➳
║✯☠︎︎ ︎ᴍᴀᴅᴇ-ʙʏ-ʜᴀɴsᴛᴢ ✨
║✯☠︎︎ ︎ɴᴇᴡ-ʜᴀɴs-ᴍᴅ ✌️😎 
╚═━━━══━━━─━─➳\n

╔═━━═══━━━━─━─➳
║𝙃𝙞 ${nomAuteurMessage} 👊
╚═━━═━━━━━━─━─➳

╔═━════━━━━════─━─➳
║✨𝙃𝘼𝙉𝙎 𝙈𝘿 𝙉𝙀𝙒 𝙐𝙋𝘿𝘼𝙏𝙀 2025✌️
╚═━════━━━━════─━─➳
  MADE BY HANSTZ IN 2025 WA BOT
`;



    for (const cat in coms) {

        menuMsg += `╔═══✰${cat}✰`;

        for (const cmd of coms[cat]) {

            menuMsg += `
║➪︎︎ ${cmd}`;

        }

        menuMsg += `
┗━━━━════━━━━┛\n`

    }



    menuMsg += `

︎╔═━━─━═══───➳
️║✌️ʜᴀɴs ᴍᴅ 2025    ✨
║✌️ᴍᴀᴅᴇ ɪɴ ᴛᴀɴᴢᴀɴɪᴀ✨
╚══━─━══────➳\n

╔═━━─━━════──➳
║😎*ᴍᴀᴅᴇ ʙʏ ʜᴀɴsᴛᴢ*✨
╚══━─━━════──➳\n
✌️ʜᴀɴs-ᴍᴅ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ʜᴀɴsᴛᴢ ғʀᴏᴍ ᴛᴀɴᴢᴀɴɪᴀ🇹🇿

`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *HANS-MD*, déveloper Hans" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *HANS_Md*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
          
