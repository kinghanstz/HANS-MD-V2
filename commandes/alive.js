const a21_0x546802 = function () {
  let _0x276529 = true;
  return function (_0xd432c2, _0x1a33e9) {
    const _0x5e3f7a = _0x276529 ? function () {
      if (_0x1a33e9) {
        const _0x116187 = _0x1a33e9.apply(_0xd432c2, arguments);
        _0x1a33e9 = null;
        return _0x116187;
      }
    } : function () {};
    _0x276529 = false;
    return _0x5e3f7a;
  };
}();
const a21_0x1f4a68 = a21_0x546802(this, function () {
  return a21_0x1f4a68.toString().search("(((.+)+)+)+$").toString().constructor(a21_0x1f4a68).search("(((.+)+)+)+$");
});
a21_0x1f4a68();
const {
  zokou: a21_0x102efc
} = require("../framework/zokou");
const {
  addOrUpdateDataInAlive: a21_0x286d18,
  getDataFromAlive: a21_0x249331
} = require("../bdd/alive");
const a21_0xbf375f = require("moment-timezone");
const a21_0x363c37 = require(__dirname + "/../set");
const a21_0x40943b = {
  "nomCom": "alive",
  "categorie": "General",
  "desc": "Get the alive of the bot , you can edit it"
};
a21_0x102efc(a21_0x40943b, async (_0x5d8e43, _0x3609c2, _0x235c9e) => {
  const {
    ms: _0x52b564,
    arg: _0x57656b,
    repondre: _0xc3e429,
    superUser: _0x1a7670
  } = _0x235c9e;
  const _0x178cfb = await a21_0x249331();
  if (!_0x57656b || !_0x57656b[0x0] || _0x57656b.join('') === '') {
    if (_0x178cfb) {
      const {
        message: _0x3fc4ab,
        lien: _0x1e700a
      } = _0x178cfb;
      var _0x561910 = "public";
      if (a21_0x363c37.MODE.toLocaleLowerCase() != "yes") {
        _0x561910 = "private";
      }
      a21_0xbf375f.tz.setDefault("Etc/GMT");
      const _0x400156 = a21_0xbf375f().format("HH:mm:ss");
      const _0x41d77e = a21_0xbf375f().format("DD/MM/YYYY");
      const _0xb45d94 = "\n*Owner* : " + a21_0x363c37.OWNER_NAME + "\n*Mode* : " + _0x561910 + "\n*Date* : " + _0x41d77e + "\n*Hours(GMT)* : " + _0x400156 + "\n\n " + _0x3fc4ab + "\n \n \n *Zokou_MD version 2.0*";
      if (_0x1e700a.match(/\.(mp4|gif)$/i)) {
        try {
          const _0x217a1c = {
            url: _0x1e700a
          };
          const _0x206fa6 = {
            "video": _0x217a1c,
            "caption": _0xb45d94
          };
          const _0x32e42f = {
            "quoted": _0x52b564
          };
          _0x3609c2.sendMessage(_0x5d8e43, _0x206fa6, _0x32e42f);
        } catch (_0x301990) {
          console.log("🥵🥵 Menu erreur " + _0x301990);
          _0xc3e429("🥵🥵 Menu erreur " + _0x301990);
        }
      } else {
        if (_0x1e700a.match(/\.(jpeg|png|jpg)$/i)) {
          try {
            const _0x37d9c2 = {
              url: _0x1e700a
            };
            const _0x331ad0 = {
              "image": _0x37d9c2,
              "caption": _0xb45d94
            };
            const _0x4aa0bd = {
              "quoted": _0x52b564
            };
            _0x3609c2.sendMessage(_0x5d8e43, _0x331ad0, _0x4aa0bd);
          } catch (_0x291bfd) {
            console.log("🥵🥵 Menu erreur " + _0x291bfd);
            _0xc3e429("🥵🥵 Menu erreur " + _0x291bfd);
          }
        } else {
          _0xc3e429(_0xb45d94);
        }
      }
    } else {
      if (!_0x1a7670) {
        _0xc3e429("there is no alive for this bot");
        return;
      }
      ;
      await _0xc3e429("You have not yet saved your alive, to do this;  enter after alive your message and your image or video link in this context: .alive message;lien");
      _0xc3e429("don't do fake thinks :)");
    }
  } else {
    if (!_0x1a7670) {
      _0xc3e429("Only the owner can  modify the alive");
      return;
    }
    ;
    const _0x3b7e55 = _0x57656b.join(" ").split(';')[0x0];
    const _0x173c0d = _0x57656b.join(" ").split(';')[0x1];
    await a21_0x286d18(_0x3b7e55, _0x173c0d);
    _0xc3e429("message alive refresh successfully");
  }
});