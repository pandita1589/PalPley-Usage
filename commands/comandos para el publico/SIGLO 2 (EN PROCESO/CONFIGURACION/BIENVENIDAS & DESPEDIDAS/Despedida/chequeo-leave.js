module.exports = ({
  name: "embed-leave",
  code:`
  $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[LeaveTitle];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
 $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[LeaveMessage];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]
 ] 
  $image[1;$getguildVar[lbg]]
 $footer[1;Ahora $guildName tiene $membersCount usuarios!;$guildIcon]
 $addTimestamp[1]
 $color[1;$getguildVar[LeaveColor]]

 $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
`
})