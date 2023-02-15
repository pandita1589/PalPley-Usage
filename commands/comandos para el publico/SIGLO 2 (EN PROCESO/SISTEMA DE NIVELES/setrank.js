module.exports = {
  name: "set-rank-channel", 
  $if: "old",
  code: `
  $if[$getguildVar[english]==1]
$description[1;El sistema de niveles se ha configurado para
 <#$mentionedChannels[1;yes]>]
$color[1;#FFD8F0]
$setguildVar[rch;$mentionedChannels[1;yes]]
$setguildVar[rsystem;1]

$onlyPerms[administrator;{newEmbed:{title:▸ ❌┇NO PUEDES!}{description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$userAvatar}{delete:10s}{timestamp:ms}}]

$cooldown[5s;PorFavor espara **%time%**]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif

$if[$getguildVar[english]==2]

$endif

`
 }
