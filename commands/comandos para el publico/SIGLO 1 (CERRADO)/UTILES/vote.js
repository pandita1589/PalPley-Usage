module.exports = ({
  name: "vote",
  code: `$title[1;Top.gg]
$description[$username[$clientID] en [top.gg](https://top.gg/), una vez que el bot esta conectado en top.gg es hora de estar votando por el en su pagina web, vamos que esperas vota por mi!]

$color[1;$getUserVar[colorMuichiro]]
$image[$getUserVar[imgMuichiro]]
$addButton[1;Top.gg;link;https://top.gg/bot/1059846694621163570;no;<:1_:1072172801223577743>]
$addButton[1;Upvotes;link;https://top.gg/api/widget/1059846694621163570.svg;no;<:1_:1072172801223577743>]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support server](https://discord.gg/aZn5AEDwVy)**}}]
`
})