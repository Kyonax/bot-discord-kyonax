//Importación de Status en diferentes Idiomas
const {
  StatusLanguageChannels,
  StatusLanguageEmojis,
  StatusLanguageGuild,
  StatusLanguageGuilds,
  StatusLanguageHelp,
  StatusLanguageRole,
  StatusLanguageRoles,
  StatusLanguageUsers,
} = require("../../utils/languages/languageStatus");
const {putEmoji} = require("../../utils/misc/functions")
const {synchronous} = require("../../../database/utils/emojis/emojis.json")
//Importación de cuerpo de Eventos e importación de Conexión Base de Datos
const BaseEvent = require("../../utils/structure/BaseEvent");
const StateManager = require("../../utils/database/StateManager");
//Mapas
const guildCommandPrefix = new Map();
const guildBans = new Map();
const guildMembers = new Map();
const guildMembersBank = new Map();
const guilds = new Map();
const bankGuilds = new Map();
const rolePlayMembers = new Map();
const guildsRoleplay = new Map();
//Exportación de Evento ready
//NPM Twitter Stream
require("dotenv").config();
const Twit = require("twit");
//Object
var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCES_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});
//Forex Twitter
var kyonax_twitter_id = process.env.TWITTER_KYONAX_ID;
module.exports = class ReadyEvent extends (
  BaseEvent
) {
  //Constructor del Objeto
  constructor() {
    super("ready");
    //Conexión con la Base de Datos por medio de StateManager
    this.connection = StateManager.connection;
  }
  async run(bot) {    
    //Twitter API
    var stream_twitter = T.stream("statuses/filter", {
      follow: [kyonax_twitter_id],
    });

    stream_twitter.on("tweet", function (tweet) {
      if (tweet.user.id == process.env.TWITTER_KYONAX_ID) {
        var url_kyo_tweet =
          "https://twitter.com/" +
          tweet.user.screen_name +
          "/status/" +
          tweet.id_str;
        try {
          let channel = bot.channels
            .fetch(process.env.DISCORD_CHANNEL_ANNOUNCEMENTS_ID)
            .then((channel) => {
              channel.send(`${putEmoji(bot,"849623550164074516")} ¡Nuevo tweet de **kyonax_on** ¿Qué opinas <@&767827039704318042>? ${url_kyo_tweet}`);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      }
    });

    //Mensaje por Consola Bot Iniciado
    console.log(`${bot.user.tag} iniciado`);   
    //Variables
    const numberOfGuilds = bot.guilds.cache.size;
    let numberOfMembers = 0;
    let numberOfChannels = 0;
    let numberOfRoles = 0;
    let numberOfEmojis = 0;
    let nameOfGuilds = [];
    let nameOfRoles = [];
    //Auxiliares
    let auxNumberOfMembers = 0;
    let auxNumberOfChannels = 0;
    let auxNumberOfRoles = 0;
    let auxNumberOfEmojis = 0;
    //Selección y conexión Con DATOS de la Guild Correspondiente
    bot.guilds.cache.forEach((guild) => {
      //Numero de Miembros Totales
      auxNumberOfMembers = numberOfMembers;
      numberOfMembers = auxNumberOfMembers + guild.members.cache.size;
      //Numero de Canales Totales
      auxNumberOfChannels = numberOfChannels;
      numberOfChannels = auxNumberOfChannels + guild.channels.cache.size;
      //Numero de Roles Totales
      auxNumberOfRoles = numberOfRoles;
      numberOfRoles = auxNumberOfRoles + guild.roles.cache.size;
      //Numero de Emojis
      auxNumberOfEmojis = numberOfEmojis;
      numberOfEmojis = auxNumberOfEmojis + guild.emojis.cache.size;
      //Nombre de las Guild
      nameOfGuilds.push(guild.name);
      //Nombre de todos los Roles
      guild.roles.cache.forEach((rol) => {
        nameOfRoles.push(rol.name);
      });
      //Conexión e Implementación del Respectivo Prefijo
      this.connection
        .query(
          `SELECT cmdPrefix FROM GuildConfigurable WHERE guildID = '${guild.id}'`
        )
        .then((result) => {
          const guildID = guild.id;
          try{
            const guildPrefix = result[0][0].cmdPrefix;
            guildCommandPrefix.set(guildID, guildPrefix);
            StateManager.emit("prefixFetched", guildID, guildPrefix);
          }catch (err){
            try {
              this.connection.query(
                `INSERT INTO Guild VALUES('${guild.id}','${guild.ownerID}')`
              );
              this.connection.query(
                `INSERT INTO GuildConfigurable (guildID) VALUES ('${guild.id}')`
              );
              console.log(
                `\nSe ha registrado una nueva Guild de Discord en la Base de Datos\nID:${guild.id} OwnerID:${guild.ownerID}`
              );
            } catch (err) {
              console.log(err);
            }
          }
          
        })
        .catch((err) => console.log(err));
      //Creación de los párametros de los Usuarios por Mapas
      let membersGuild = [];
      try {
        this.connection
          .query(`SELECT * FROM GuildMembers WHERE guildID = '${guild.id}'`)
          .then((result) => {
            const member = result[0];
            member.forEach((memb) => {
              guildMembers.set(memb.memberID, {
                memberID: memb.memberID,
                guildID: memb.guildID,
                memberLanguage: memb.memberLanguage,
                adminMember: memb.adminMember,
                inmortalMember: memb.inmortalMember,
                moderatorMember: memb.moderatorMember,
                serverRank: memb.serverRank,
                memberXP: memb.memberXP,
                memberLevel: memb.memberLevel,
                memberBoost: memb.memberBoost,
                boostMemberTime: memb.boostMemberTime,
                warnings: memb.warnings,
              });
              if (guildMembers.get(memb.memberID).guildID === guild.id) {
                membersGuild.push(guildMembers.get(memb.memberID));
              }
              guilds.set(memb.guildID, {
                Member: membersGuild,
              });
              StateManager.emit(
                "membersFetched",
                membersGuild,
                memb.guildID,
                memb.memberID,
                memb.memberLanguage,
                memb.adminMember,
                memb.inmortalMember,
                memb.moderatorMember,
                memb.serverRank,
                memb.memberXP,
                memb.memberLevel,
                memb.memberBoost,
                memb.boostMemberTime,
                memb.warnings
              );
            });
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
      //Creación de los párametros de los Usuarios por Mapas
      let membersRolePlayGuild = [];
      try {
        this.connection
          .query(`SELECT * FROM RolePlayMembers WHERE guildID = '${guild.id}'`)
          .then((result) => {
            const member = result[0];
            member.forEach((memb) => {
              rolePlayMembers.set(memb.memberID, {
                memberID: memb.memberID,
                guildID: memb.guildID,
                gameRolePlay: memb.gameRolePLay,
                rolePlayRank: memb.rolePlayRank,
                memberXP: memb.memberXP,
                memberLevel: memb.memberLevel,
                memberAge: memb.memberAge,
                memberRespect: memb.memberRespect,
                memberWork: memb.memberWork,
                memberRelation: memb.memberRelation,
                memberBiography: memb.memberBiography,
              });
              if (rolePlayMembers.get(memb.memberID).guildID === guild.id) {
                membersRolePlayGuild.push(rolePlayMembers.get(memb.memberID));
              }
              guildsRoleplay.set(memb.guildID, {
                Member: rolePlayMembers,
              });
              StateManager.emit(
                "membersRolePlayFetched",
                membersRolePlayGuild,
                memb.guildID,
                memb.memberID,
                memb.gameRolePlay,
                memb.rolePlayRank,
                memb.memberXP,
                memb.memberLevel,
                memb.memberAge,
                memb.memberRespect,
                memb.memberWork,
                memb.memberRelation,
                memb.memberBiography
              );
            });
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
      //Creación de banco de Usuarios por Mapas
      let membersBank = [];
      try {
        this.connection
          .query(`SELECT * FROM GuildBank WHERE guildID = '${guild.id}'`)
          .then((result) => {
            const member = result[0];
            member.forEach((memb) => {
              guildMembersBank.set(memb.memberID, {
                memberID: memb.memberID,
                guildID: memb.guildID,
                memberCoins: memb.memberCoins,
              });
              if (guildMembersBank.get(memb.memberID).guildID === guild.id) {
                membersBank.push(guildMembersBank.get(memb.memberID));
              }
              bankGuilds.set(memb.guildID, {
                Member: membersBank,
              });
              StateManager.emit(
                "bankMembersFetched",
                membersBank,
                memb.guildID,
                memb.memberID,
                memb.memberCoins
              );
            });
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
      try {
        this.connection
          .query(`SELECT * FROM GuildBans WHERE guildID = '${guild.id}'`)
          .then((result) => {
            const member = result[0];
            member.forEach((mem) => {
              guildBans.set(mem.memberID, { guildID: mem.guildID });
              StateManager.emit("guildBansFetched", mem.memberID, mem.guildID);
            });
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    });
    //Status Bot
    let translate = [];
    let statuses = [
      `${StatusLanguageHelp(translate)}`,
      `${numberOfMembers} ${StatusLanguageUsers(translate)}!!!`,
      `${numberOfChannels} ${StatusLanguageChannels(translate)}!!!`,
      `${numberOfRoles} ${StatusLanguageRoles(translate)}!!!`,
      `${
        nameOfGuilds[Math.floor(Math.random() * numberOfGuilds)]
      } ${StatusLanguageGuild(translate)}`,
      `${numberOfGuilds} ${StatusLanguageGuilds(translate)}!!!`,
      `${numberOfEmojis} ${StatusLanguageEmojis(translate)}!!!`,
      `${
        nameOfRoles[Math.floor(Math.random() * numberOfRoles)]
      } ${StatusLanguageRole(translate)}`,
      `Dioses`,
      `s!help | Synchronous`,
    ];
    let types = ["WATCHING", "PLAYING", "LISTENING"];
    setInterval(function () {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      let type = types[Math.floor(Math.random() * types.length)];
      bot.user.setActivity(status, {
        type: `${type}`,
      });
    }, 12000);
  }
};
