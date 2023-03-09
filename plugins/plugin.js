const { command, getUrl } = require("../lib");
const got = require("got");
const fs = require("fs");
const { PluginDB, installPlugin } = require("../lib/database/plugins");


command(
  {
    pattern: "install ?(.*)",
    fromMe: true,
    desc: " Install External Plugins ",
    type:'user'
  },
  async (message, match) => {
    if (!match) return await message.sendMessage(" *Send a plugin url*");
    for (let Url of getUrl(match)) {
      try {
        var url = new URL(Url);
      } catch {
        return await message.sendMessage(" *Invalid Url* ");
      }

      if (url.host === "gist.github.com") {
        url.host = "gist.githubusercontent.com";
        url = url.toString() + "/raw";
      } else {
        url = url.toString();
      }
      var plugin_name;
      var response = await got(url);
      if (response.statusCode == 200) {
        var commands = response.body
          .match(/(?<=pattern:)(.*)(?=\?(.*))/g)
          .map((a) => a.trim().replace(/"|'|`/, ""));
        plugin_name =
          commands[0] ||
          plugin_name[1] ||
          "__" + Math.random().toString(36).substring(8);

        fs.writeFileSync("./plugins/" + plugin_name + ".js", response.body);
        try {
          require("./" + plugin_name);
        } catch (e) {
          fs.unlinkSync("/ToxicLeo/plugins/" + plugin_name + ".js");
          return await message.sendMessage(" *Invalid Plugin* \n ```" + e + "```");
        }

        await installPlugin(url, plugin_name);

        await message.sendMessage(
          ` *New Plugin Installed* : ${commands.join(",")}_`
        );
      }
    }
  }
);


command(
  { pattern: "plugin", fromMe: true, desc: " *Plugin List* " ,type:'user'},
  async (message, match) => {
    var mesaj = "";
    var plugins = await PluginDB.findAll();
    if (plugins.length < 1) {
      return await message.sendMessage(" *No External Plugins Installed* ");
    } else {
      plugins.map((plugin) => {
        mesaj +=
          "```" +
          plugin.dataValues.name +
          "```: " +
          plugin.dataValues.url +
          "\n";
      });
      return await message.sendMessage(mesaj);
    }
  }
);



command(
  {
    pattern: "remove(?: |$)(.*)",
    fromMe: true,
    desc: " *Remove External Plugins* ",
    type:'user'
  },
  async (message, match) => {
    if (!match) return await message.sendMessage(" *Need a Plugin Name* ");

    var plugin = await PluginDB.findAll({ where: { name: match } });

    if (plugin.length < 1) {
      return await message.sendMessage(" *Plugin Not Found* ");
    } else {
      await plugin[0].destroy();
      delete require.cache[require.resolve("./" + match + ".js")];
      fs.unlinkSync("./plugins/" + match + ".js");
      await message.sendMessage(` *plugin ${match} deleted*`);
    }
  }
);
