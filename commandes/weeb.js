const a54_0x476e45 = function () {
  let _0x4f62dd = true;
  return function (_0x3126df, _0x480c5e) {
    const _0x574190 = _0x4f62dd ? function () {
      if (_0x480c5e) {
        const _0x1dfb14 = _0x480c5e.apply(_0x3126df, arguments);
        _0x480c5e = null;
        return _0x1dfb14;
      }
    } : function () {};
    _0x4f62dd = false;
    return _0x574190;
  };
}();
const a54_0xb7463 = a54_0x476e45(this, function () {
  return a54_0xb7463.toString().search("(((.+)+)+)+$").toString().constructor(a54_0xb7463).search("(((.+)+)+)+$");
});
a54_0xb7463();
const a54_0x543e1c = require("axios");
const {
  zokou: a54_0x147e51
} = require("../framework/zokou");
const {
  writeFile: a54_0x50e705
} = require("fs/promises");
const a54_0x10fe1e = {
  "nomCom": "waifu",
  "categorie": "Weeb",
  "reaction": '😏',
  "desc": "send 5 waifu images"
};
a54_0x147e51(a54_0x10fe1e, async (_0x37796e, _0x113ed2, _0xd4e356) => {
  const {
    repondre: _0x109a7b,
    ms: _0x1645f9
  } = _0xd4e356;
  try {
    for (let _0x5be830 = 0x0; _0x5be830 < 0x5; _0x5be830++) {
      const _0x2bbc5c = await a54_0x543e1c.get("https://api.waifu.pics/sfw/waifu");
      const _0x531389 = _0x2bbc5c.data.url;
      const _0x243c67 = {
        url: _0x531389
      };
      const _0x4c76dc = {
        image: _0x243c67
      };
      const _0x569978 = {
        "quoted": _0x1645f9
      };
      _0x113ed2.sendMessage(_0x37796e, _0x4c76dc, _0x569978);
    }
  } catch (_0x5bc5b3) {
    _0x109a7b("Error occurred while retrieving the data. :", _0x5bc5b3);
  }
});
const a54_0x154b3f = {
  "nomCom": "neko",
  "categorie": "Weeb",
  "reaction": '😺',
  "desc": "send 5 neko images"
};
a54_0x147e51(a54_0x154b3f, async (_0x4c0ceb, _0x3df1af, _0x4d4ac2) => {
  const {
    repondre: _0x527c3d,
    ms: _0x22035d
  } = _0x4d4ac2;
  try {
    for (let _0x38a8d7 = 0x0; _0x38a8d7 < 0x5; _0x38a8d7++) {
      const _0x2438a2 = await a54_0x543e1c.get("https://api.waifu.pics/sfw/neko");
      const _0x11eec4 = _0x2438a2.data.url;
      const _0x38a022 = {
        url: _0x11eec4
      };
      const _0x3a7328 = {
        image: _0x38a022
      };
      const _0x48eda8 = {
        "quoted": _0x22035d
      };
      _0x3df1af.sendMessage(_0x4c0ceb, _0x3a7328, _0x48eda8);
    }
  } catch (_0x3ebabe) {
    _0x527c3d("Error occurred while retrieving the data. :", _0x3ebabe);
  }
});
const a54_0x2c02ce = {
  "nomCom": "shinobu",
  "categorie": "Weeb",
  "reaction": '🦋',
  "desc": "send 5 shinobu images"
};
a54_0x147e51(a54_0x2c02ce, async (_0x373785, _0x327356, _0x3f97aa) => {
  const {
    repondre: _0x39eaa0,
    ms: _0x2ffea6
  } = _0x3f97aa;
  try {
    for (let _0x45f319 = 0x0; _0x45f319 < 0x5; _0x45f319++) {
      const _0x460ffb = await a54_0x543e1c.get("https://api.waifu.pics/sfw/shinobu");
      const _0x38a19a = _0x460ffb.data.url;
      const _0x184298 = {
        url: _0x38a19a
      };
      const _0x45b01 = {
        image: _0x184298
      };
      const _0x2e1f27 = {
        "quoted": _0x2ffea6
      };
      _0x327356.sendMessage(_0x373785, _0x45b01, _0x2e1f27);
    }
  } catch (_0x34504) {
    _0x39eaa0("Error occurred while retrieving the data. :", _0x34504);
  }
});
const a54_0x5700c6 = {
  "nomCom": "megumin",
  "categorie": "Weeb",
  "reaction": '💥',
  "desc": "send 5 megumin images"
};
a54_0x147e51(a54_0x5700c6, async (_0x182fa5, _0x26dca9, _0xca96ce) => {
  const {
    repondre: _0x569b12,
    ms: _0x18caaf
  } = _0xca96ce;
  try {
    for (let _0x35d425 = 0x0; _0x35d425 < 0x5; _0x35d425++) {
      const _0x544843 = await a54_0x543e1c.get("https://api.waifu.pics/sfw/megumin");
      const _0x41cf5c = _0x544843.data.url;
      const _0x14ea14 = {
        url: _0x41cf5c
      };
      const _0x5502d7 = {
        image: _0x14ea14
      };
      const _0x4a575c = {
        "quoted": _0x18caaf
      };
      _0x26dca9.sendMessage(_0x182fa5, _0x5502d7, _0x4a575c);
    }
  } catch (_0x4a7b17) {
    _0x569b12("Error occurred while retrieving the data. :", _0x4a7b17);
  }
});
const a54_0x2e08a8 = {
  "nomCom": "cosplay",
  "categorie": "Weeb",
  "reaction": '😏',
  "desc": "send 5 cosplay images"
};
a54_0x147e51(a54_0x2e08a8, async (_0x1d783a, _0x431e10, _0x11192e) => {
  const {
    repondre: _0x2906de,
    ms: _0x509e26
  } = _0x11192e;
  try {
    for (let _0x11c8c9 = 0x0; _0x11c8c9 < 0x5; _0x11c8c9++) {
      const _0x4e134e = {
        responseType: "arraybuffer"
      };
      const _0x3c3b89 = await a54_0x543e1c.get("https://fantox-cosplay-api.onrender.com/", _0x4e134e);
      const _0x58a490 = _0x3c3b89.data;
      await a54_0x50e705("./cosplay.jpg", _0x58a490);
      const _0x332d32 = {
        url: "./cosplay.jpg"
      };
      const _0x48f750 = {
        image: _0x332d32
      };
      const _0x567aca = {
        "quoted": _0x509e26
      };
      _0x431e10.sendMessage(_0x1d783a, _0x48f750, _0x567aca);
    }
  } catch (_0x3eda34) {
    _0x2906de("je reçois malheureusement une erreur : " + _0x3eda34);
  }
});
const a54_0xd0500c = {
  "nomCom": "couplepp",
  "categorie": "Weeb",
  "reaction": '💞',
  "desc": "get couple profile picture"
};
a54_0x147e51(a54_0xd0500c, async (_0x1a52c8, _0x36881b, _0x23ce77) => {
  const {
    repondre: _0xd99ac9,
    ms: _0x474c23
  } = _0x23ce77;
  try {
    _0xd99ac9("she/he dont love you :)");
    const _0x3213c4 = await a54_0x543e1c.get("https://smiling-hosiery-bear.cyclic.app/weeb/couplepp");
    const _0x26af2c = {
      url: _0x3213c4.data.male
    };
    const _0x17d376 = {
      "image": _0x26af2c,
      "caption": "For Man"
    };
    const _0x45c752 = {
      "quoted": _0x474c23
    };
    _0x36881b.sendMessage(_0x1a52c8, _0x17d376, _0x45c752);
    const _0x3a95c7 = {
      url: _0x3213c4.data.female
    };
    const _0x2cfd7a = {
      "image": _0x3a95c7,
      "caption": "_For woman_"
    };
    const _0x1923fc = {
      "quoted": _0x474c23
    };
    _0x36881b.sendMessage(_0x1a52c8, _0x2cfd7a, _0x1923fc);
  } catch (_0xf4b217) {
    _0xd99ac9(_0xf4b217);
  }
});