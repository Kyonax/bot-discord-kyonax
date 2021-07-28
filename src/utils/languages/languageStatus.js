module.exports = {
  StatusLanguageUsers: function (array) {
    array = [
      "Miembros Totales",
      "Usuarios"      
    ];

    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
  StatusLanguageChannels: function (array) {
    array = [      
      "Canales",
      "Canales Totales"
    ];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
  StatusLanguageRoles: function (array) {
    array = ["Roles", "Roles Totales"];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
  StatusLanguageGuilds: function (array) {
    array = [
      "Guilds","Servidores"
    ];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
  StatusLanguageEmojis: function (array) {
    array = [      
      "Emojis",
      "Emotes"
    ];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
  StatusLanguageGuild: function (array) {
    array = ["Guild", "Servidor"];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
  StatusLanguageRole: function (array) {
    array = ["Rol"];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
  StatusLanguageHelp: function (array,prefix) {
    array = [
      "Para poder usar el Bot compra tu acceso en Patreon.",
      "Entra al Servidor de Soporte para una ayuda Personalizada.",
      "Adquiere tus Marcos personalizados en Patreon."     
    ];
    let result = array[Math.floor(Math.random() * array.length)];
    return result;
  },
};
