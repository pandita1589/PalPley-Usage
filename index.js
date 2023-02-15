const aoijs = require("aoi.js");
const aoimongo = require("aoi.mongo");
const AoiClient = new aoijs.AoiClient({
    token: "PRIVADO",
    prefix: "$getGuildvar[prefix]",
    mobilePlatform: true,
    intents: [
      "MessageContent", 
      "Guilds", 
      "GuildMessages", 
      "GuildMembers", 
      "GuildVoiceStates",
      "GuildMessageReactions",
      "GuildMessageTyping",
      "DirectMessages",
      "DirectMessageReactions",
      "DirectMessageTyping",
      "GuildVoiceStates"],
      database: {
        db: aoimongo,
         type: "aoi.mongo",
         path: "PRIVADO"
       },
   events: ["onMessage", "onInteractionCreate", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onJoin", "onLeave", "onVariableDelete", "onVariableCreate", "onMemberUpdate"]
      
   });


 
const http = require("http");
http.createServer((_, res) => res.end("Conectado al server correctamente")).listen(8080);

   const loader = new aoijs.LoadCommands(AoiClient);
   loader.load(AoiClient.cmd,"./commands/")

   loader.setColors({
    walking: ["blink", "dim", "fgWhite"],
    failedWalking: {
      name: ["bright", "fgYellow", "underline"],
   
      text: ["gray", "fgRed"]
    },
    typeError: {
      command: ["bright", "fgYellow"],
      type: ["fgYellow"],
      text: ["bright", "fgRed"]
    },
    failLoad: {
      command: ["bright", "fgMagenta"],
      type: ["fgRed"],
      text: ["bright", "fgRed"],
    },
    loaded: {
      command: ["bright", "fgRed"],
      type: ["bright", "fgWhite"],
      text: ["bright", "fgBlue"]
    },
   
  })
  
  ////////////////////////////////EVENTOS///////////////////////////////////////////

  AoiClient.readyCommand({
    channel: "$getGuildvar[channelReady]",
    code: `
   $author[Activo;https://cdn.discordapp.com/attachments/1072176520476499989/1075094166838710392/status_online.png]
   $description[Para saber de que estoy activo pon \`$getGuildVar[prefix]help\`, si no funcina entrar al servidor de soporte.]
   $addButton[1;Soporte;link;https://discord.gg/TBwPxtUG5p;false]
   $color[Green]
`
})

AoiClient.readyCommand({
  channel: "",
  code: `  $log[
    |------------------------------------------|
    |     Cliente:        |     Creador:       |
    | $userTag[$clientID]   |  $username[$botOwnerID]#$discriminator[$botOwnerID] |
    |------------------------------------------|
    ]` 
})

AoiClient.guildJoinCommand({
  channel: "$getGuildvar[channelUnion]",
  code: `
  $author[1;Nuevo servidor!;$guildIcon]
$description[1;Aca esta ek informe del servidor **[$guildName]($getGuildInvite)**]
$addField[Nombre;\`\`\`fix
$guildName\`\`\`;false]

$addField[Dueño;\`\`\`fix
$userTag[$ownerID] | $ownerID\`\`\`;false]

$addField[ID;\`\`\`fix
$guildID\`\`\`;true]

$addField[Miembros;\`\`\`fix
$membersCount\`\`\`;true]
  $footer[1;Ahora somos $guildCount servidores.]
  $addTimestamp[1]
  $color[1;Green]
`
})

AoiClient.guildLeaveCommand({
  channel: "$getGuildvar[channelRemovido]",
  code: `
  $author[1;Servidor removido!;$guildIcon]
  $description[1;Aca esta ek informe del servidor **[$guildName]($getGuildInvite)**]
  $addField[Nombre;\`\`\`fix
  $guildName\`\`\`;false]
  
  $addField[Dueño;\`\`\`fix
  $userTag[$ownerID] | $ownerID\`\`\`;false]
  
  $addField[ID;\`\`\`fix
  $guildID\`\`\`;true]
  
  $addField[Miembros;\`\`\`fix
  $membersCount\`\`\`;true]
  $footer[1;Ahora somos $guildCount servidores.]
  $addTimestamp[1]
  $color[1;Red]
  `
  })




  ////RANK
  AoiClient.command({
  name: "$alwaysExecute",
  code: `$useChannel[$getGuildvar[rch]]
 $replaceText[$replaceText[$replaceText[$replaceText[$getGuildvar[rmsg];{user.tag};$userTag];{user.ping};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
 $setUserVar[lvl;$sum[$getUserVar[lvl];1]]
 $setUserVar[rexp;$multi[$getUserVar[rexp];2]]
 $onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
 $onlyForGuilds[$guildID;]` 
 })
 
 AoiClient.command({
  name: "$alwaysExecute",
  code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
 $onlyIf[$getGuildvar[rsystem]>=1;]
 $onlyForGuilds[$guildID;]`
 })
 
 AoiClient.awaitedCommand({
  name: "errorrank",
  code: `$getGuildvar[rch;]
 $onlyForGuilds[$guildID;]
 $onlyPerms[administrator;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description:<:_:1049452700737228801> No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$userAvatar[$authorID]}{delete:10s}{timestamp:ms}}]
 
 
 
 $onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
 razon: **$getglobaluservar[rblacklist]**
 Si crees que fue un error comunicate con $usertag[$botOwnerID]]
 `
 })

 ///REQUIRE SISTEMA  
require("./utils/status.js")(AoiClient)
require("./utils/callbacks.js")(AoiClient)
require("./utils/variables.js")(AoiClient)
require("./utils/interacciones.js")(AoiClient)
require("./utils/bienvenida-despedida.js")(AoiClient)