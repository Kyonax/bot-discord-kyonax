const { MessageEmbed } = require("discord.js");
const {
  getMember,
  putEmoji,
  delay,
  initObjectMember,
} = require("../../src/utils/misc/functions");

const { stripIndents } = require("common-tags");

const Error = require("../conectors/error");

module.exports.welcomeMessage = async (member, bot) => {
  const _GUILD_ID = member.guild.id;
  const _MEMBER_ID = member.user.id;
  const _MEMBER = member;  
  const _SERVER_CHANNEL = member.guild.channels.cache.find((ch) =>
    ch.name.includes("🍕・welcome")
  );
  const _SERVER_CHANNEL_ = member.guild.channels.cache.find((ch) =>
    ch.name.includes("🍕・bienvenida")
  );

  let _embed = new MessageEmbed()
    .setColor("#ff3e6f")
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(
        `**╭・—————— ﾘ 🍟 —- Bienvenida/Bienvenido al Servidor —-**
┊ **El servidor y esta comunidad tienen reglas que debes cumplir,**
┊ para ello te aconsejo que leas y cumplas cada regla que
┊ aparecen en el canal <#763475354919895040>・${putEmoji(bot, "764154680582340618")}
┊ 
┊ Si quieres saber más acerca del servidor y como obtener
┊ los **Roles Premium** dirigete al canal <#763787729695014912>・${putEmoji(bot, "764154680582340618")}
┊
┊ **Verifícate en el canal <#849365435958951967>** para ver los
┊ demás canales y obtener el rol **<@&849139777521057862>**
┊
┊ **Cuando te hayas verificado dirígete al canal** <#849366312656044083> 
┊ <#849366377641934898> escoge algunos roles
┊ **y luego presentate en el canal <#849366345455763536>**
┊ para que las demás personas te conozcan・${putEmoji(bot, "764154680582340618")}
╰
    `);
try {
  _SERVER_CHANNEL_.send(`**Hey ${_MEMBER} lee esto antes de aventurarte por el servidor!! 🍟 | Mundo Kyonax**`,_embed);
} catch (error) {
  console.log("No se pudo enviar el welcome. "+error)
}
    
};
