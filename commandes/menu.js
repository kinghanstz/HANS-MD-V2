const a38_0x4b7bd4 = function () {
  let _0x2d05ae = true;
  return function (_0x17bde3, _0x2de5c4) {
    const _0x40e71d = _0x2d05ae ? function () {
      if (_0x2de5c4) {
        const _0x18a2c2 = _0x2de5c4.apply(_0x17bde3, arguments);
        _0x2de5c4 = null;
        return _0x18a2c2;
      }
    } : function () {};
    _0x2d05ae = false;
    return _0x40e71d;
  };
}();

const a38_0xb6db30 = a38_0x4b7bd4(this, function () {
  return a38_0xb6db30.toString().search("(((.+)+)+)+$").toString().constructor(a38_0xb6db30).search("(((.+)+)+)+$");
});
a38_0xb6db30();

const {
  zokou: a38_0x27b8a8
} = require(__dirname + "/../framework/zokou");
const {
  format: a38_0x3dba0a
} = require(__dirname + "/../framework/mesfonctions");
const a38_0x382481 = require('os');
const a38_0x161c6e = require("moment-timezone");
const a38_0x3996ea = require(__dirname + "/../set");
const a38_0x21ad14 = {
  "name": "menu",
  "category": "General",
  "description": "List of all commands",
  "alias": ["list", "command"]
};

a38_0x27b8a8(a38_0x21ad14, async (_0x45457d, _0x5cd121, _0x5a7546) => {
  let {
    ms: _0x3fccd5,
    reply: _0x587f75,
    prefix: _0x1d3bc4,
    messageAuthorName: _0x24eb2c,
    mybotpic: _0x2b53cc
  } = _0x5a7546;
  let {
    cm: _0x4a83a8
  } = require(__dirname + "/../framework/zokou");
  var _0x5878c2 = {};
  var _0x561382 = "public";
  if (a38_0x3996ea.MODE.toLocaleLowerCase() != "yes") {
    _0x561382 = "private";
  }
  _0x4a83a8.map(async (_0x2f3b02, _0x2b851a) => {
    if (!_0x5878c2[_0x2f3b02.category]) {
      _0x5878c2[_0x2f3b02.category] = [];
    }
    _0x5878c2[_0x2f3b02.category].push(_0x2f3b02.name);
  });
  a38_0x161c6e.tz.setDefault("Etc/GMT");
  const _0x387e1f = a38_0x161c6e().format("HH:mm:ss");
  const _0x276f04 = a38_0x161c6e().format("DD/MM/YYYY");
  let _0x3d7387 = "\n╭────✧" + a38_0x3996ea.BOT + "✧────◆\n│   *Prefix* : " + a38_0x3996ea.PREFIX + "\n│   *Owner* : " + a38_0x3996ea.OWNER_NAME + "\n│   *Mode* : " + _0x561382 + "\n│   *Commands* : " + _0x4a83a8.length + "\n│   *Date* : " + _0x276f04 + "\n│   *Time* : " + _0x387e1f + "\n│   *Memory* : " + a38_0x3dba0a(a38_0x382481.totalmem() - a38_0x382481.freemem()) + '/' + a38_0x3dba0a(a38_0x382481.totalmem()) + "\n│   *Platform* : " + a38_0x382481.platform() + "\n│   *Developer* : Djalega++ \n│  & Monkey D Luffy\n╰─────✧WA-BOT✧─────◆ \n\n";
  let _0x4c673f = "\n👋 Hello " + _0x24eb2c + " 👋\n\n*List of commands :*\n◇                             ◇\n";
  for (const _0x443d33 in _0x5878c2) {
    _0x4c673f += "╭───➤ *" + _0x443d33 + "*\n";
    for (const _0x266463 of _0x5878c2[_0x443d33]) {
      _0x4c673f += "│ ➜ " + _0x266463 + "\n";
    }
    _0x4c673f += "╰─────────────\n";
  }
  _0x4c673f += "\n◇            ◇\n*»»————— ★ —————««*\n\"To use a command, insert " + _0x1d3bc4 + " followed by the command_name.\"\n \n    Powered by Zokou-MD\n                                                \n*»»————— ★ —————««*\n";
  var _0x8ec0b8 = _0x2b53cc();
  if (_0x8ec0b8.match(/\.(mp4|gif)$/i)) {
    try {
      const _0x1300f0 = {
        url: _0x8ec0b8
      };
      const _0x140046 = {
        "quoted": _0x3fccd5
      };
      _0x5cd121.sendMessage(_0x45457d, {
        'video': _0x1300f0,
        'caption': _0x3d7387 + _0x4c673f,
        'footer': "I am *Zokou-MD*, developed by Djalega++",
        'gifPlayback': true
      }, _0x140046);
    } catch (_0x3a59d5) {
      console.log("🥵🥵 Menu error " + _0x3a59d5);
      _0x587f75("🥵🥵 Menu error " + _0x3a59d5);
    }
  } else {
    if (_0x8ec0b8.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        const _0x12a121 = {
          url: _0x8ec0b8
        };
        const _0x51661c = {
          "image": _0x12a121,
          "caption": _0x3d7387 + _0x4c673f,
          "footer": "I am *Zokou-MD*, developed by Djalega++"
        };
        const _0x42b59d = {
          "quoted": _0x3fccd5
        };
        _0x5cd121.sendMessage(_0x45457d, _0x51661c, _0x42b59d);
      } catch (_0x298361) {
        console.log("🥵🥵 Menu error " + _0x298361);
        _0x587f75("🥵🥵 Menu error " + _0x298361);
      }
    } else {
      _0x587f75(_0x3d7387 + _0x4c673f);
    }
  }
});
