module.exports = [{
    name: "avatar",
    aliases: ['av', 'usericon', 'pfp'],
    $if: "old",
    code: `
$if[$getguildVar[english]==1]
$author[1;Avatar de $username[$findMember[$message]]]
    $description[1;Descargar avatar: [Click aquí]($get[owonya])]
    $image[1;$userAvatar[$findMember[$message]]]
$color[$getUserVar[colorMuichiro]]
    $addButton[1;Descargar avatar;link;$nonEscape[$get[owonya]]]
    $wait[2s]
     
    $let[owonya;$replaceText[$userAvatar[$findMember[$message]];webp;png]]


$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]

$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;Avatar of $username[$findMember[$message]]]
     $description[1;Download avatar: [Click here]($get[owonya])]
     $image[1;$userAvatar[$findMember[$message]]]
     $color[1;$getUserVar[colorMuichiro]]
     $addButton[1;Download avatar;link;$nonEscape[$get[owonya]]]
     $wait[2s]
     
     $let[owonya;$replaceText[$userAvatar[$findMember[$message]];webp;png]]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Access Denied!}
{description:> Dear $userTag[$authorID] you are on the blacklist.

> Reason: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:What can I do?:What you can do is enter the [support guild](https://discord.gg/aZn5AEDwVy) and discuss with $userTag[$botOwnerID] and find out the reason for the ban:yes} }]

$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]

$endif
`
}]