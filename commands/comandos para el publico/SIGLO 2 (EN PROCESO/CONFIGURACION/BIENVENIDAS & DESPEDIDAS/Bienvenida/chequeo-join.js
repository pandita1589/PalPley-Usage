module.exports = ({
  name: "embed-join",
  $if: "old", 
  code:`
  $if[$getguildVar[english]==1]
$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
 $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
$image[1;$getguildVar[bg]]
 $footer[1;Ahora $guildName tiene $membersCount usuarios!;$guildIcon]
 $addTimestamp[1]

 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
 $color[1;$getguildVar[WelcomeColor]]
 $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]

$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif


$if[$getguildVar[english]==2]
$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[WelcomeTitleE];{user};$username];{user.ping};<@$authorID>];{guild};$guildName ];{user.tag};$userTag[$authorID]]]
  $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getguildVar[WelcomeMessageE];{user};$username];{user.ping};<@$authorID>];{guild};$guildName ];{user.tag};$userTag[$authorID]]
  ]
$image[1;$getguildVar[bg]]
  $footer[1;Now $guildName has $membersCount users!;$guildIcon]
  $addTimestamp[1]

  $onlyPerms[administrator;Sorry, but you need **Administrator** permissions!]
  $color[1;$getguildVar[WelcomeColor]]
  $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Access Denied!}
{description:> Dear $userTag[$authorID] you are on the blacklist.

> Reason: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:What can I do?:What you can do is enter the [support guild](https://discord.gg/aZn5AEDwVy) and discuss with $userTag[$botOwnerID] and find out the reason for the ban:yes} }]

$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext] }]
$endif
`
})