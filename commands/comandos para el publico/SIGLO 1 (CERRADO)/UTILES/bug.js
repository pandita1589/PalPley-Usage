module.exports = ({
name: "report-bug",
$if: "old",
aliases: ['Report-bug','bug','bug-report'],
code: `
$if[$getguildVar[english]==1]
$useChannel[$getguildVar[channelErrores]]
$title[1;Reporte de bug!]
$description[Bug reportado por: $usertag[$authorID] ]

$addField[Reporte:;\`\`\`fix
$message\`\`\`;yes]
$addField[Servidor:;\`\`\`fix
$guildName[$guildID]\`\`\`;yes]
$getUserVar[imgComan]
$thumbnail[1;$userAvatar]

$color[1;$getUserVar[colorMuichiro]]

$channelSendMessage[$channelID;✅ | Bug reportado con éxito.]
$onlyIf[$checkContains[$message;@here;@everyone]==false;❌ | No menciones everyone ni here.]
$suppressErrors[❌ | Error inesperado.]
$onlyIf[$message!=;❌ | Escribe algo.]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]

$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$useChannel[$getguildVar[channelErrors]]
$title[1;Bug report!]
$description[Bug reported by: $usertag[$authorID] ]

$addField[Report:;\`\`\`fix
$message\`\`\`;yes]
$addField[guild:;\`\`\`fix
$guildName[$guildID]\`\`\`;yes]
$getUserVar[imgComman]
$thumbnail[1;$userAvatar]

$color[1;$getUserVar[colorMuichiro]]

$channelSendMessage[$channelID;✅ | Bug reported successfully.]
$onlyIf[$checkContains[$message;@here;@everyone]==false;❌ | Do not mention everyone or here.]
$suppressErrors[❌ | Unexpected error.]
$onlyIf[$message!=;❌ | Write something.]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Access Denied!}
{description:> Dear $userTag[$authorID] you are on the blacklist.

> Reason: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:What can I do?:What you can do is enter the [support guild](https://discord.gg/aZn5AEDwVy) and discuss with $userTag[$botOwnerID] and find out the reason for the ban:yes} }]

$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext] }]
$endif
`
})

