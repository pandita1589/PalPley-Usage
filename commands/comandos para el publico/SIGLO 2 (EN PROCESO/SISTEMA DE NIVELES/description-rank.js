module.exports = {
  name: "description-rank", 
  code: `$description[1;Se le ha configurado el mensaje para:
\`$message\`]
$color[1;$getUserVar[colorMuichiro]]
$setguildVar[descrank;$message]
$onlyIf[$message!=;
El mensaje actual es:
\`\`\`fix
$getguildVar[descrank]
\`\`\`]
$onlyBotPerms[mentioneveryone;managemessages;{newEmbed: {description:Necesito permiso
 \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}}]

$cooldown[5s;Porfavor tienes que esperar **%time%**]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
  `
 }