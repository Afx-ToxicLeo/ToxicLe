/* Copyright (C) 2022 X-Electra.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

X-asena X-Electra
*/

const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || "ZUJBSGh_XASENA_kNGI=",
  LANG: process.env.LANG || "EN",
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[,]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "𝚃𝚘𝚡𝚒𝚌 𝙻𝚎𝚘",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "Hi @user Welcome to @gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "ToxicLeo",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  SUDO: process.env.SUDO || "919497206865,917306109518",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "ToxicLeo",
  BOT_NAME: process.env.BOT_NAME || "𝚃𝚘𝚡𝚒𝚡𝙻𝚎𝚘-𝙼𝙳",
  WORK_TYPE: process.env.WORK_TYPE || "public",
};