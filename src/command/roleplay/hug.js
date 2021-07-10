//Importación especifica de Metodos - RichEmbed - getMember - Errors - warningcolor Color - Rewards
const { MessageEmbed } = require("discord.js");
const { getMember, initObjectMember } = require("../../utils/misc/functions");
const { warningColor } = require("../../../database/utils/color/color.json");
//Importación Clase de Objetos - Conector Perms
const Perms = require("../../../database/conectors/perm");
let { levelRoleRewards } = require("../../../database/conectors/rewards");
//Importación de el cuerpo de Comandos e importación de Conexión Base de Datos
const BaseCommand = require("../../utils/structure/BaseCommand");
const StateManager = require("../../utils/database/StateManager");
//Mapas
const rolePlayMembers = new Map();
const guildsRoleplay = new Map();
//Exportación de Comando Hug
module.exports = class HugCommand extends BaseCommand {
  constructor() {
    super(
      "hug",
      ["abrazar"],
      "Comando para **Abrazar** a un **Miembro del Servidor**.",
      "hug <user>`",
      "Todos",
      "roleplay"
    );
  }
  async run(bot, message, args) {
    //Eliminacion del mensaje enviado por el usuario al ejecutar el Comando
    message.delete().catch((O_o) => {});
    //Creación de Objetos
    const perm = new Perms();
    //Inicialización de Variable Autor - Validación de Nivel requerido para Ejecutar el Comando
    let autor = message.author;
    let ObjectAuthor = null;
    ObjectAuthor = initObjectMember(
      guildsRoleplay,
      ObjectAuthor,
      message.guild.id,
      autor.id
    );
    let { memberLevel } = ObjectAuthor;
    if (memberLevel < 6) return perm.notRoleLevel(bot, message, 6);
    //Recompensas de Niveles de Rol Usando comandos de Rol
    levelRoleRewards(message, bot);
    //Inicialización de Variables Usuario - Gifs - Selección de Gifs
    const member = getMember(message, args.join(" "));
    let replies = [
      "https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif?itemid=14106856",
      "https://media.tenor.com/images/67013cec62726a4e689d132bc8ed5553/tenor.gif",
      "https://media.tenor.com/images/784a53ff511683adb75a6b617f4c4dc8/tenor.gif",
      "https://media.tenor.com/images/928f8ed6379adc1c599873877b2f5880/tenor.gif",
      "https://media.tenor.com/images/91a0613ab7a54f13cc40ae0dadcbc63b/tenor.gif",
      "https://media.tenor.com/images/036041973fd7cbed1c4c03a3144a7b87/tenor.gif",
      "https://media.tenor.com/images/12ce5c56f8cf49aa0ad21df72eb0eeb1/tenor.gif",
      "https://media.tenor.com/images/7492d9aa1113225da3c8e635e7c711b4/tenor.gif",
      "https://media.tenor.com/images/9fd943a4a242c0765122f5aedf3882c2/tenor.gif"
    ];
    let result = Math.floor(Math.random() * replies.length);
    //Mensaje Embed
    let embed = new MessageEmbed()
      .setColor(warningColor)
      .setDescription(`**<@${autor.id}>** abrazó a **<@${member.id}>** 💗`)
      .setImage(replies[result]);
    message.channel.send(embed);
  }
};

StateManager.on(
  "membersRolePlayFetched",
  (
    membersGuild,
    guildID,
    memberID,
    gameRolePlay,
    rolePlayRank,
    memberXP,
    memberLevel,
    memberAge,
    memberRespect,
    memberWork,
    memberRelation,
    memberBiography
  ) => {
    rolePlayMembers.set(memberID, {
      memberID: memberID,
      guildID: guildID,
      gameRolePlay: gameRolePlay,
      rolePlayRank: rolePlayRank,
      memberXP: memberXP,
      memberLevel: memberLevel,
      memberAge: memberAge,
      memberRespect: memberRespect,
      memberWork: memberWork,
      memberRelation: memberRelation,
      memberBiography: memberBiography,
    });
    guildsRoleplay.set(guildID, {
      Member: membersGuild,
    });
  }
);

StateManager.on(
  "membersRolePlayUpdate",
  (
    membersGuild,
    guildID,
    memberID,
    gameRolePlay,
    rolePlayRank,
    memberXP,
    memberLevel,
    memberAge,
    memberRespect,
    memberWork,
    memberRelation,
    memberBiography
  ) => {
    rolePlayMembers.set(memberID, {
      memberID: memberID,
      guildID: guildID,
      gameRolePlay: gameRolePlay,
      rolePlayRank: rolePlayRank,
      memberXP: memberXP,
      memberLevel: memberLevel,
      memberAge: memberAge,
      memberRespect: memberRespect,
      memberWork: memberWork,
      memberRelation: memberRelation,
      memberBiography: memberBiography,
    });
    guildsRoleplay.set(guildID, {
      Member: membersGuild,
    });
  }
);

StateManager.on(
  "updateRolePlayMemberXP",
  (guildID, memberID, updateXP, newLevel) => {
    let ObjectMember = null;
    ObjectMember = initObjectMember(
      guildsRoleplay,
      ObjectMember,
      guildID,
      memberID
    );
    ObjectMember.memberXP = updateXP;
    ObjectMember.memberLevel = newLevel;
  }
);
