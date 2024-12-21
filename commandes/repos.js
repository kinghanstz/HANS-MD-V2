const axios = require("axios");
const moment = require("moment-timezone");
const {
  zokou
} = require(__dirname + "/../framework/zokou");
let dynamicForks = 5000;

const fetchGitHubRepoDetails = async () => {
  try {
    const response = await axios.get("https://api.github.com/repos/Mrhannstz/HANS-MD");
    const {
      name: repoName,
      stargazers_count: stars,
      watchers_count: watchers,
      open_issues_count: issues,
      forks_count: forks,
      owner: repoOwner
    } = response.data;
    dynamicForks += forks;
    return {
      name: repoName,
      stars: stars,
      watchers: watchers,
      issues: issues,
      forks: dynamicForks,
      owner: repoOwner.login,
      url: response.data.html_url
    };
  } catch (error) {
    console.error("Error fetching GitHub repository details:", error);
    return null;
  }
};

const commands = ["repo"];
commands.forEach(command => {
  zokou({
    commandName: command,
    category: "GitHub"
  }, async (message, chat, options) => {
    let {
      respond: reply
    } = options;
    const repoDetails = await fetchGitHubRepoDetails();
    if (!repoDetails) {
      reply("❌ Failed to fetch GitHub repository information.");
      return;
    }
    const {
      name: repoName,
      stars,
      watchers,
      issues,
      forks,
      owner,
      url
    } = repoDetails;
    const timestamp = moment().tz("Africa/Dodoma").format("DD/MM/YYYY HH:mm:ss");
    const messageContent = `
🎯 *${repoName} REPO INFO* 💥

📌 *Name:* ${repoName}
🌟 *Stars:* ${stars.toLocaleString()}
🍽️ *Forks:* ${forks.toLocaleString()}
👓 *Watchers:* ${watchers.toLocaleString()}
⚠️ *Open Issues:* ${issues.toLocaleString()}
🛠️ *Owner:* ${owner}

⏱️ *Fetched on:* ${timestamp}

🔗 *Repo Link:* ${url}

🚀 Created By *HANSTZ*

Enjoy and stay tuned for updates!`;

    try {
      await chat.sendMessage(message, {
        text: messageContent,
        contextInfo: {
          externalAdReply: {
            title: "🚀 Stay Updated with HANSTZ",
            body: "Tap here for the latest updates!",
            thumbnailUrl: "https://files.catbox.moe/q5kgz7.webp",
            mediaType: 1,
            renderLargerThumbnail: true,
            mediaUrl: "https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31",
            sourceUrl: "https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31"
          }
        }
      });
    } catch (sendError) {
      console.error("❌ Error sending GitHub info:", sendError);
      reply("❌ Error sending GitHub info: " + sendError.message);
    }
  });
});
