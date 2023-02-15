module.exports = ({
name: "set-sugget",
$if: "old",
code: `
$if[$getguildVar[english]==1]
$setguildVar[chsug;$mentionedChannels[1]]

Canal editado!, ahora todas las sugerencias seran enviadas en <#$mentionedchannels[1]>

$onlyif[$guildchannelexists[$mentionedchannels[1]]==true;este canal no existe!]

$onlyif[$mentionedchannels[1]!=;menciona un canal!]

$argscheck[1;:x: Debes mencionar el canal donde quieres que se manden las sugerencias]

$onlyPerms[administrator;{newEmbed:{title:▸ ❌ ┇ NO PUEDES!} {description:⚠️ No tienes los permisos suficientes para hacer esto} {color:ff0000} {footer:$username:$userAvatar} {delete:10s} {timestamp:ms}}]

$onlyIf[$getGlobalUserVar[Premium]==true;❌ Usted no esta agregado al sistema Premium]

$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif

$if[$getguildVar[english]==2]
$setguildVar[chsug;$mentionedChannels[1]]

Channel edited!, now all suggestions will be sent in <#$mentionedchannels[1]>

$onlyif[$guildchannelexists[$mentionedchannels[1]]==true;this channel does not exist!]

$onlyif[$mentionedchannels[1]!=;mention a channel!]

$argscheck[1;:x: You must mention the channel where you want the suggestions to be sent]

$onlyPerms[administrator;{newEmbed:{title:▸ ❌ ┇ YOU CAN'T!} {description:⚠️ You don't have enough permissions to do this} {color:ff0000} {footer:$username:$userAvatar} {delete:10s} {timestamp:ms}}]

$onlyIf[$getGlobalUserVar[Premium]==true;❌ You are not added to the Premium system]
$endif
`
})