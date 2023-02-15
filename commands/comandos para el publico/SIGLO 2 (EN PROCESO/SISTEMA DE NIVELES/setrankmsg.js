module.exports = {
  name: "set-rank-msg", 
  code: `$description[1;Se le ha configurado el mensaje para:
**$message**]
$color[1;#FFD8F0]
$setguildVar[rmsg;$message]
$createFile[
  El mensaje actual es:
\`$getguildVar[rmsg]\`
  
  {newEmbed: 
  {title: 
  Variables
  }
  {description:
  {user.tag} = $userTag \ {user.ping} = <@$authorID> \ {level} = 1 \ {exp} = 25
  }};variables.txt]

$onlyPerms[administrator;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$userAvatar} {delete:10s} {timestamp:ms}}]

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