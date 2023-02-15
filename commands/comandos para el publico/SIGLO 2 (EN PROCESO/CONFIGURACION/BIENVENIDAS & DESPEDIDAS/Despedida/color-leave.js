module.exports = {
name: "set-leave-color",
 description: "Mensaje de Bienvenida",
 category: "Bienvenida",
 aliases: ["wcm","swm"],
 code: `
 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]

$title[1;¡Color de despedida establecido!]
$description[1;Nuevo color de despedida:
\`\`\`$message\`\`\`]
$color[$message[1]]
$addTimestamp[1]
$setguildVar[LeaveColor;$message]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
 `
 }