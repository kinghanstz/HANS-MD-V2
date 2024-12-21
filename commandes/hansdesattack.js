const { 
  zokou 
} = require("../framework/zokou"); 

zokou({ 
  'nomCom': "cancelhack", 
  'categorie': "Fun", 
  'reaction': '🛑' 
}, async (_0x31874c, _0x23f5d8, _0x2bf6f3) => { 
  const { 
    repondre: _0x988825, 
    arg: _0x123444, 
    prefixe: _0x1e90cb 
  } = _0x2bf6f3; 

  try { 
    const _0x4e34b7 = [ 
      "```😊 Don't worry, your device is completely safe!```", 
      "```🔄 Canceling all unauthorized actions...```", 
      "```🔸 Reversing file transfers...\n 10% completed```", 
      "```🚩 Reversing file transfers...\n 40% completed```", 
      "```🔸 Reversing file transfers...\n 70% completed```", 
      "```🔸 File transfers fully reversed.```", 
      "```🛡️ Removing malware traces...\n 50% completed```", 
      "```🛡️ Malware successfully removed!```", 
      "```📂 Restoring your data to its original state...```", 
      "```💾 Data restoration completed.```", 
      "```🔌 Disconnecting Hack server connection...```", 
      "```🛡️ All Hack actions canceled successfully!```" 
    ]; 

    for (const _0x40e3c8 of _0x4e34b7) { 
      try { 
        await _0x988825(_0x40e3c8); 
        await new Promise(_0x4e8b85 => setTimeout(_0x4e8b85, 2000)); 
      } catch (_0x3a5cb8) { 
        console.error("Error sending cancel message:", _0x3a5cb8); 
      } 
    } 

    const _0x1337d = "```🛡️ All hacks canceled. Your device is safe and secure!```"; 

    try { 
      await _0x988825(_0x1337d); 
    } catch (_0x54e5cd) { 
      console.error("Error sending confirmation message:", _0x54e5cd); 
      return await _0x988825("_🙏 An error occurred while sending the cancel confirmation message 🤗_"); 
    } 

    const _0x1ef2d4 = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']; 

    for (const _0x1a43cf of _0x1ef2d4) { 
      try { 
        await _0x988825("```✨ Your device is safe, and no data was compromised. Relax! 😊```"); 
        await new Promise(_0x5a3913 => setTimeout(_0x5a3913, 1000)); 
      } catch (_0x296183) { 
        console.error("Error during countdown:", _0x296183); 
      } 
    } 

    try { 
      await _0x988825("```🤝 All Hack activities have been canceled. CLEANED BY HANS MD! 😊```"); 
    } catch (_0x1d8f59) { 
      console.error("Error sending final message:", _0x1d8f59); 
    } 
  } catch (_0x39605d) { 
    console.error("Critical error in cancel hacking script:", _0x39605d); 
    return await _0x988825("_😊 A critical error occurred during the hacking 🤗_"); 
  } 
});
