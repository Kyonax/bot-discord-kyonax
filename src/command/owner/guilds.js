//Importación Clase de Objetos - Conector Error - Perms
const { putEmoji } = require("../../utils/misc/functions");
//Importación Clase de Objetos - Conector Error - Perms
const Error = require("../../../database/conectors/error");
const Perms = require("../../../database/conectors/perm");
//Importación de el cuerpo de Comandos e importación de Conexión Base de Datos
const BaseCommand = require("../../utils/structure/BaseCommand");
//Normal Imports
module.exports = class GuildsCommand extends BaseCommand {
  constructor() {
    super(
      "guilds",
      ["guilds", "servers"],
      "Comando para **saber en cuantos ** servidores se encuentra el Bot.",
      "guilds`",
      "***Owner***",
      "owner"
    );
  }

  async run(bot, message, args) {
    //Eliminación del mensaje con Comandos
    message.delete().catch((O_o) => {});
    //Creación de Objetos
    const guilds = bot.guilds.cache.size;
    const perm = new Perms();
    //Validación Permisos
    if (message.member.id != message.guild.ownerID)
      return perm.ownerPerms(bot, message);
    message.channel.send(
      `${putEmoji(
        bot,
        "849656844783845377"
      )} **Actualmente el Bot se encuentra alojado en ${guilds} servidores**`
    );
  }
};
