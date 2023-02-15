module.exports = ({
name: "panel-leave",
code: ` 
$onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
$title[1; Aca esta el panel!]

 $addField[1;Color;\`\`\`k
 $getguildVar[LeaveColor]\`\`\`]


 $addField[1;Imagen;\`\`\`fix
 $getguildVar[lbg]\`\`\`]

 $addField[1;Channel:;\`\`\`fix
 $getguildVar[LeaveChannel]\`\`\`]


$description[1;
**Texto:** $replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[LeaveMessage];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]

**Titulo:** $replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[LeaveTitle];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
 $image[1;$getguildVar[lbg]]
 $color[1;$getguildVar[LeaveColor]]

 $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
`
})

// $addField[1;Thumbnail;\`\`\`fix $getguildVar[WelcomeThumbnail]\`\`\`]