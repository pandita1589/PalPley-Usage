module.exports = {
 name: "set-join-img",
 description: "tarjeta de bienvenida",
 category: "Bienvenida",
 aliases: ["setbg"],
 code: `$setguildVar[bg;$message[1]]
 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
$title[1;BackGround cambiado]
$description[1;Hey, $username usted acaba de actualizar la tarjeta de bienvenida a 
$image[1;$message[1]]]
$color[1;#FFD8F0]
$onlyPerms[admin;{newEmbed: {title:▸ ❌┇NO PUEDES!} {description::alert: No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$authorAvatar} {delete:10s} {timestamp:ms}}]
$onlyIf[$message[1]!=;❌ Tienes que enviar el link multimedia de la imagen]
$addtimesTamp[1]

$onlyIf[$stringStartsWith[$message[1];https://]==true;Debe ingresar un enlace de imagen válido para que su backGround de bienvenida sea establecido.]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
 `
 }