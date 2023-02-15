module.exports = ({
name: "suggest",
$if: "old",
code: `
$if[$getguildVar[english]==1]
$channelSendMessage[$getguildvar[chsug];{newEmbed:{author:$usertag:$useravatar}{title:**Nueva sugerencia!**}{description: 
$message }{color:$getUserVar[colorMuichiro]}{reactions:✔,❌}}]

$onlyif[$getguildvar[chsug]!=;El canal de sugerencias no ha sido seteado!]
$onlyif[$message!=;Escribe algo!]

$deleteCommand

$onlyIf[$getGlobalUserVar[Premium]==true;❌ Usted no esta agregado al sistema Premium]

$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif

$if[$getguildVar[english]==2]
$channelSendMessage[$getguildvar[chsug];{newEmbed:{author:$usertag:$useravatar}{title:**New suggestion!**}{description:
    $message }{color:$getUserVar[colorMuichiro]}{reactions:✔,❌}}]
    
    $onlyif[$getguildvar[chsug]!=;The suggestion channel has not been set!]
    $onlyif[$message!=;Type something!]
    
    $deleteCommand
    
    $onlyIf[$getGlobalUserVar[Premium]==true;❌ You are not added to the Premium system]
    $onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif
`
})
