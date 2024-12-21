const {
  zokou
} = require("./../framework/zokou");
const {
  format,
  runtime
} = require('../framework/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');

zokou(
  {
    nomCom: 'ping',
    categorie: 'General',
    reaction: '🚀',
    alias: ['p']
  },

  async (dest, zk, commandOptions) => {
    const {
      ms, arg, repondre
    } = commandOptions;

    // Generate a random ping value (e.g., between 10 and 100 ms)
    const randomPing = Math.floor(Math.random() * 91) + 10; // Random number between 10 and 100

    // Define a list of 50+ reactions to choose from
    const reactions = [
      '⚙️', '🚀', '🔥', '💨', '⚡', '🌟', '⭐', '💥', '🌈', '🧠', '👾', '🎯', '🎮', '👨‍💻', '💡',
      '🎉', '✨', '💎', '💍', '💪', '🎤', '🎬', '🛠️', '🔧', '🔨', '⚖️', '⚒️', '💼', '📈', '🌍', '🌏',
      '🌎', '📡', '🧑‍🚀', '🪐', '🌙', '🌀', '🧑‍🔬', '⚓', '🛸', '🔮', '👑', '🏆', '💎', '🎁', '💬', '📱',
      '💻', '🔌', '🎶', '🖥️', '📊', '🚨', '🧩', '⏳', '🧳', '⛅'
    ];

    // Pick a random reaction from the list
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];

    // Send video with random ping details in the caption
    const msg = await zk.sendMessage(dest, {
      video: {
        url: 'https://files.catbox.moe/c8ke0f.mp4' // Provided video URL
      },
      caption: `*𝑷𝒊𝒏𝒈 𝑻𝒆𝒔𝒕*\n\n*𝑺𝒑𝒆𝒆𝒅: ${randomPing} 𝑴𝑺*\n\n*Hello 👋 Am Hans md am alive 🫵🤫*`
    });

    // React with a random emoji
    await zk.sendMessage(dest, {
      react: {
        text: randomReaction, // Random reaction
        key: msg.key
      }
    });
  }
);
