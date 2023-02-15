module.exports = ({
name: "panel-join",
code: ` 
$onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
$title[1; Aca esta el panel!]

 $addField[1;Color;\`\`\`k
 $getguildVar[WelcomeColor]\`\`\`]


 $addField[1;Imagen;\`\`\`fix
 $getguildVar[bg]\`\`\`]


 $addField[1;Channel:;\`\`\`fix
 $getguildVar[WelcomeChannel]\`\`\`]

$description[1;
**Texto:** $replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]

**Titulo:** $replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
 $image[1;$getguildVar[bg]]
$color[1;$getguildVar[WelcomeColor]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
`
})

// $addField[1;Thumbnail;\`\`\`fix $getguildVar[WelcomeThumbnail]\`\`\`]