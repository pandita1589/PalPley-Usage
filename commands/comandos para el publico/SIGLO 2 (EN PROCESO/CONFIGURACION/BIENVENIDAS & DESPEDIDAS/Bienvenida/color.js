module.exports = {
name: "set-join-color",
 description: "Mensaje de Bienvenida",
 category: "Bienvenida",
 aliases: ["wcm","swm"],
 $if: "old",
 code: `
 $if[$getguildVar[english]==1]
 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]

$title[1;¡Color de bienvenida establecido!]
$description[1;Nuevo color de bienvenida:
\`\`\`$message\`\`\`]
$color[1;$message[1]]
$addTimestamp[1]
$setguildVar[WelcomeColor;$message]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]};{actionRow:{button:Soporte:link:$getUserVar[buttonBloqueo]:no}}]
$endif
`
 }