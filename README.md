# Kyonax Bot

<p align="center">
  <img src="https://i.imgur.com/EJSWafI.png">
    <br>
    <a href="https://github.com/Kyonax/bot-discord-kyonax"style="text-decoration: none">
    <img src="https://img.shields.io/github/languages/code-size/Kyonax/bot-discord-synchronous">
    </a>
    <a href="https://github.com/Kyonax/bot-discord-kyonax"style="text-decoration: none">
    <img src="https://img.shields.io/github/languages/top/Kyonax/bot-discord-synchronous">
    </a>    
    <a href="https://github.com/Kyonax/bot-discord-kyonax"style="text-decoration: none">
    <img src="https://img.shields.io/github/contributors/Kyonax/bot-discord-synchronous">
    </a>
    <a href="https://github.com/Kyonax/bot-discord-kyonax"style="text-decoration: none">
    <img src="https://img.shields.io/github/last-commit/Kyonax/bot-discord-synchronous">
    </a>
    <br>
    <a href="https://kyonax.link/twitch"style="text-decoration: none">
    <img src="https://img.shields.io/twitch/status/synk_kyonax">
    </a>
    <a href="https://kyonax.link/discord"style="text-decoration: none">
    <img src="https://img.shields.io/discord/623715606184722442?color=blueviolet&label=Server&logo=discord">
    </a>
    <a href="https://kyonax.link/facebook"style="text-decoration: none">
    <img src="https://img.shields.io/badge/MrKyonax-facebook-blue">
    </a>
    <a href="https://kyonax.link/bot_kyonax"style="text-decoration: none">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg">
    </a>        
     <a href="https://twitter.com/intent/follow?screen_name=kyonax_on"style="text-decoration: none">
    <img src="https://img.shields.io/twitter/follow/kyonax_on?style=social">
    </a>
    <a href="https://github.com/Kyonax?tab=followers"style="text-decoration: none">
    <img src="https://img.shields.io/github/followers/Kyonax?style=social">
    </a>    
</p>

---

**Kyonax Bot** is an Open-Source Discord bot developed with **NodeJS** using **_discord.js v12.2.0_, _graphicsMagick v1.23.1_ and _mysql2 v2.1.0_** granting services on administration, entertainment, information, level and bank systems for the _[Mundo Kyonax ! Discord Server](https://kyonax.link/discord)_. Being at the same time one of the most complete automata **Discord bot** and graphically attractive, all this features being open source. Learn and get inspired watching how **Kyonax** create this bot using **100% JavaScript code**.

On the next updates You will be able to read all the Documentation on English and will be more specific too.
_(You can read, learn and share the code however you can´t appropiatte it. If you are going to share the code or modify please give me Credits, more information in [**GNU General Public License v3.0**](LICENSE)_

<p align="center">
  <img src="https://github.com/Kyonax/bot-discord-kyonax/blob/master/database/multimedia/images/demo/gifs/Gif_Record_Discord_Server.gif">
</p>

## Bot Running

**Kyonax Bot** is running and working on a _**beta version v1.0.0**_ meanning that is still under develop and some or a lot of things are going to change on future updates, the Bot is based on the _[Synchronous Bot](https://github.com/Kyonax/bot-discord-kyonax)_ structure but more complex and more line of codes.

## Discord.js Events used

As you know **Synchronous bot** use **NodeJs** and this JavaScript runtime environment give you this tool to implement Discord Functions and Events on your app **[Discord.js](https://discord.js.org/#/)** and now I will show you which Events _Synchronous Bot_ use:

###### Guild Events

- [**guildCreate**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/event/guild/guildCreate.js)

###### Member Events

- [**guildMemberAdd**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/event/member/guildMemberAdd.js)
- [**guildMemberRemove**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/event/member/guildMemberRemove.js)

###### Message Events

- [**message**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/event/messages/message.js)

###### Ejecution Events

- [**ready**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/event/misc/ready.js)

###### Reaction Events

- [**messageReactionAdd**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/event/reaction/messageReactionAdd.js)
- [**messageReactionRemove**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/event/reaction/messageReactionRemove.js)

###### Utils for the Events

- [**Attachment**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/utils/misc/attachment.js)
- [**Reaction**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/utils/misc/reaction.js)
- [**Welcome**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/src/utils/misc/welcome.js)

## Logic

New logic **Rewards, Bank and XP** Systems:

- [**LogicBank**](https://github.com/Kyonax/bot-discord-kyonax/tree/master/src/utils/logic/logicBank.js)
- [**LogicMember**](https://github.com/Kyonax/bot-discord-kyonax/tree/master/src/utils/logic/logicMember.js)
- [**Rewards**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/database/conectors/rewards.js)
- [**RoleRewards**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/database/conectors/roleRewards.js)
- [**WelcomeMessages**](https://github.com/Kyonax/bot-discord-kyonax/blob/master/database/conectors/welcomeMessage.js)

## Commands

Automata and interactive, **Kyonax Bot** has a lot of Commands that you can use tipyng the command on a **[Kyonax Discord Server](https://kyonax.link/discord)** Channel Text, How can you do that?, well you need to start your text message with a **prefix** the default **Server Prefix** is **_!_**, next to this you have to add the name of the command, like this **_!help_** _(This command gives you all the bot help information that you need)_. Now check out all the Commands that **Kyonax bot** has:

| Category          |                                   Commands                                    |         Perms |
| ----------------- | :---------------------------------------------------------------------------: | ------------: |
| **Guild**         |              `suggestion`-`help`-`ping`-`whois`-`uptime`- `bin`               |           All |
| **Magik**         |                              `buenardo`-`magik`                               |           All |
| **Member**        |                       `bank`-`inventory`-`love`-`penis`                       |           All |
| **Mod**           |      `addrole`-`ban`-`bondage`-`clear`-`kick`-`poll`-`removerole`-`warn`      | Admins - Mods |
| **Owner**         |                   `prefix`-`news`-`putembeds`-`set` - `say`                   |         Owner |
| **RolePlay**      | `age`-`biography`-`dni`-`do`-`hug`-`kiss`-`me`-`ooc`-`pat`-`rep`-`try`-`work` |           All |
| **Miscellaneous** |                              `8ball`-`cat`-`dog`                              |           All |
| **Games**         |                           `fortnite`-`steam`-`apex`                           |           All |
| **Store**         |                                 `pay`-`store`                                 |           All |

## Support

I love code and Discord and I like to do them Open Source for learn, teach and same other stuff, if You want to **Support** my work you can check out the links below. Maybe I can do tutorials in the future with your help. Thanks for check my work, see you.

- [**FaceBook**](https://kyonax.link/facebook)
- [**Twitter**](https://kyonax.link/twitter)
- [**Twitch**](https://kyonax.link/twitch)
- [**YouTube**](https://kyonax.link/youtube)
- [**Donations**](https://kyonax.link/bot_kyonax)

---
