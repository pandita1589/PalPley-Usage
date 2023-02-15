module.exports = [{
    name: "language",
    $if: "old",
    code: `
  $if[$getguildVar[english]==1]
$thumbnail[$userAvatar]
  $author[1;Lenguaje del bot]
$image[$getUserVar[imgComan]]
  $description[1;¿Que lenguaje te gustaría que utilicé en este servidor?]
$color[$getUserVar[colorMuichiro]]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]

$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
  $endif
  
  $if[$getguildVar[english]==2]

  $author[1;Bot language]
$thumbnail[$userAvatar]
$image[$getUserVar[imgComan]]
  $description[1;What language would you like me to use on this guild?]
$color[$getUserVar[colorMuichiro]]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Access Denied!}
{description:> Dear $userTag[$authorID] you are on the blacklist.

> Reason: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:What can I do?:What you can do is enter the [support guild](https://discord.gg/aZn5AEDwVy) and discuss with $userTag[$botOwnerID] and find out the reason for the ban:yes} }]

$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
  $endif
  
  $addButton[1;English;primary;english_;no;<:english:1059220266133233664>]
  $addButton[1;Español;primary;espanol_;no;<:spanish:1059220267785785465>]`
  },{
    name: "espanol_",
    prototype: "button",
    type: "interaction",
    code: `$interactionUpdate[Idioma cambiado a Español.;;;;no]
    $setguildVar[english;1]`
  },{
    name: "english_",
    prototype: "button",
    type: "interaction",
    code: `$interactionUpdate[Language setted to English.;;;;no]
    $setguildVar[english;2]`
  }
  ]