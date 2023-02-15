module.exports = {
name: "set-join-title",
 description: "Mensaje de Bienvenida",
 category: "Bienvenida",
 aliases: ["wcm","swm"],
 code: `
 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]

$title[1;¡Titulo de bienvenida establecido!]
$description[1;Nuevo titulo de bienvenida:
\`\`\`$message\`\`\`]
$color[$setguildVar[WelcomeTitle;$message]]
$addTimestamp[1]
$setguildVar[WelcomeTitle;$message]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
 `
 }