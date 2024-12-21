const a68_0x1b7bf9 = function () {
  let _0x2738cf = true;
  return function (_0x3a0679, _0x316a59) {
    const _0x300f8a = _0x2738cf ? function () {
      if (_0x316a59) {
        const _0x2b6e08 = _0x316a59.apply(_0x3a0679, arguments);
        _0x316a59 = null;
        return _0x2b6e08;
      }
    } : function () {};
    _0x2738cf = false;
    return _0x300f8a;
  };
}();
const a68_0x458de2 = a68_0x1b7bf9(this, function () {
  return a68_0x458de2.toString().search("(((.+)+)+)+$").toString().constructor(a68_0x458de2).search("(((.+)+)+)+$");
});
a68_0x458de2();
const {
  makeWASocket: a68_0x14b30f,
  fetchLatestBaileysVersion: a68_0x199d21,
  useMultiFileAuthState: a68_0x10b407,
  makeCacheableSignalKeyStore: a68_0xbba07e,
  DisconnectReason: a68_0x341303,
  makeInMemoryStore: a68_0x20dabd,
  getContentType: a68_0x2dd2e6,
  jidDecode: a68_0x39f001,
  delay: a68_0x41b3d0,
  downloadMediaMessage: a68_0x29faec,
  downloadContentFromMessage: a68_0x43cbfc
} = require("@whiskeysockets/baileys");
const {
  Boom: a68_0x1a3349
} = require("@hapi/boom");
const {
  default: a68_0x5eb410
} = require("pino");
const a68_0x32087d = require("./set");
const a68_0x54c07d = require("fs-extra");
let a68_0x131242 = require("./framework/zokou");
const {
  reagir: a68_0x2ab29f
} = require("./framework/app");
let a68_0x4d5bb6 = require("path");
const a68_0xd81186 = require("file-type");
const {
  Sticker: a68_0x2104b8,
  StickerTypes: a68_0x4a3ac1
} = require("wa-sticker-formatter");
const {
  checkIfInstalledPlugin: a68_0x3d1f0c
} = require("./framework/mesfonctions");
var a68_0x4bace3 = a68_0x32087d.session.replace(/Zokou-MD-WHATSAPP-BOT;;;=>/g, '');
const a68_0x42e335 = require("node-cache");
const a68_0x3ab510 = a68_0x32087d.PREFIXE;
const {
  verifierEtatJid: a68_0xbb29b6,
  recupererActionJid: a68_0x5507d3
} = require("./bdd/antilien");
const {
  atbverifierEtatJid: a68_0x397bbd,
  atbrecupererActionJid: a68_0x3c92de
} = require("./bdd/antibot");
const {
  isUserBanned: a68_0x265d27,
  addUserToBanList: a68_0xb52160,
  removeUserFromBanList: a68_0x265ccb
} = require("./bdd/banUser");
const {
  addGroupToBanList: a68_0x45c85b,
  isGroupBanned: a68_0x246ba0,
  removeGroupFromBanList: a68_0x15d4dc
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin: a68_0x50a0b0,
  addGroupToOnlyAdminList: a68_0x2a8806,
  removeGroupFromOnlyAdminList: a68_0x141d89
} = require("./bdd/onlyAdmin");
const {
  recupevents: a68_0x2e68ef
} = require("./bdd/welcome");
const {
  isGroupspam: a68_0xcf559c
} = require("./bdd/antispam");
const {
  dbCache: a68_0x5a7de7
} = require("./cache");
const a68_0xef69c0 = require("./bdd/plugin");
const {
  ajouterOuMettreAJourUserData: a68_0x5f0215
} = require("./bdd/level");
const a68_0x1e4900 = require("./bdd/mention");
async function a68_0x296f9f() {
  try {
    if (!a68_0x54c07d.existsSync(__dirname + "/auth/creds.json") && a68_0x4bace3 != "zokk") {
      console.log("connexion en cour ...");
      await a68_0x54c07d.writeFileSync(__dirname + "/auth/creds.json", atob(a68_0x4bace3), "utf8");
    } else if (a68_0x54c07d.existsSync(__dirname + "/auth/creds.json") && a68_0x4bace3 != "zokk") {
      await a68_0x54c07d.writeFileSync(__dirname + "/auth/creds.json", atob(a68_0x4bace3), "utf8");
    }
  } catch (_0x576418) {
    console.log("Session Invalide " + _0x576418);
    return;
  }
}
a68_0x296f9f();
const a68_0x5bbc55 = {
  level: "silent"
};
const a68_0x55e8e1 = a68_0x5eb410(a68_0x5bbc55);
const a68_0x1a3788 = {
  "stdTTL": 0x14,
  "checkperiod": 0x78
};
const a68_0xe83d41 = new a68_0x42e335(a68_0x1a3788);
const a68_0x49c5ff = {
  "stdTTL": 0x1770,
  "checkperiod": 0x1388
};
const a68_0x2268e9 = new a68_0x42e335(a68_0x49c5ff);
const a68_0x103d5b = {
  "stdTTL": 0x3c,
  "checkperiod": 0x3c
};
const a68_0x663195 = new a68_0x42e335(a68_0x103d5b);
const a68_0x5c659a = {
  logger: a68_0x55e8e1
};
const a68_0x1f5efa = a68_0x20dabd(a68_0x5c659a);
a68_0x1f5efa.readFromFile("store.json");
setInterval(() => {
  a68_0x1f5efa.writeToFile("store.json");
}, 0x2710);
async function a68_0x4f40bf() {
  const {
    saveCreds: _0x539109,
    state: _0x1a59ac
  } = await a68_0x10b407("./auth");
  const {
    version: _0x4a0f52,
    isLatest: _0xfd8616
  } = await a68_0x199d21();
  const _0x3265fc = a68_0x14b30f({
    'version': _0x4a0f52,
    'logger': a68_0x55e8e1,
    'browser': ["Zokou-md", "safari", "1.0.0"],
    'emitOwnEvents': true,
    'syncFullHistory': true,
    'printQRInTerminal': true,
    'markOnlineOnConnect': false,
    'msgRetryCounterCache': a68_0xe83d41,
    'receivedPendingNotifications': true,
    'generateHighQualityLinkPreview': true,
    'auth': {
      'creds': _0x1a59ac.creds,
      'keys': a68_0xbba07e(_0x1a59ac.keys, a68_0x55e8e1)
    },
    'keepAliveIntervalMs': 0x7530,
    'getMessage': async _0x13c12d => {
      if (a68_0x1f5efa) {
        const _0x11d76e = await a68_0x1f5efa.loadMessage(_0x13c12d.remoteJid, _0x13c12d.id);
        return _0x11d76e?.["message"] || undefined;
      }
    }
  });
  a68_0x1f5efa?.["bind"](_0x3265fc.ev);
  const _0x1d42ff = {
    "stdTTL": 0x78,
    "checkperiod": 0xf0
  };
  const _0x26359c = new a68_0x42e335(_0x1d42ff);
  _0x3265fc.ev.on("messages.upsert", async _0x5a26df => {
    const {
      messages: _0x52e5af
    } = _0x5a26df;
    const _0x2aca80 = _0x52e5af[0x0];
    if (!_0x2aca80.message) {
      return;
    }
    const _0x43e5e6 = _0x2e22eb => {
      if (!_0x2e22eb) {
        return _0x2e22eb;
      }
      if (/:\d+@/gi.test(_0x2e22eb)) {
        let _0x4f5394 = a68_0x39f001(_0x2e22eb) || {};
        return _0x4f5394.user && _0x4f5394.server && _0x4f5394.user + '@' + _0x4f5394.server || _0x2e22eb;
      } else {
        return _0x2e22eb;
      }
    };
    var _0x308c45 = a68_0x2dd2e6(_0x2aca80.message);
    var _0x37b54e = _0x308c45 == "conversation" ? _0x2aca80.message.conversation : _0x308c45 == "imageMessage" ? _0x2aca80.message.imageMessage?.["caption"] : _0x308c45 == "videoMessage" ? _0x2aca80.message.videoMessage?.["caption"] : _0x308c45 == "extendedTextMessage" ? _0x2aca80.message?.["extendedTextMessage"]?.["text"] : _0x308c45 == "buttonsResponseMessage" ? _0x2aca80.message.buttonsResponseMessage?.["selectedButtonId"] : _0x308c45 == "listResponseMessage" ? _0x2aca80.message?.["listResponseMessage"]["singleSelectReply"]["selectedRowId"] : _0x308c45 == "messageContextInfo" ? _0x2aca80.message?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x2aca80.message?.["listResponseMessage"]["singleSelectReply"]["selectedRowId"] || _0x2aca80.test : '';
    var _0x298039 = _0x2aca80.key.remoteJid;
    var _0x2ee1d1 = _0x43e5e6(_0x3265fc.user.id);
    var _0x5ac483 = _0x2ee1d1.split('@')[0x0];
    const _0x529211 = _0x298039?.["endsWith"]("@g.us");
    var _0x2b94ed = null;
    if (_0x529211) {
      if (a68_0x2268e9.has(_0x298039)) {
        _0x2b94ed = a68_0x2268e9.get(_0x298039);
      } else {
        metadata = await _0x3265fc.groupMetadata(_0x298039);
        _0x2b94ed = metadata;
        a68_0x2268e9.set(_0x298039, metadata);
      }
    }
    var _0x91c2cc = _0x529211 ? _0x2b94ed.subject : null;
    var _0x5359ad = _0x2aca80.message?.["extendedTextMessage"]?.["contextInfo"]?.["quotedMessage"];
    var _0x1b7df7 = _0x43e5e6(_0x2aca80.message?.["extendedTextMessage"]?.["contextInfo"]?.["participant"]);
    var _0x5cdf41 = _0x529211 ? _0x2aca80.key.participant ? _0x2aca80.key.participant : _0x2aca80.participant : _0x298039;
    if (_0x2aca80.key.fromMe) {
      _0x5cdf41 = _0x2ee1d1;
    }
    var _0x538411 = _0x529211 ? _0x2aca80.key.participant : null;
    const {
      getAllSudoNumbers: _0x28343d
    } = require("./bdd/sudo");
    const _0x2bc287 = _0x2aca80.pushName;
    let _0x3744bb;
    if (a68_0x5a7de7.has("sudo")) {
      console.log("fetching from cache");
      _0x3744bb = a68_0x5a7de7.get("sudo");
    } else {
      console.log("fetching from database");
      _0x3744bb = await _0x28343d();
      a68_0x5a7de7.set("sudo", _0x3744bb);
    }
    const _0x45e985 = [_0x5ac483, "22559763447", "22543343357", "22564297888", "‪99393228‬", "22891733300", a68_0x32087d.NUMERO_OWNER].map(_0x24980c => _0x24980c.replace(/[^0-9]/g) + "@s.whatsapp.net");
    const _0x29cb63 = [..._0x3744bb, ..._0x45e985];
    const _0x1a5e99 = _0x29cb63.includes(_0x5cdf41);
    var _0x60f6fc = ["22559763447", "22543343357", "22564297888", "‪99393228‬", "22891733300"].map(_0x8f02a1 => _0x8f02a1.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x5cdf41);
    function _0x236ab2(_0x5002d8) {
      const _0x15189a = {
        text: _0x5002d8
      };
      const _0x4fad94 = {
        "quoted": _0x2aca80
      };
      _0x3265fc.sendMessage(_0x298039, _0x15189a, _0x4fad94);
    }
    console.log("\t [][]...{Hans-Md}...[][]");
    console.log("=========== Nouveau message ===========");
    if (_0x529211) {
      console.log("message provenant du groupe : " + _0x91c2cc);
    }
    console.log("message envoyé par : [" + _0x2bc287 + " : " + _0x5cdf41.split("@s.whatsapp.net")[0x0] + " ]");
    console.log("type de message : " + _0x308c45);
    console.log("------ contenu du message ------");
    console.log(_0x37b54e);
    function _0x252250(_0x3b8ecd) {
      let _0x2adb14 = [];
      for (_0x5a26df of _0x3b8ecd) {
        if (_0x5a26df.admin == null) {
          continue;
        }
        _0x2adb14.push(_0x5a26df.id);
      }
      return _0x2adb14;
    }
    const _0x47257d = _0x529211 ? await _0x2b94ed.participants : '';
    let _0x16bf3a = _0x529211 ? _0x252250(_0x47257d) : '';
    const _0x6a770 = _0x529211 ? _0x16bf3a.includes(_0x5cdf41) : false;
    var _0x41aca5 = _0x529211 ? _0x16bf3a.includes(_0x2ee1d1) : false;
    var _0x587d32 = a68_0x32087d.ETAT;
    if (_0x587d32 == 0x1) {
      await _0x3265fc.sendPresenceUpdate("available", _0x298039);
    } else {
      if (_0x587d32 == 0x2) {
        await _0x3265fc.sendPresenceUpdate("composing", _0x298039);
      } else {
        if (_0x587d32 == 0x3) {
          await _0x3265fc.sendPresenceUpdate("recording", _0x298039);
        } else {}
      }
    }
    let _0x3b23f7 = _0x37b54e ? _0x37b54e.trim().split(/ +/).slice(0x1) : null;
    function _0x33b50a(_0x11cfe8) {
      return [..._0x11cfe8].map(_0x6cfc0b => _0x6cfc0b.codePointAt(0x0).toString(0x10)).join('-');
    }
    let _0x2df3e6 = _0x37b54e ? _0x37b54e.startsWith(a68_0x3ab510) || _0x33b50a(_0x37b54e).startsWith(_0x33b50a(a68_0x3ab510)) : false;
    let _0x115fd4 = _0x2df3e6 ? _0x37b54e.replace(a68_0x3ab510, '').trim().split(/ +/).shift().toLowerCase() : false;
    const _0x483648 = a68_0x32087d.URL.split(',');
    function _0x5d8468() {
      const _0x1729ab = Math.floor(Math.random() * _0x483648.length);
      const _0x6ba19e = _0x483648[_0x1729ab];
      return _0x6ba19e;
    }
    const _0x3d4da3 = {
      "superUser": _0x1a5e99,
      "dev": _0x60f6fc,
      "verifGroupe": _0x529211,
      "mbre": _0x47257d,
      "membreGroupe": _0x538411,
      "verifAdmin": _0x6a770,
      "infosGroupe": _0x2b94ed,
      "nomGroupe": _0x91c2cc,
      "auteurMessage": _0x5cdf41,
      "nomAuteurMessage": _0x2bc287,
      "idBot": _0x2ee1d1,
      "verifZokouAdmin": _0x41aca5,
      "prefixe": a68_0x3ab510,
      "arg": _0x3b23f7,
      "repondre": _0x236ab2,
      "mtype": _0x308c45,
      "groupeAdmin": _0x252250,
      "msgRepondu": _0x5359ad,
      "auteurMsgRepondu": _0x1b7df7,
      ms: _0x2aca80,
      "mybotpic": _0x5d8468
    };
    var _0x3c6d59 = _0x3d4da3;
    if (_0x37b54e?.["length"] >= 0xbb8 && !_0x1a5e99) {
      console.log("Virtex potentiel detecte");
      try {
        if (_0x529211) {} else {
          await _0x3265fc.updateBlockStatus(jid, "block")["catch"]();
          let _0x22000b = "AntiVirus--protection";
          for (let _0xb8a330 = 0x0; _0xb8a330 < 0x1f4; _0xb8a330++) {
            _0x22000b += "\n";
          }
          _0x22000b += "This Message is a Protection from a virus send by this user";
          const _0x44787d = {
            "text": _0x22000b
          };
          _0x3265fc.sendMessage(_0x298039, _0x44787d);
        }
      } catch (_0x33144f) {
        console.log(_0x33144f);
      }
    }
    if (_0x5cdf41.endsWith("s.whatsapp.net")) {
      try {
        await a68_0x5f0215(_0x5cdf41);
      } catch (_0x4bc071) {
        console.error(_0x4bc071);
      }
    }
    if (_0x2aca80.message?.["stickerMessage"]) {
      const _0x1931db = require("./bdd/stickcmd");
      let _0x294f2d = _0x2aca80.message.stickerMessage.mediaKey.join(',');
      let _0x42e88a = await _0x1931db.inStickCmd(_0x294f2d);
      if (_0x42e88a) {
        _0x37b54e = a68_0x3ab510 + (await _0x1931db.getCmdById(_0x294f2d));
        _0x3b23f7 = _0x37b54e ? _0x37b54e.trim().split(/ +/).slice(0x1) : null;
        _0x2df3e6 = _0x37b54e ? _0x37b54e.startsWith(a68_0x3ab510) : false;
        _0x115fd4 = _0x2df3e6 ? _0x37b54e.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
        _0x5359ad = _0x2aca80.message.stickerMessage?.["contextInfo"]?.["quotedMessage"];
        _0x1b7df7 = _0x43e5e6(_0x2aca80.message?.["stickerMessage"]?.["contextInfo"]?.["participant"]);
        const _0x16421c = {
          "superUser": _0x1a5e99,
          "dev": _0x60f6fc,
          "verifGroupe": _0x529211,
          "mbre": _0x47257d,
          "membreGroupe": _0x538411,
          "verifAdmin": _0x6a770,
          "infosGroupe": _0x2b94ed,
          "nomGroupe": _0x91c2cc,
          "auteurMessage": _0x5cdf41,
          "nomAuteurMessage": _0x2bc287,
          "idBot": _0x2ee1d1,
          "verifZokouAdmin": _0x41aca5,
          "prefixe": a68_0x3ab510,
          "arg": _0x3b23f7,
          "repondre": _0x236ab2,
          "mtype": _0x308c45,
          "groupeAdmin": _0x252250,
          "msgRepondu": _0x5359ad,
          "auteurMsgRepondu": _0x1b7df7,
          ms: _0x2aca80,
          "mybotpic": _0x5d8468
        };
        _0x3c6d59 = _0x16421c;
      }
    }
    if (_0x2df3e6) {
      const _0x4f4f46 = a68_0x131242.cm.find(_0x54420e => _0x54420e.nomCom === _0x115fd4 || _0x54420e.alias.includes(_0x115fd4));
      if (_0x4f4f46) {
        let _0x49ec7c;
        if (a68_0x5a7de7.has("bangroup")) {
          _0x49ec7c = a68_0x5a7de7.get("bangroup").includes(_0x298039);
        } else {
          let _0x425295 = await a68_0x246ba0();
          _0x49ec7c = _0x425295.includes(_0x298039);
          a68_0x5a7de7.set("bangroup", _0x425295);
        }
        let _0x43f4d3;
        if (a68_0x5a7de7.has("onlyadmin")) {
          _0x43f4d3 = a68_0x5a7de7.get("onlyadmin").includes(_0x298039);
        } else {
          let _0x1399f8 = await a68_0x50a0b0();
          _0x43f4d3 = _0x1399f8.includes(_0x298039);
          a68_0x5a7de7.set("onlyadmin", _0x1399f8);
        }
        let _0x324c4f;
        if (a68_0x5a7de7.has("banuser")) {
          _0x324c4f = a68_0x5a7de7.get("banuser").includes(_0x5cdf41);
        } else {
          let _0x213653 = await a68_0x265d27();
          _0x324c4f = _0x213653.includes(_0x5cdf41);
          a68_0x5a7de7.set("banuser", _0x213653);
        }
        if (a68_0x32087d.MODE.toLocaleLowerCase() != "yes" && !_0x1a5e99) {
          console.log("bot is not public");
        } else {
          if (!_0x60f6fc && _0x298039 == "120363158701337904@g.us") {
            console.log("refused");
          } else {
            if (!_0x1a5e99 && _0x298039 === _0x5cdf41 && a68_0x32087d.PM_PERMIT === "yes") {
              console.log("pm permit on");
            } else {
              if (_0x529211 && !_0x1a5e99 && _0x49ec7c) {
                console.log("Banned group");
              } else {
                if ((!_0x1a5e99 || !_0x6a770) && _0x529211 && _0x43f4d3) {
                  console.log("Permission denided");
                } else {
                  if (!_0x1a5e99 && _0x324c4f) {
                    _0x236ab2("You are banned from bot commands");
                  } else {
                    if (!_0x1a5e99 && a68_0x32087d.ANTI_CMD_SPAM.toLowerCase() == "yes" && a68_0x663195.has(_0x5cdf41)) {
                      _0x236ab2("You are on cooldown, please wait " + Math.round((a68_0x663195.getTtl(_0x5cdf41) - Date.now()) / 0x3e8) + " seconds before using the bot again");
                    } else {
                      if (!_0x1a5e99 && a68_0x32087d.ANTI_CMD_SPAM.toLowerCase() == "yes") {
                        a68_0x663195.set(_0x5cdf41, true);
                      }
                      try {
                        a68_0x2ab29f(_0x298039, _0x3265fc, _0x2aca80, _0x4f4f46.reaction);
                        _0x4f4f46.fonction(_0x298039, _0x3265fc, _0x3c6d59);
                      } catch (_0x53ff4f) {
                        console.log("😡😡 " + _0x53ff4f);
                        const _0x454546 = {
                          "quoted": _0x2aca80
                        };
                        _0x3265fc.sendMessage(_0x298039, {
                          'text': "😡😡 " + _0x53ff4f
                        }, _0x454546);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ;
    if (_0x2aca80.key && _0x2aca80.key.remoteJid === "status@broadcast" && a68_0x32087d.AUTO_READ_STATUS.toLocaleLowerCase() === "yes") {
      await _0x3265fc.readMessages([_0x2aca80.key])["catch"](_0x31b24c => console.log(_0x31b24c));
    }
    if (_0x2aca80.key && _0x2aca80.key.remoteJid === "status@broadcast" && a68_0x32087d.AUTO_DOWNLOAD_STATUS.toLocaleLowerCase() === "yes") {
      try {
        if (_0x2aca80.message.extendedTextMessage) {
          var _0xe63fbb = _0x2aca80.message.extendedTextMessage.text;
          const _0x4eba96 = {
            text: _0xe63fbb
          };
          const _0x340138 = {
            "quoted": _0x2aca80
          };
          await _0x3265fc.sendMessage(_0x2ee1d1, _0x4eba96, _0x340138);
        } else {
          if (_0x2aca80.message.imageMessage) {
            var _0x113dff = _0x2aca80.message.imageMessage.caption;
            var _0x1ce25b = await _0x3265fc.downloadAndSaveMediaMessage(_0x2aca80.message.imageMessage);
            const _0x1fb8cb = {
              url: _0x1ce25b
            };
            const _0x12f30c = {
              "image": _0x1fb8cb,
              "caption": _0x113dff
            };
            const _0x59f8ba = {
              "quoted": _0x2aca80
            };
            await _0x3265fc.sendMessage(_0x2ee1d1, _0x12f30c, _0x59f8ba);
          } else {
            if (_0x2aca80.message.videoMessage) {
              var _0x113dff = _0x2aca80.message.videoMessage.caption;
              var _0x419d5a = await _0x3265fc.downloadAndSaveMediaMessage(_0x2aca80.message.videoMessage);
              const _0x54be04 = {
                url: _0x419d5a
              };
              const _0x14e236 = {
                "video": _0x54be04,
                "caption": _0x113dff
              };
              const _0x23e6db = {
                "quoted": _0x2aca80
              };
              await _0x3265fc.sendMessage(_0x2ee1d1, _0x14e236, _0x23e6db);
            } else {
              if (_0x2aca80.message.audioMessage) {
                var _0x22e6e = await _0x3265fc.downloadAndSaveMediaMessage(_0x2aca80.message.audioMessage);
                const _0x308b6b = {
                  url: _0x22e6e
                };
                const _0x47b9b7 = {
                  "audio": _0x308b6b,
                  "mimetype": "audio/mp4"
                };
                const _0x3309f6 = {
                  "quoted": _0x2aca80
                };
                await _0x3265fc.sendMessage(_0x2ee1d1, _0x47b9b7, _0x3309f6);
              }
            }
          }
        }
      } catch (_0x1f40e3) {
        console.error(_0x1f40e3);
      }
    }
    if ((_0x37b54e.toLowerCase().includes("https://") || _0x37b54e.toLowerCase().includes("http://")) && _0x529211) {
      console.log("lien detecté");
      const _0x238359 = await a68_0xbb29b6(_0x298039);
      if (_0x238359) {
        if (!_0x41aca5) {
          _0x236ab2("link detected, I need administrator rights to delete");
        } else {
          if (_0x1a5e99 || _0x6a770) {
            console.log("autority send link");
          } else {
            const _0x3fb8fc = {
              "remoteJid": _0x298039,
              "fromMe": false,
              id: _0x2aca80.key.id,
              "participant": _0x5cdf41
            };
            var _0x1b44de = "link detected, \n";
            var _0xafd9b5 = await a68_0x5507d3(_0x298039);
            if (_0xafd9b5 === "remove") {
              const _0x3ddfc7 = {
                "pack": "HANS-MD",
                "author": a68_0x32087d.NOM_OWNER,
                "type": a68_0x4a3ac1.FULL,
                "categories": ['🤩', '🎉'],
                id: "12345",
                "quality": 0x32,
                "background": "#000000"
              };
              var _0x4e10ca = new a68_0x2104b8("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x3ddfc7);
              await _0x4e10ca.toFile("st1.webp");
              _0x1b44de += "message deleted \n @" + _0x5cdf41.split('@')[0x0] + " removed from group.";
              const _0x14913a = {
                "quoted": _0x2aca80
              };
              await _0x3265fc.sendMessage(_0x298039, {
                'sticker': a68_0x54c07d.readFileSync("st1.webp")
              }, _0x14913a);
              0x0;
              baileys_1.delay(0x320);
              const _0x5396dc = {
                "text": _0x1b44de,
                "mentions": [_0x5cdf41]
              };
              const _0x46d779 = {
                "quoted": _0x2aca80
              };
              await _0x3265fc.sendMessage(_0x298039, _0x5396dc, _0x46d779);
              try {
                await _0x3265fc.groupParticipantsUpdate(_0x298039, [_0x5cdf41], "remove");
              } catch (_0x359e7a) {
                console.log("antiien " + _0x359e7a);
              }
              const _0x3539f6 = {
                "delete": _0x3fb8fc
              };
              await _0x3265fc.sendMessage(_0x298039, _0x3539f6);
              await a68_0x54c07d.unlink("st1.webp");
            } else {
              if (_0xafd9b5 === "delete") {
                _0x1b44de += "message deleted \n @" + _0x5cdf41.split('@')[0x0] + " Please avoid sending links.";
                const _0x46f5b4 = {
                  "text": _0x1b44de,
                  "mentions": [_0x5cdf41]
                };
                const _0x179918 = {
                  "quoted": _0x2aca80
                };
                await _0x3265fc.sendMessage(_0x298039, _0x46f5b4, _0x179918);
                const _0x5c1392 = {
                  "delete": _0x3fb8fc
                };
                await _0x3265fc.sendMessage(_0x298039, _0x5c1392);
              } else {
                if (_0xafd9b5 === "warn") {
                  const {
                    getWarnCountByJID: _0x27f22a,
                    ajouterUtilisateurAvecWarnCount: _0x2b72bb
                  } = require("./bdd/warn");
                  let _0x373a4c = await _0x27f22a(_0x5cdf41);
                  let _0xfd40d3 = a68_0x32087d.WARN_COUNT;
                  if (_0x373a4c >= _0xfd40d3) {
                    const _0xfee61b = {
                      "pack": "HANS-MD",
                      "author": a68_0x32087d.NOM_OWNER,
                      "type": a68_0x4a3ac1.FULL,
                      "categories": ['🤩', '🎉'],
                      id: "12345",
                      "quality": 0x32,
                      "background": "#000000"
                    };
                    var _0x4e10ca = new a68_0x2104b8("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0xfee61b);
                    await _0x4e10ca.toFile("st1.webp");
                    var _0x32970c = "Link detected; you have reached the maximum number of warnings therefore you will be removed from the group";
                    const _0x39a9ee = {
                      "quoted": _0x2aca80
                    };
                    await _0x3265fc.sendMessage(_0x298039, {
                      'sticker': a68_0x54c07d.readFileSync("st1.webp")
                    }, _0x39a9ee);
                    const _0x467bf4 = {
                      "text": _0x32970c,
                      "mentions": [_0x5cdf41]
                    };
                    const _0x25ec1b = {
                      "quoted": _0x2aca80
                    };
                    await _0x3265fc.sendMessage(_0x298039, _0x467bf4, _0x25ec1b);
                    await _0x3265fc.groupParticipantsUpdate(_0x298039, [_0x5cdf41], "remove");
                    const _0x13e8c3 = {
                      "delete": _0x3fb8fc
                    };
                    await _0x3265fc.sendMessage(_0x298039, _0x13e8c3);
                    await a68_0x54c07d.unlink("st1.webp");
                  } else {
                    var _0x24f13c = _0xfd40d3 - (_0x373a4c + 0x1);
                    var _0x4e9871 = _0x24f13c != 0x0 ? "Link detected;\npass " + _0x24f13c + " warning(s) again and you will be kicked out of the group" : "Lien detecté ;\nLink detected ;\n Next time will be the right one";
                    await _0x2b72bb(_0x5cdf41);
                    const _0x31b4dc = {
                      "text": _0x4e9871,
                      "mentions": [_0x5cdf41]
                    };
                    const _0x5ab8b4 = {
                      "quoted": _0x2aca80
                    };
                    await _0x3265fc.sendMessage(_0x298039, _0x31b4dc, _0x5ab8b4);
                    const _0x4f3d34 = {
                      "delete": _0x3fb8fc
                    };
                    await _0x3265fc.sendMessage(_0x298039, _0x4f3d34);
                  }
                }
              }
            }
          }
        }
      }
      ;
    }
    const _0x56e5da = _0x2aca80.key?.['id']?.["startsWith"]("BAES") && _0x2aca80.key?.['id']?.["length"] === 0x10;
    const _0x432a69 = _0x2aca80.key?.['id']?.["startsWith"]("BAE5") && _0x2aca80.key?.['id']?.["length"] === 0x10;
    const _0x1927e7 = _0x2aca80.key?.['id']?.["startsWith"]("3EB0") && _0x2aca80.key?.['id']?.["length"] >= 0xc;
    if (_0x56e5da || _0x432a69 || _0x1927e7) {
      const _0x1c0650 = await a68_0x397bbd(_0x298039);
      if (_0x1c0650) {
        if (_0x308c45 === "reactionMessage") {
          console.log("Je ne reagis pas au reactions");
        } else {
          if (_0x6a770 || _0x5cdf41 === _0x2ee1d1 || _0x1a5e99) {
            console.log("je fais rien");
          } else {
            if (!_0x41aca5) {
              _0x236ab2("J'ai besoin des droits d'administrations pour agire");
            } else {
              const _0x43489b = {
                "remoteJid": _0x298039,
                "fromMe": false,
                id: _0x2aca80.key.id,
                "participant": _0x5cdf41
              };
              var _0x1b44de = "bot détecté, \n";
              var _0xafd9b5 = await a68_0x3c92de(_0x298039);
              if (_0xafd9b5 === "remove") {
                try {
                  const _0x439a95 = {
                    "pack": "HANS-MD",
                    "author": a68_0x32087d.NOM_OWNER,
                    "type": a68_0x4a3ac1.FULL,
                    "categories": ['🤩', '🎉'],
                    id: "12345",
                    "quality": 0x32,
                    "background": "#000000"
                  };
                  var _0x4e10ca = new a68_0x2104b8("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x439a95);
                  await _0x4e10ca.toFile("st1.webp");
                  _0x1b44de += "deleted message \n @" + _0x5cdf41.split('@')[0x0] + " removed from the group.";
                  const _0x3482bc = {
                    "quoted": _0x2aca80
                  };
                  await _0x3265fc.sendMessage(_0x298039, {
                    'sticker': a68_0x54c07d.readFileSync("st1.webp")
                  }, _0x3482bc);
                  0x0;
                  baileys_1.delay(0x320);
                  const _0xccc0b1 = {
                    "text": _0x1b44de,
                    "mentions": [_0x5cdf41]
                  };
                  const _0x4f3c31 = {
                    "quoted": _0x2aca80
                  };
                  await _0x3265fc.sendMessage(_0x298039, _0xccc0b1, _0x4f3c31);
                  await _0x3265fc.groupParticipantsUpdate(_0x298039, [_0x5cdf41], "remove");
                  const _0x1d5e82 = {
                    "delete": _0x43489b
                  };
                  await _0x3265fc.sendMessage(_0x298039, _0x1d5e82);
                  await a68_0x54c07d.unlink("st1.webp");
                } catch (_0xd70cb3) {
                  console.log("antibot " + _0xd70cb3);
                }
              } else {
                if (_0xafd9b5 === "delete") {
                  _0x1b44de += "deleted message \n @" + _0x5cdf41.split('@')[0x0] + " please avoid using bots.";
                  const _0xf5b25a = {
                    "text": _0x1b44de,
                    "mentions": [_0x5cdf41]
                  };
                  const _0x331f19 = {
                    "quoted": _0x2aca80
                  };
                  await _0x3265fc.sendMessage(_0x298039, _0xf5b25a, _0x331f19);
                  const _0x5ad17f = {
                    "delete": _0x43489b
                  };
                  await _0x3265fc.sendMessage(_0x298039, _0x5ad17f);
                } else {
                  if (_0xafd9b5 === "warn") {
                    const {
                      getWarnCountByJID: _0x484a2d,
                      ajouterUtilisateurAvecWarnCount: _0x5300b6
                    } = require("./bdd/warn");
                    let _0x5f0e91 = await _0x484a2d(_0x5cdf41);
                    let _0x487054 = a68_0x32087d.WARN_COUNT;
                    if (_0x5f0e91 >= _0x487054) {
                      const _0x19e510 = {
                        "pack": "HANS-MD",
                        "author": a68_0x32087d.NOM_OWNER,
                        "type": a68_0x4a3ac1.FULL,
                        "categories": ['🤩', '🎉'],
                        id: "12345",
                        "quality": 0x32,
                        "background": "#000000"
                      };
                      var _0x4e10ca = new a68_0x2104b8("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", _0x19e510);
                      await _0x4e10ca.toFile("st1.webp");
                      var _0x32970c = "bot detected; you have reached the maximum number of warnings therefore you will be removed from the group";
                      const _0x357952 = {
                        "quoted": _0x2aca80
                      };
                      await _0x3265fc.sendMessage(_0x298039, {
                        'sticker': a68_0x54c07d.readFileSync("st1.webp")
                      }, _0x357952);
                      const _0x2daee6 = {
                        "text": _0x32970c,
                        "mentions": [_0x5cdf41]
                      };
                      const _0x5d3147 = {
                        "quoted": _0x2aca80
                      };
                      await _0x3265fc.sendMessage(_0x298039, _0x2daee6, _0x5d3147);
                      await _0x3265fc.groupParticipantsUpdate(_0x298039, [_0x5cdf41], "remove");
                      const _0x15fca3 = {
                        "delete": _0x43489b
                      };
                      await _0x3265fc.sendMessage(_0x298039, _0x15fca3);
                      await a68_0x54c07d.unlink("st1.webp");
                    } else {
                      var _0x24f13c = _0x487054 - (_0x5f0e91 + 0x1);
                      var _0x4e9871 = _0x24f13c != 0x0 ? "bot detected;\n pass another " + _0x24f13c + " warning(s) and you will be kicked out of the group" : "bot detected;\n The next one will be the right one";
                      await _0x5300b6(_0x5cdf41);
                      const _0x1bac4c = {
                        "text": _0x4e9871,
                        "mentions": [_0x5cdf41]
                      };
                      const _0x298f83 = {
                        "quoted": _0x2aca80
                      };
                      await _0x3265fc.sendMessage(_0x298039, _0x1bac4c, _0x298f83);
                      const _0x548945 = {
                        "delete": _0x43489b
                      };
                      await _0x3265fc.sendMessage(_0x298039, _0x548945);
                    }
                  }
                }
              }
            }
          }
        }
      }
      ;
    }
    const _0x53785c = require("./bdd/afk");
    let _0x1ee92f = await _0x53785c.getAfkById(0x1);
    if (_0x1ee92f?.["etat"] == 'on' && _0x2aca80.key?.["fromMe"]) {
      const _0x2b0d31 = _0x2aca80.key?.['id']?.["startsWith"]("BAES") && _0x2aca80.key?.['id']?.["length"] === 0x10;
      const _0x21ff50 = _0x2aca80.key?.['id']?.["startsWith"]("BAE5") && _0x2aca80.key?.['id']?.["length"] === 0x10;
      const _0x568b67 = _0x2aca80.key?.['id']?.["startsWith"]("3EB0") && _0x2aca80.key?.['id']?.["length"] >= 0xc;
      if (!_0x2b0d31 && !_0x21ff50 && !_0x568b67) {
        console.log("desactivation de l'afk");
        if (_0x37b54e.toLocaleLowerCase() == "noafk") {
          await _0x53785c.changeAfkState(0x1, "off");
          _0x236ab2("Afk deactivate!");
        } else {
          _0x236ab2("Send *noafk* if you want to disable afk");
        }
      }
    }
    if (_0x2aca80.message[_0x308c45]?.["contextInfo"]?.["mentionedJid"]?.["includes"](_0x2ee1d1) && _0x529211) {
      console.log("Je suis mentionner");
      if (_0x1ee92f?.["etat"] == 'on') {
        const _0x1686d9 = _0x2aca80.key?.['id']?.["startsWith"]("BAES") && _0x2aca80.key?.['id']?.["length"] === 0x10;
        const _0x11b8bd = _0x2aca80.key?.['id']?.["startsWith"]("BAE5") && _0x2aca80.key?.['id']?.["length"] === 0x10;
        const _0x1fa837 = _0x2aca80.key?.['id']?.["startsWith"]("3EB0") && _0x2aca80.key?.['id']?.["length"] >= 0xc;
        if (_0x1686d9 || _0x11b8bd || _0x1fa837) {
          console.log("Message de bot");
        } else {
          if (_0x2aca80.key?.["fromMe"]) {
            console.log("Message venant de moi");
          } else {
            if (_0x1ee92f.lien == "no url") {
              _0x236ab2(_0x1ee92f.message);
            } else {
              const _0x8c17c6 = {
                url: _0x1ee92f.lien
              };
              const _0x260118 = {
                "image": _0x8c17c6,
                "caption": _0x1ee92f.message
              };
              const _0x57abe2 = {
                "caption": _0x2aca80
              };
              _0x3265fc.sendMessage(_0x298039, _0x260118, _0x57abe2);
            }
          }
        }
      } else {
        if (_0x298039 !== "120363158701337904@g.us" && _0x5cdf41 !== _0x2ee1d1) {
          let _0x59ecd8 = await a68_0x1e4900.recupererToutesLesValeurs();
          let _0x3a10d3 = _0x59ecd8[0x0];
          if (_0x3a10d3.status === "non") {
            console.log("mention pas actifs");
          } else {
            let _0x4e40ef;
            if (_0x3a10d3.type.toLocaleLowerCase() === "image") {
              const _0x45075d = {
                url: _0x3a10d3.url
              };
              const _0x425199 = {
                "image": _0x45075d,
                "caption": _0x3a10d3.message
              };
              _0x4e40ef = _0x425199;
            } else {
              if (_0x3a10d3.type.toLocaleLowerCase() === "video") {
                const _0x4e107b = {
                  url: _0x3a10d3.url
                };
                const _0x4395ba = {
                  "video": _0x4e107b,
                  "caption": _0x3a10d3.message
                };
                _0x4e40ef = _0x4395ba;
              } else {
                if (_0x3a10d3.type.toLocaleLowerCase() === "sticker") {
                  const _0x596b32 = {
                    "pack": a68_0x32087d.NOM_OWNER,
                    "type": a68_0x4a3ac1.FULL,
                    "categories": ['🤩', '🎉'],
                    id: "12345",
                    "quality": 0x46,
                    "background": "transparent"
                  };
                  let _0xb30571 = new a68_0x2104b8(_0x3a10d3.url, _0x596b32);
                  const _0x57a322 = await _0xb30571.toBuffer();
                  const _0x572e44 = {
                    "sticker": _0x57a322
                  };
                  _0x4e40ef = _0x572e44;
                } else {
                  if (_0x3a10d3.type.toLocaleLowerCase() === "audio") {
                    const _0x35aba9 = {
                      url: _0x3a10d3.url
                    };
                    const _0x23985f = {
                      "audio": _0x35aba9,
                      "mimetype": "audio/mp4"
                    };
                    _0x4e40ef = _0x23985f;
                  }
                }
              }
            }
            if (_0x4e40ef) {
              const _0x12b96a = {
                "quoted": _0x2aca80
              };
              _0x3265fc.sendMessage(_0x298039, _0x4e40ef, _0x12b96a)["catch"](_0x359d8a => console.error(_0x359d8a));
            }
          }
        }
        ;
      }
    }
    if (_0x298039.endsWith("@s.whatsapp.net") && _0x5cdf41 != _0x2ee1d1) {
      if (_0x1ee92f?.["etat"] == 'on') {
        if (_0x1ee92f.lien == "no url") {
          _0x236ab2(_0x1ee92f.message);
        } else {
          const _0x303c0c = {
            url: _0x1ee92f.lien
          };
          const _0x1ef417 = {
            "image": _0x303c0c,
            "caption": _0x1ee92f.message
          };
          const _0x57ca22 = {
            "caption": _0x2aca80
          };
          _0x3265fc.sendMessage(_0x298039, _0x1ef417, _0x57ca22);
        }
      } else {
        if (a68_0x32087d.CHATBOT === "oui") {
          if (_0x2df3e6) {
            const _0x495b4e = require("./framework/traduction");
            const _0x42ec31 = {
              'to': 'en'
            };
            let _0x5fe6b2 = await _0x495b4e(_0x37b54e, _0x42ec31);
            fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x5fe6b2).then(_0x16ac88 => _0x16ac88.json()).then(_0x56a34b => {
              const _0x1182de = _0x56a34b.cnt;
              _0x236ab2(_0x1182de);
            })["catch"](_0x5d338c => {
              console.error("Erreur lors de la requête à BrainShop :", _0x5d338c);
            });
          }
        }
      }
    }
    if (_0x2aca80.message?.["viewOnceMessage"] || _0x2aca80.message?.["viewOnceMessageV2"] || _0x2aca80.message?.["viewOnceMessageV2Extension"]) {
      if (a68_0x32087d.ANTI_VV.toLowerCase() == "yes" && !_0x2aca80.key.fromMe) {
        let _0x298ff4 = _0x2aca80.message[_0x308c45];
        if (_0x298ff4.message.imageMessage) {
          var _0x55dcd1 = await _0x3265fc.downloadAndSaveMediaMessage(_0x298ff4.message.imageMessage);
          var _0x37b54e = _0x298ff4.message.imageMessage.caption;
          const _0x49355c = {
            url: _0x55dcd1
          };
          const _0x22971b = {
            "image": _0x49355c,
            "caption": _0x37b54e
          };
          const _0x4193e3 = {
            "quoted": _0x2aca80
          };
          await _0x3265fc.sendMessage(_0x2ee1d1, _0x22971b, _0x4193e3);
        } else {
          if (_0x298ff4.message.videoMessage) {
            var _0x2f0a7c = await _0x3265fc.downloadAndSaveMediaMessage(_0x298ff4.message.videoMessage);
            var _0x37b54e = _0x298ff4.message.videoMessage.caption;
            const _0x52c656 = {
              url: _0x2f0a7c
            };
            const _0x1542f1 = {
              "video": _0x52c656,
              "caption": _0x37b54e
            };
            const _0x44de56 = {
              "quoted": _0x2aca80
            };
            await _0x3265fc.sendMessage(_0x2ee1d1, _0x1542f1, _0x44de56);
          } else {
            if (_0x298ff4.message.audioMessage) {
              var _0x22e6e = await _0x3265fc.downloadAndSaveMediaMessage(_0x298ff4.message.audioMessage);
              const _0x384c8c = {
                url: _0x22e6e
              };
              const _0x26e8c5 = {
                "audio": _0x384c8c,
                "mymetype": "audio/mp4"
              };
              const _0x5068b2 = {
                "quoted": _0x2aca80,
                "ptt": false
              };
              await _0x3265fc.sendMessage(_0x2ee1d1, _0x26e8c5, _0x5068b2);
            }
          }
        }
      }
    }
    ;
    if (_0x2aca80.message?.["imageMessage"] || _0x2aca80.message?.["audioMessage"] || _0x2aca80.message?.["videoMessage"] || _0x2aca80.message?.["stickerMessage"] || _0x2aca80.message?.["documentMessage"]) {
      let _0x87f025;
      if (a68_0x5a7de7.has("antispam")) {
        _0x87f025 = a68_0x5a7de7.get("antispam").includes(_0x298039);
      } else {
        let _0x49d12d = await a68_0xcf559c();
        _0x87f025 = _0x49d12d.includes(_0x298039);
        a68_0x5a7de7.set("antispam", _0x49d12d);
      }
      if (_0x529211 && _0x87f025 && !_0x1a5e99 && !_0x6a770) {
        console.warn("------------------Media------sent--------------------");
        let _0x5f09ad = _0x26359c.get(_0x5cdf41 + '_' + _0x298039);
        if (_0x5f09ad) {
          if (_0x5f09ad.length >= 0x4) {
            _0x5f09ad.push(_0x2aca80.key);
            _0x5f09ad.forEach(_0x6498c9 => {
              const _0x395cca = {
                "delete": _0x6498c9
              };
              _0x3265fc.sendMessage(_0x298039, _0x395cca);
            });
            _0x3265fc.groupParticipantsUpdate(_0x298039, [_0x5cdf41], "remove").then(_0x3cc979 => {
              _0x3265fc.sendMessage(_0x298039, {
                'text': '@' + _0x5cdf41.split('@')[0x0] + " removed because of spaming in group",
                'mentions': [_0x5cdf41]
              });
            })["catch"](_0x3d4b51 => console.log(_0x3d4b51));
          } else {
            _0x5f09ad.push(_0x2aca80.key);
            _0x26359c.set(_0x5cdf41 + '_' + _0x298039, _0x5f09ad, 0x78);
          }
        } else {
          _0x26359c.set(_0x5cdf41 + '_' + _0x298039, [_0x2aca80.key]);
        }
      }
    }
  });
  _0x3265fc.ev.on("group-participants.update", async _0x179167 => {
    const _0x1faccb = _0x57f2c9 => {
      if (!_0x57f2c9) {
        return _0x57f2c9;
      }
      if (/:\d+@/gi.test(_0x57f2c9)) {
        0x0;
        let _0x2baeda = baileys_1.jidDecode(_0x57f2c9) || {};
        return _0x2baeda.user && _0x2baeda.server && _0x2baeda.user + '@' + _0x2baeda.server || _0x57f2c9;
      } else {
        return _0x57f2c9;
      }
    };
    console.log(_0x179167);
    let _0x1f722e;
    try {
      _0x1f722e = await _0x3265fc.profilePictureUrl(_0x179167.id, "image");
    } catch {
      _0x1f722e = "https://telegra.ph/file/4cc2712eee93c105f6739.jpg";
    }
    try {
      const _0x2066e6 = await _0x3265fc.groupMetadata(_0x179167.id);
      a68_0x2268e9.set(_0x179167.id, _0x2066e6);
      if (_0x179167.action == "add" && (await a68_0x2e68ef(_0x179167.id, "welcome")) == "oui") {
        let _0x5940ef = "╔════◇◇◇═════╗\n║ Welcome the new member(s)\n║ *New Member(s):*\n";
        let _0xf2c420 = _0x179167.participants;
        for (let _0x5d53dc of _0xf2c420) {
          _0x5940ef += "║ @" + _0x5d53dc.split('@')[0x0] + "\n";
        }
        _0x5940ef += "║\n╚════◇◇◇═════╝\n◇ *Description*   ◇\n\n" + _0x2066e6.desc;
        const _0x117c69 = {
          url: _0x1f722e
        };
        const _0x4058cb = {
          "image": _0x117c69,
          "caption": _0x5940ef,
          "mentions": _0xf2c420
        };
        _0x3265fc.sendMessage(_0x179167.id, _0x4058cb);
      } else {
        if (_0x179167.action == "remove" && (await a68_0x2e68ef(_0x179167.id, "goodbye")) == 'on') {
          let _0x267cd3 = "Un ou des membres vient(nent) de quitter le groupe;\n";
          let _0x3a1e6c = _0x179167.participants;
          for (let _0x24932b of _0x3a1e6c) {
            _0x267cd3 += '@' + _0x24932b.split('@')[0x0] + "\n";
          }
          const _0x1e403d = {
            "text": _0x267cd3,
            "mentions": _0x3a1e6c
          };
          _0x3265fc.sendMessage(_0x179167.id, _0x1e403d);
        } else {
          if (_0x179167.action == "promote" && (await a68_0x2e68ef(_0x179167.id, "antipromote")) == 'on') {
            if (_0x179167.author == _0x2066e6.owner || _0x179167.author == a68_0x32087d.NUMERO_OWNER + "@s.whatsapp.net" || _0x179167.author == _0x1faccb(_0x3265fc.user.id) || _0x179167.author == _0x179167.participants[0x0]) {
              console.log("Cas de superUser je fais rien");
              return;
            }
            ;
            await _0x3265fc.groupParticipantsUpdate(_0x179167.id, [_0x179167.author, _0x179167.participants[0x0]], "demote");
            _0x3265fc.sendMessage(_0x179167.id, {
              'text': '@' + _0x179167.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x179167.author.split('@')[0x0] + " and @" + _0x179167.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
              'mentions': [_0x179167.author, _0x179167.participants[0x0]]
            });
          } else {
            if (_0x179167.action == "demote" && (await a68_0x2e68ef(_0x179167.id, "antidemote")) == 'on') {
              if (_0x179167.author == _0x2066e6.owner || _0x179167.author == a68_0x32087d.NUMERO_OWNER + "@s.whatsapp.net" || _0x179167.author == _0x1faccb(_0x3265fc.user.id) || _0x179167.author == _0x179167.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x3265fc.groupParticipantsUpdate(_0x179167.id, [_0x179167.author], "demote");
              await _0x3265fc.groupParticipantsUpdate(_0x179167.id, [_0x179167.participants[0x0]], "promote");
              _0x3265fc.sendMessage(_0x179167.id, {
                'text': '@' + _0x179167.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x179167.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                'mentions': [_0x179167.author, _0x179167.participants[0x0]]
              });
            }
          }
        }
      }
    } catch (_0x5c953f) {
      console.error(_0x5c953f);
    }
  });
  _0x3265fc.ev.on("group.update", async _0x17dc61 => {
    a68_0x2268e9.set(_0x17dc61.id, _0x17dc61);
  });
  _0x3265fc.ev.on("contacts.upsert", async _0x141cf0 => {
    const _0x52664e = _0x566af2 => {
      for (const _0x1a4184 of _0x566af2) {
        if (a68_0x1f5efa.contacts[_0x1a4184.id]) {
          Object.assign(a68_0x1f5efa.contacts[_0x1a4184.id], _0x1a4184);
        } else {
          a68_0x1f5efa.contacts[_0x1a4184.id] = _0x1a4184;
        }
      }
      return;
    };
    _0x52664e(_0x141cf0);
  });
  _0x3265fc.ev.on("connection.update", async _0x6306a0 => {
    const {
      connection: _0x4de99b,
      lastDisconnect: _0x59a0cf
    } = _0x6306a0;
    if (_0x4de99b == "connecting") {
      console.log("connection en cours...");
    } else {
      if (_0x4de99b == "close") {
        let _0xaa0f45 = new a68_0x1a3349(_0x59a0cf?.["error"])?.["output"]["statusCode"];
        if (_0xaa0f45 == a68_0x341303.connectionClosed) {
          console.log("Connexion fermee , reconnexion en cours");
          a68_0x4f40bf();
        } else {
          if (_0xaa0f45 == a68_0x341303.badSession) {
            console.log("La session id est erronee,  veillez la remplacer");
          } else {
            if (_0xaa0f45 === a68_0x341303.connectionReplaced) {
              console.log("connexion réplacée ,,, une session est déjà ouverte veuillez la fermer svp !!!");
            } else {
              if (_0xaa0f45 === a68_0x341303.loggedOut) {
                console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
              } else {
                if (_0xaa0f45 === a68_0x341303.restartRequired) {
                  console.log("redémarrage en cours ▶️");
                  a68_0x4f40bf();
                } else {
                  if (_0xaa0f45 === a68_0x341303.connectionLost) {
                    console.log("connexion au serveur perdue 😞 ,,, reconnexion en cours ... ");
                    a68_0x4f40bf();
                  } else {
                    console.log("Raison de deconnection inattendue ; redemarrage du server");
                    const {
                      exec: _0x1dbd41
                    } = require("child_process");
                    _0x1dbd41("pm2 restart all");
                  }
                }
              }
            }
          }
        }
      } else {
        if (_0x4de99b == "open") {
          console.log("✅ connexion reussie! ☺️");
          await a68_0x41b3d0(0x1f4);
          let _0x52d2a5 = await a68_0xef69c0.pluginList();
          console.log(_0x52d2a5);
          if (_0x52d2a5.length > 0x0) {
            console.log("Chargement des plugins");
            let _0x58415e = [];
            for (const _0x188daa of _0x52d2a5) {
              if (_0x188daa.name !== null && _0x188daa.url !== null) {
                try {
                  let _0x202d86 = await fetch(_0x188daa.url);
                  let _0x28bb8f = await _0x202d86.text();
                  _0x58415e.push(..._0x5998ed(_0x28bb8f));
                } catch (_0x710d2f) {
                  console.error("Erreur lors de la récupération du plugin " + _0x188daa.name + ':', _0x710d2f);
                }
              }
            }
            _0x58415e = await a68_0x3d1f0c(_0x58415e);
            console.log("Liste des dependances a installer : ", _0x58415e);
            try {
              if (_0x58415e.length > 0x0) {
                console.log("Les plugins suivants nécessitent des dépendances : " + _0x58415e.join(", "));
                const _0x3a67f9 = {
                  "text": "The plugins required some dependancies so we proceding to installation... please wait"
                };
                _0x3265fc.sendMessage(_0x3265fc.user.id, _0x3a67f9)["catch"](_0x278c0a => console.log(_0x278c0a));
                const {
                  exec: _0x1317b2
                } = require("child_process");
                await new Promise((_0x2d3ee1, _0x25d1a5) => {
                  _0x1317b2("npm install  " + _0x58415e.join(" ") + " --legacy-peer-deps", (_0x4ede86, _0x345b2b, _0x2c6e2e) => {
                    if (_0x4ede86) {
                      _0x25d1a5(_0x4ede86);
                    } else {
                      const _0x58ae7f = {
                        "text": "dependancies are installed successfully"
                      };
                      _0x3265fc.sendMessage(_0x3265fc.user.id, _0x58ae7f)["catch"](_0x18c3df => console.log(_0x18c3df));
                      _0x2d3ee1(_0x345b2b);
                    }
                  });
                });
              }
            } catch (_0x3e5ad8) {
              console.log("Erreur lors de l'installation des dépendances : " + _0x3e5ad8);
            }
            for (const _0xef0bb8 of _0x52d2a5) {
              if ((_0xef0bb8.name !== null || _0xef0bb8.url !== null) && !a68_0x54c07d.existsSync(__dirname + "/commandes/" + _0xef0bb8.name + ".js")) {
                try {
                  let _0x27222d = await fetch(_0xef0bb8.url);
                  let _0x13bbc1 = await _0x27222d.text();
                  a68_0x54c07d.createWriteStream(__dirname + "/commandes/" + _0xef0bb8.name + ".js").end(_0x13bbc1);
                } catch (_0x5cd602) {
                  console.log(_0x5cd602);
                }
              }
            }
            console.log("Chargement des plugins terminé ✅");
            const _0x593954 = {
              "text": "All plugins are installed successfully"
            };
            _0x3265fc.sendMessage(_0x3265fc.user.id, _0x593954)["catch"](_0x5c2b0b => console.log(_0x5c2b0b));
            await a68_0x41b3d0(0x3e8);
          }
          a68_0x54c07d.readdirSync(__dirname + "/commandes").forEach(_0x3974a5 => {
            if (a68_0x4d5bb6.extname(_0x3974a5).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commandes/" + _0x3974a5);
                console.log(_0x3974a5 + " installé ✔️");
              } catch (_0x173ece) {
                console.log(_0x3974a5 + " n'a pas pu être chargé pour les raisons suivantes : " + _0x173ece);
                console.error(_0x173ece);
              }
              a68_0x41b3d0(0x12c);
            }
          });
          await a68_0x41b3d0(0x2bc);
          var _0x593356;
          if (a68_0x32087d.MODE.toLowerCase() === "yes") {
            _0x593356 = "public";
          } else {
            if (a68_0x32087d.MODE.toLowerCase() === 'no') {
              _0x593356 = "private";
            } else {
              _0x593356 = "undefined";
            }
          }
          console.log("chargement des commandes terminé ✅");
          await _0x4f4932();
          if (a68_0x32087d.DP.toLowerCase() === "yes") {
            let _0x4cdfd4 = "╔════◇\n║ 『Hans-𝐌𝐃』\n║    Prefix : [ " + a68_0x3ab510 + " ]\n║    Mode :" + _0x593356 + "\n║    Commandes length: " + a68_0x131242.cm.length + "︎\n╚══════════════════╝\n  \n╔═════◇\n║『Made By HansTz』\n║ \n╚══════════════════╝";
            const _0x7e7d5b = {
              "text": _0x4cdfd4
            };
            await _0x3265fc.sendMessage(_0x3265fc.user.id, _0x7e7d5b);
          }
        }
      }
    }
  });
  _0x3265fc.ev.on("creds.update", _0x539109);
  _0x3265fc.downloadAndSaveMediaMessage = async (_0x49d60b, _0x352467 = '', _0x343db2 = true) => {
    let _0x1bb42c = _0x49d60b.msg ? _0x49d60b.msg : _0x49d60b;
    let _0x763d42 = (_0x49d60b.msg || _0x49d60b).mimetype || '';
    let _0x21039e = _0x49d60b.mtype ? _0x49d60b.mtype.replace(/Message/gi, '') : _0x763d42.split('/')[0x0];
    const _0x4b900c = await a68_0x43cbfc(_0x1bb42c, _0x21039e);
    let _0xd9e19c = Buffer.from([]);
    for await (const _0xf5ccd9 of _0x4b900c) {
      _0xd9e19c = Buffer.concat([_0xd9e19c, _0xf5ccd9]);
    }
    let _0xf86f0c = await a68_0xd81186.fromBuffer(_0xd9e19c);
    let _0x3a03e1 = './' + _0x352467 + '.' + _0xf86f0c.ext;
    await a68_0x54c07d.writeFileSync(_0x3a03e1, _0xd9e19c);
    return _0x3a03e1;
  };
  _0x3265fc.awaitForMessage = async (_0x28899 = {}) => {
    return new Promise((_0xf496a1, _0x1bf3bb) => {
      if (typeof _0x28899 !== "object") {
        _0x1bf3bb(new Error("Options must be an object"));
      }
      if (_0x28899.sender && typeof _0x28899.sender !== "string") {
        _0x1bf3bb(new Error("Sender must be a string"));
      }
      if (typeof _0x28899.chatJid !== "string") {
        _0x1bf3bb(new Error("ChatJid must be a string"));
      }
      if (_0x28899.timeout && typeof _0x28899.timeout !== "number") {
        _0x1bf3bb(new Error("Timeout must be a number"));
      }
      if (_0x28899.filter && typeof _0x28899.filter !== "function") {
        _0x1bf3bb(new Error("Filter must be a function"));
      }
      const _0x2935fd = _0x28899?.["timeout"] || undefined;
      const _0x1e5006 = _0x28899?.["filter"] || (() => true);
      let _0x8de19d = undefined;
      let _0x4933bc = _0x59ec6e => {
        let {
          type: _0xb290c5,
          messages: _0x4bb1ae
        } = _0x59ec6e;
        if (_0xb290c5 == "notify") {
          for (let _0x552fe2 of _0x4bb1ae) {
            const _0x5434b0 = _0x552fe2.key.fromMe;
            const _0x3e93d4 = _0x552fe2.key.remoteJid;
            const _0x542de3 = _0x3e93d4.endsWith("@g.us");
            const _0x49f086 = _0x3e93d4 == "status@broadcast";
            const _0x2b4090 = _0x5434b0 ? _0x3265fc.user.id.replace(/:.*@/g, '@') : _0x542de3 || _0x49f086 ? _0x552fe2.key.participant.replace(/:.*@/g, '@') : _0x3e93d4;
            let _0xef8197 = _0x28899.sender ? _0x2b4090 == _0x28899.sender : true;
            if (_0xef8197 && _0x3e93d4 == _0x28899.chatJid && _0x1e5006(_0x552fe2)) {
              _0x3265fc.ev.off("messages.upsert", _0x4933bc);
              clearTimeout(_0x8de19d);
              _0xf496a1(_0x552fe2);
            }
          }
        }
      };
      _0x3265fc.ev.on("messages.upsert", _0x4933bc);
      if (_0x2935fd) {
        _0x8de19d = setTimeout(() => {
          _0x3265fc.ev.off("messages.upsert", _0x4933bc);
          _0x1bf3bb(new Error("Timeout"));
        }, _0x2935fd);
      }
    });
  };
  async function _0x4f4932() {
    const _0xfde6c8 = require("node-cron");
    const {
      getCron: _0x2e9dde
    } = require("./bdd/cron");
    let _0x2e4a68 = await _0x2e9dde();
    console.log(_0x2e4a68);
    if (_0x2e4a68.length > 0x0) {
      for (let _0x3a504b = 0x0; _0x3a504b < _0x2e4a68.length; _0x3a504b++) {
        if (_0x2e4a68[_0x3a504b].mute_at != null) {
          let _0x20f381 = _0x2e4a68[_0x3a504b].mute_at.split(':');
          console.log("etablissement d'un automute pour " + _0x2e4a68[_0x3a504b].group_id + " a " + _0x20f381[0x0] + " H " + _0x20f381[0x1]);
          const _0x5d08a7 = {
            "timezone": "Africa/Abidjan"
          };
          _0xfde6c8.schedule(_0x20f381[0x1] + " " + _0x20f381[0x0] + " * * *", async () => {
            try {
              await _0x3265fc.groupSettingUpdate(_0x2e4a68[_0x3a504b].group_id, "announcement");
              const _0x4a0ffb = {
                url: "./media/chrono.jpg"
              };
              const _0x27f8be = {
                "image": _0x4a0ffb,
                "caption": "Tic Tac, the exciting discussions are coming to an end. Thank you for your active participation; now, it's time to close the group for today."
              };
              _0x3265fc.sendMessage(_0x2e4a68[_0x3a504b].group_id, _0x27f8be);
            } catch (_0x31a0c0) {
              console.log(_0x31a0c0);
            }
          }, _0x5d08a7);
        }
        if (_0x2e4a68[_0x3a504b].unmute_at != null) {
          let _0x23db26 = _0x2e4a68[_0x3a504b].unmute_at.split(':');
          console.log("etablissement d'un autounmute pour " + _0x23db26[0x0] + " H " + _0x23db26[0x1] + " ");
          const _0x7b25a7 = {
            "timezone": "Africa/Abidjan"
          };
          _0xfde6c8.schedule(_0x23db26[0x1] + " " + _0x23db26[0x0] + " * * *", async () => {
            try {
              await _0x3265fc.groupSettingUpdate(_0x2e4a68[_0x3a504b].group_id, "not_announcement");
              const _0x10f84b = {
                url: "./media/chrono.jpg"
              };
              const _0x4129f9 = {
                "image": _0x10f84b,
                "caption": "Time to open the doors of our new group! Welcome everyone to this exciting community where we share and learn together."
              };
              _0x3265fc.sendMessage(_0x2e4a68[_0x3a504b].group_id, _0x4129f9);
            } catch (_0x42690c) {
              console.log(_0x42690c);
            }
          }, _0x7b25a7);
        }
      }
    } else {
      console.log("Les crons n'ont pas été activés");
    }
    return;
  }
  function _0x5998ed(_0x2892b5) {
    let _0x5db67e = /require\(['"]([^'"]+)['"]\)/g;
    let _0x25d43e = _0x2892b5.match(_0x5db67e);
    let _0x58ee7c = [];
    if (_0x25d43e) {
      _0x25d43e.forEach(_0x18acab => {
        let _0x5b95b9 = _0x18acab.replace("require(", '').replace(')', '').replace(/['"]/g, '');
        if (!_0x5b95b9.startsWith('./') && !_0x5b95b9.startsWith("../")) {
          _0x58ee7c.push(_0x5b95b9);
        }
      });
    }
    return _0x58ee7c;
  }
  _0x3265fc.StartWcgGame = async (_0x25b03a, _0x23f5a5) => {
    let _0x3bd75d = [];
    _0x23f5a5.map(_0x596e7d => {
      const _0x222c32 = {
        "jid": _0x596e7d,
        "score": 0x0
      };
      _0x3bd75d.push(_0x222c32);
    });
    let _0x4ac0a3 = 0x3;
    let _0x5b8aac = await (await fetch("https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words_alpha.txt")).text();
    let _0x123904 = "ETAOINSHRDLCUMWF".split('');
    _0x5b8aac = new Set(_0x5b8aac.split("\n").map(_0x407342 => _0x407342.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '')));
    BannedWord = [];
    async function _0x42f84e(_0x4e0cc8) {
      let _0x5ebfdc = _0x23f5a5[_0x4e0cc8];
      let _0x5c1525 = _0x23f5a5[_0x4e0cc8 + 0x1 == _0x23f5a5.length ? 0x0 : _0x4e0cc8 + 0x1];
      let _0x743a66 = _0x123904[Math.floor(Math.random() * _0x123904.length)];
      let _0x533d0c;
      _0x4ac0a3 = _0x4ac0a3 > 0xa ? 0xa : _0x4ac0a3;
      _0x3265fc.sendMessage(_0x25b03a, {
        'text': "🎮 Current player: @" + _0x5ebfdc.split('@')[0x0] + "\n    📜 Instruction: Find a word that starts with the letter **" + _0x743a66 + "** and has at least **" + _0x4ac0a3 + "** letters.\n    ⏳ You have 15 seconds to respond!\n    \n    🔜 @" + _0x5c1525.split('@')[0x0] + " get ready for the next round...",
        'mentions': [_0x5ebfdc, _0x5c1525]
      });
      let _0x4584a4 = async _0x55ce99 => {
        let {
          messages: _0x5dd7b5,
          type: _0x30ff26
        } = _0x55ce99;
        if (_0x30ff26 != "notify") {
          return;
        }
        let _0x2e3919 = _0x5dd7b5[0x0];
        let _0x42df31 = _0x2e3919.key.remoteJid;
        let _0x2ea44e = _0x42df31.endsWith("@g.us");
        let _0x1663ca = _0x42df31 == "status@broadcast";
        let _0x976676 = _0x2e3919.key.fromMe ? _0x3265fc.user.id.replace(/:.*@/g, '@') : _0x2ea44e || _0x1663ca ? _0x2e3919.key.participant.replace(/:.*@/g, '@') : _0x42df31;
        let _0x1928d1 = _0x2e3919.message?.["conversation"]["trim"]()["toLowerCase"]() || _0x2e3919.message?.["extendedTextMessage"]?.["text"]["trim"]()["toLowerCase"]();
        if (typeof _0x1928d1 != "string") {
          return;
        }
        if (_0x976676 == _0x5ebfdc && _0x42df31 == _0x25b03a) {
          if (_0x1928d1.normalize("NFD").replace(/[\u0300-\u036f]/g, '').startsWith(_0x743a66.toLowerCase())) {
            if (_0x1928d1.length >= _0x4ac0a3) {
              if (_0x5b8aac.has(_0x1928d1.normalize("NFD").replace(/[\u0300-\u036f]/g, ''))) {
                if (BannedWord.includes(_0x1928d1)) {
                  return _0x3265fc.sendMessage(_0x25b03a, {
                    'text': '@' + _0x976676.split('@')[0x0] + " This word has already been used.",
                    'mentions': [_0x976676]
                  });
                }
                _0x3265fc.ev.off("messages.upsert", _0x4584a4);
                clearInterval(_0x533d0c);
                _0x3bd75d.map(_0x100e6a => {
                  if (_0x100e6a.jid == _0x5ebfdc) {
                    _0x100e6a.score += 0x1;
                  }
                });
                const _0x13ce7b = {
                  "quoted": _0x2e3919
                };
                _0x3265fc.sendMessage(_0x25b03a, {
                  'text': '@' + _0x976676.split('@')[0x0] + " Congratulations! You found a word that fits perfectly.",
                  'mentions': [_0x976676]
                }, _0x13ce7b);
                BannedWord.push(_0x1928d1);
                if (_0x23f5a5.indexOf(_0x5c1525) == 0x0) {
                  _0x4ac0a3++;
                }
                await a68_0x41b3d0(0x3e8);
                _0x42f84e(_0x23f5a5.indexOf(_0x5c1525));
              } else {
                const _0x698b7 = {
                  "quoted": _0x2e3919
                };
                _0x3265fc.sendMessage(_0x25b03a, {
                  'text': '@' + _0x976676.split('@')[0x0] + " 🤔 Are you sure your word exists? It's not in my records. 📜",
                  'mentions': [_0x976676]
                }, _0x698b7);
              }
            } else {
              const _0x1380a1 = {
                "quoted": _0x2e3919
              };
              _0x3265fc.sendMessage(_0x25b03a, {
                'text': '@' + _0x976676.split('@')[0x0] + " ⚠️ Please follow the instructions! Your word must have at least **" + _0x4ac0a3 + "** letters. ✍️",
                'mentions': [_0x976676]
              }, _0x1380a1);
            }
          } else {
            const _0x236444 = {
              "quoted": _0x2e3919
            };
            _0x3265fc.sendMessage(_0x25b03a, {
              'text': '@' + _0x976676.split('@')[0x0] + " ⚠️ Please follow the instructions! Your word must start with the letter **" + _0x743a66 + "**. 🔤",
              'mentions': [_0x976676]
            }, _0x236444);
          }
        }
      };
      new Promise((_0x19de3e, _0x306f41) => {
        _0x533d0c = setTimeout(() => {
          _0x19de3e();
        }, 0x3a98);
      }).then(async () => {
        _0x3265fc.ev.off("messages.upsert", _0x4584a4);
        _0x3265fc.sendMessage(_0x25b03a, {
          'text': '@' + _0x5ebfdc.split('@')[0x0] + " ⏳ You took too long to respond. You are eliminated. 🚫",
          'mentions': [_0x5ebfdc]
        });
        if (_0x23f5a5.indexOf(_0x5c1525) == 0x0) {
          _0x4ac0a3++;
        }
        _0x23f5a5.splice(_0x23f5a5.indexOf(_0x5ebfdc), 0x1);
        if (_0x23f5a5.length > 0x0) {
          await a68_0x41b3d0(0x3e8);
          _0x42f84e(_0x23f5a5.indexOf(_0x5c1525));
        } else {
          const {
            wcgCache: _0x2d7d60
          } = require("./cache");
          _0x2d7d60.del(_0x25b03a);
          _0x3bd75d = _0x3bd75d.sort((_0x2ff6f6, _0x9e8d01) => _0x9e8d01.score - _0x2ff6f6.score);
          let _0x5c8b10 = "🎉 Game Over! 🎉";
          if (_0x3bd75d.length > 0x3) {
            _0x5c8b10 += "\nThe top 3 players will receive extra XP points (500xp, 300xp, 100xp respectively).";
            _0x5c8b10 += "\nHere are your respective scores:";
            for (let _0x3fcb0c = 0x0; _0x3fcb0c < _0x3bd75d.length; _0x3fcb0c++) {
              let _0x33b76d = _0x3bd75d[_0x3fcb0c];
              if (_0x3fcb0c <= 0x2) {
                let _0x3d4d59 = ['🥇', '🥈', '🥉'];
                _0x5c8b10 += "\n\n" + _0x3d4d59[_0x3fcb0c] + " @" + _0x33b76d.jid.split('@')[0x0] + " : " + _0x33b76d.score + " points";
              } else {
                _0x5c8b10 += "\n\n@" + _0x33b76d.jid.split('@')[0x0] + " : " + _0x33b76d.score + " points";
              }
            }
          } else {
            _0x5c8b10 += "\nHere are your respective scores:";
            _0x5c8b10 += _0x3bd75d.map(_0x5abf0c => "\n\n@" + _0x5abf0c.jid.split('@')[0x0] + " : " + _0x5abf0c.score + " points\n").join('');
          }
          _0x3265fc.sendMessage(_0x25b03a, {
            'text': _0x5c8b10,
            'mentions': [..._0x3bd75d.map(_0x1545b6 => _0x1545b6.jid)]
          });
          if (_0x3bd75d.length >= 0x3) {
            for (let _0x414701 = 0x0; _0x414701 < 0x3; _0x414701++) {
              let _0x5f15fb = [0x1f4, 0x12c, 0x64];
              try {
                await a68_0x5f0215(_0x3bd75d[_0x414701].jid, _0x5f15fb[_0x414701]);
              } catch (_0x46dfdd) {
                console.log(_0x46dfdd);
              }
            }
          }
        }
      })["catch"](_0x47991a => {
        console.log(_0x47991a);
      });
      _0x3265fc.ev.on("messages.upsert", _0x4584a4);
    }
    await a68_0x41b3d0(0x3e8);
    _0x42f84e(0x0);
  };
}
a68_0x4f40bf();