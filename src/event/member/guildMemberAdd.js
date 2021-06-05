//Importación de cuerpo de Eventos e importación de Conexión Base de Datos
const {welcomeMessage} = require("../../../database/conectors/welcomeMessage"); 
const BaseEvent = require("../../utils/structure/BaseEvent");

//Exportación del Evento guildMemberAdd
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super("guildMemberAdd");
  }
  async run(bot, member) {    
    console.log(`Ingreso un nuevo usuario`)
    welcomeMessage(member,bot);
  }
};
