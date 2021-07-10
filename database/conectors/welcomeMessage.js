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
  const _SALUTE = [`**Hola!!! ${_MEMBER}** espero disfrutes de la estadía en el servidor, trae papitas `+"``🍟``"+` para compartir con el servidor.`,
  `Uuuh con que deseas **dejar de ser un mortal ${_MEMBER},** llegaste al lugar correcto, explora el servidor para **convertirte en un ser inmortal!!!**`,
  `**Excelenteeee ${_MEMBER}, sabía que te iba a **encontrar por aquí, los seres inmortales siempre vuelven al Olimpo. Deja que tu imaginación despegue!!`,
  `**Uuuy ${_MEMBER}, ahora eres parte de la comunidad más creativa** de todo Discord, no dudes en preguntar lo que necesites por si tienes dudas. Estaremos pendiente de ti ${putEmoji(bot,"764156796281290773")}`,
  `${_MEMBER} Yo te conoooozcoooo!!!! Me hablaron de ti, y me dijeron que eres **alguien con una creatividad EXTRAAAORDINARIA.** Me alegro que hayas llegado a casa ${putEmoji(bot,"764156796281290773")}`,
  `**Hello Hello ${_MEMBER}** Me encuentro comiendo pizzita `+"``🍕``"+` ¿Quieres un poco? - Te comparto si te quedas en el servidor ${putEmoji(bot,"849835213214449695")}`]
  const _RANDOM_SALUTE = _SALUTE[Math.floor(Math.random() * _SALUTE.length)];
  const _SERVER_CHANNEL = member.guild.channels.cache.find((ch) =>
    ch.name.includes("🍕・welcome")
  );
  const _HELLO_CHANNEL = member.guild.channels.cache.find((ch) =>
    ch.name.includes("💬・chat-general")
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
  _HELLO_CHANNEL.send(`${putEmoji(bot,"780487068526313502")} ${_RANDOM_SALUTE}`)
} catch (error) {
  console.log("No se pudo enviar el welcome. "+error)
}
    
};
