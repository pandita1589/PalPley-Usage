module.exports = {
name: "set-leave-msg",
 description: "Mensaje de dispedida",
 category: "Despedida",
 aliases: ["slmsg"],
 code: `
 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
$onlyIf[$message!=;:x: Ninguno mensaje proporcionado, 
\`\`\`también puedes usar estas variables:

{user} = $username
{user.tag} = $userTag
{user.ping} = <@$authorID>
{guild} = $guildName\`\`\`]

$title[1;¡Mensaje de despedida establecido!]
$description[1;Nuevo mensaje de despedida:
$message]
$footer[1;Ahora configura la tarjeta de despedida usando $getguildvar[prefix]setleavebackGround]
$addTimestamp[1]
$setguildVar[LeaveMessage;$message]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]

 `
 }