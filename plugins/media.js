const {
  Function,
  command,
  qrcode,
  webp2mp4,
  isUrl,
  isPrivate,
  getJson,
  getUrl,
  isIgUrl,
  findMusic,
} = require("../lib/");
const { yta, ytIdRegex, ytv } = require("../lib/yotube");
const { search } = require("yt-search");
const { toAudio } = require("../lib/media");
let gis = require("g-i-s");
const { AddMp3Meta } = require("../lib");

const jimp = require("jimp");
const QRReader = require("qrcode-reader");
const { RMBG_KEY } = require("../config");
let { unlink } = require("fs/promises");
const got = require("got");
const FormData = require("form-data");
const stream = require("stream");
const { promisify } = require("util");
const pipeline = promisify(stream.pipeline);
const fs = require("fs");




Function(
  {
    pattern: "img",
    fromMe: isPrivate,
    desc: "Google Image search",
    type: "downloader",
  },
  async (message, match) => {
    if (!match) return await message.sendMessage(" *Need Query*! *Example: .img messi || .img query,conut*");
    let [query, amount] = match.split(",");
    let result = await gimage(query, amount);
    await message.sendMessage(
      ` *Downloading ${amount || 5} images for ${query}*`
    );
    for (let i of result) {
      await message.sendFromUrl(i);
    }
  }
);

async function gimage(query, amount = 5) {
  let list = [];
  return new Promise((resolve, reject) => {
    gis(query, async (error, result) => {
      for (
        var i = 0;
        i < (result.length < amount ? result.length : amount);
        i++
      ) {
        list.push(result[i].url);
        resolve(list);
      }
    });
  });
}



command(
  {
    pattern: "photo",
    fromMe: isPrivate,
    desc: "Changes sticker to Photo",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message)
      return await message.reply(" *Reply to a sticker*");
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply(" *Not a sticker*");
    let buff = await m.quoted.download();
    return await message.sendMessage(buff, {}, "image");
  }
);



command(
  {
    pattern: "mp4",
    fromMe: isPrivate,
    desc: "Changes sticker to Video",
    type: "converter",
  },
  async (message, match, m) => {
    if (!message.reply_message)
      return await message.reply(" *Reply to a sticker*");
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply(" *Not a sticker*");
    let buff = await m.quoted.download();
    let buffer = await webp2mp4(buff);
    return await message.sendMessage(buffer, {}, "video");
  }
);



command(
  {
    pattern: "song",
    fromMe: isPrivate,
    desc: "Downloads Song",
    type: "downloader",
  },
  async (message, match) => {
    if (!(match || message.reply_message.text))
      return await message.reply(" *Enter Song Name*");
    match = match || message.reply_message.text;
    if (ytIdRegex.test(match)) {
      yta(match.trim()).then(async ({ dl_link, title, thumb }) => {
        message.reply("1 " + dl_link)
      let buff = await AddMp3Meta(dl_link, thumb, {
          title,
        });
        message.sendMessage(
          buff,
          { mimetype: "audio/mpeg", quoted: message.data },
          "audio"
        );
      });
    }
    search(match + "song").then(async ({ videos }) => {
      await message.reply(` *Downloading ${videos[0].title}*`);
      let a = videos[0].url
    //  let b = a.url
      await message.reply(`${a}`)
      yta(videos[0].url).then(async ({ dl_link, title, thumb }) => {
   //     message.reply()
        let buff = await AddMp3Meta(dl_link, thumb, {
          title,
          artist: [videos[0].author],
        });
        message.sendMessage(
          buff,
          { mimetype: "audio/mpeg", quoted: message.data },
          "audio"
        );
      });
    });
  }
);



command(
  {
    pattern: "video ?(.*)",
    fromMe: isPrivate,
    desc: "Downloads video",
    type: "downloader",
  },
  async (message, match) => {
  //  if (!match || !message.reply_message.text)
   //   return await message.reply(" *Enter Video Name*");
    match = match || message.reply_message.text;
    if (ytIdRegex.test(match)) {
      ytv(match.trim()).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title });
      });
    }
    search(match).then(async ({ videos }) => {
      await message.reply(` *Downloading ${videos[0].title}*`);
      ytv(videos[0].url).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title, quoted: message });
      });
    });
  }
);





command(
  {
    pattern: "mp3",
    fromMe: isPrivate,
    desc: "converts video/voice to mp3",
    type: "downloader",
  },
  async (message, match, m) => {
    //if(message.reply_message.text) return await message.reply(' *Enter Video Name*')
    let buff = await m.quoted.download();
    buff = await toAudio(buff, "mp3");
    return await message.sendMessage(buff, { mimetype: "audio/mpeg" }, "audio");
  }
);


command(
  {
    pattern: "fetch",
    fromMe: isPrivate,
    desc: "Downloads from a direct link",
    type: "downloader",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match)
      return message.reply(
        " *Send a direct media link*\n_*link;caption(optional)*_"
      );
    try {
      let url = match.split(";")[0];
      let options = {};
      options.caption = match.split(";")[1];

      if (isUrl(url)) {
        message.sendFromUrl(url, options);
      } else {
        message.reply(" *Not a URL*");
      }
    } catch (e) {
      console.log(e);
      message.reply(" *No content found*");
    }
  }
);


command(
  {
    pattern: "yts",
    fromMe: isPrivate,
    desc: "Search Youtube",
    type: "Search",
  },
  async (message, match) => {
    if (!match) return await message.reply("*Enter a search term*");
    let rows = [];
    search(match).then(async ({ videos }) => {
      videos.forEach((result) => {
        rows.push({
          title: result.title,
          description: `\nDuration : ${result.duration.toString()}\nAuthor : ${
            result.author
          }\nPublished : ${result.ago}\nDescription : ${
            result.description
          }\nURL : ${result.url}`,
          rowId: ` `,
        });
      });
      await message.client.sendMessage(message.jid, {
        text: "Youtube Search for " + match,
        buttonText: "View Results",
        sections: [
          {
            title: "Youtube Search",
            rows: rows,
          },
        ],
      });
    });
  }
);


command(
  {
    pattern: "ytv",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.reply(" *Enter a URL*");

    if (!ytIdRegex.test(match)) return await message.reply("_Invalid Url_");
    ytv(match).then(async ({ dl_link, title }) => {
      await message.reply(` *Downloading ${title}*`);
      return await message.sendFromUrl(dl_link, {
        filename: title,
        quoted: message,
      });
    });
  }
);



command(
  {
    pattern: "yta",
    fromMe: isPrivate,
    dontAddCommandList: true,
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) return await message.reply(" *Enter a URL*");
    if (!ytIdRegex.test(match)) return await message.reply("_Invalid Url_");
    yta(match).then(async ({ dl_link, title, thumb }) => {
      await message.reply(` *Downloading ${title}*`);
      let buff = await AddMp3Meta(dl_link, thumb, {
        title,
      });
      return await message.sendMessage(
        buff,
        { mimetype: "audio/mpeg", quoted: message.data },
        "audio"
      );
    });
  }
);
