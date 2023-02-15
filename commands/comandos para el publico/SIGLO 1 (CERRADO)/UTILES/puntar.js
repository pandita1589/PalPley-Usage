module.exports = ({
    name: "calificar",
    $if: "old",
    code: `$if[$getguildVar[english]==1]
    $channelSendMessage[$getguildVar[channelCalificar];{newEmbed:{title:Nueva reseña!}
{field:Estrellas:\`\`\`fix
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];+;];-;];1;★☆☆☆☆];2;★★☆☆☆];3;★★★☆☆];4;★★★★☆];5;★★★★★]\`\`\`:yes}
{timestamp}
{field:Usuario:\`\`\`fix
$userTag[$authorID]\`\`\`:yes}
{field:Reseña:\`\`\`fix
$messageSlice[1]\`\`\`:no}
{color:FFD3E8}
{thumbnail:$userAvatar[$clientID]}{image:$getUserVar[imgComan]}}]

 $description[Tu puntuacion se envio correctamente a <#$getguildVar[channelCalificar]> correctamente!]

$color[1;$getUserVar[colorMuichiro]]

$onlyIf[$messageSlice[1]!=;Escribe tu reseña!]
$onlyIf[$replaceText[$replaceText[$message[1];+;];-;]>=1;Escribe un numero igual o mayor al 1!]
$onlyIf[$replaceText[$replaceText[$message[1];+;];-;]<=5;Escribe un numero igual o menor al 5!]
$onlyIf[$isNumber[$replaceText[$replaceText[$message[1];+;];-;]]==true;{newEmbed:{description:Escribe un numero del 1 al 5!}{color:$getUserVar[colorMuichiro]}]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]

$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support server](https://discord.gg/aZn5AEDwVy)**}}]
$endif
  
$if[$getguildVar[english]==2]
$channelSendMessage[$getguildVar[channelCalificar];{newEmbed:{title:New Review!}
{field:Stars:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];+;];-;];1;★☆☆☆☆];2 ;★★☆☆☆];3;★★★☆☆];4;★★★★☆];5;★★★★★]:yes}
{timestamp}
{field:Review By:$userTag[$authorID]:yes}
{field:Review:$messageSlice[1]:no}
{color:FFD3E8}
{thumbnail:$userAvatar[$clientID]}}]

  $description[Your score was successfully sent to <#$getguildVar[channelRate]> successfully!]

  $color[1;$getUserVar[colorMuichiro]]

$onlyIf[$messageSlice[1]!=;Write your review!]
$onlyIf[$replaceText[$replaceText[$message[1];+;];-;]>=1;Enter a number equal to or greater than 1!]
$onlyIf[$replaceText[$replaceText[$message[1];+;];-;]<=5;Enter a number equal to or less than 5!]
$onlyIf[$isNumber[$replaceText[$replaceText[$message[1];+;];-;]]==true;Enter a Number from 1 to 5!]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Access Denied!}
{description:> Dear $userTag[$authorID] you are on the blacklist.

> Reason: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:What can I do?:What you can do is enter the [support guild](https://discord.gg/aZn5AEDwVy) and discuss with $userTag[$botOwnerID] and find out the reason for the ban:yes} }]

$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png ?size=128} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif
`})