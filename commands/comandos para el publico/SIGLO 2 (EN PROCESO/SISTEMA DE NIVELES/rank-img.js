module.exports = {
 name: "set-rank-img",
 description: "tarjeta de bienvenida",
 category: "Bienvenida",
 aliases: ["setbg"],
 $if: "old",
 code: `
 $if[$getguildVar[english]==1]
 $setGlobalUserVar[rbg;$message[1]]
$title[1;BackGround cambiado]
$description[1;Hey, $username usted acaba de actualizar tu tarjeta rank!
$image[1;$message[1]]]
$color[1;#FFD8F0]
$onlyPerms[administrator;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$userAvatar} {delete:10s} {timestamp:ms}}]
$onlyIf[$message[1]!=;❌ Tienes que enviar el link multimedia de la imagen]
$addtimesTamp[1]

$onlyIf[$stringStartsWith[$message[1];https://]==true;Debe ingresar un enlace de imagen válido para que su backGround de bienvenida sea establecido.]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif

$if[$getguildVar[english]==2]
$setUserVar[rbg;$message[1]]
$title[1;BackGround changed]
$description[1;Hey, $username you just upgraded your card rank!
$image[1;$message[1]]]
$color[1;#FFD8F0]
$onlyPerms[administrator;{newEmbed: {title:▸ ❌┇ YOU CAN'T!} {description::alert: You don't have sufficient permissions to do this} {color:ff0000} {footer:$username:$userAvatar} {delete: 10s} {timestamp:ms}}]
$onlyIf[$message[1]!=;❌ You have to send the multimedia link of the image]
$addtimesTamp[1]

$onlyIf[$stringStartsWith[$message[1];https://]==true;You must enter a valid image link for your welcome backGround to be set.]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Access Denied!}
{description:> Dear $userTag[$authorID] you are on the blacklist.

> Reason: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:What can I do?:What you can do is enter the [support guild](https://discord.gg/aZn5AEDwVy) and discuss with $userTag[$botOwnerID] and find out the reason for the ban:yes} }]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif
 `
 }