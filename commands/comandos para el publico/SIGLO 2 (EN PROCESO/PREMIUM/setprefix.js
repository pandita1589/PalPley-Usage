module.exports = ({
 name: "set-prefix",
 $if: "old",
 code:`
 $if[$getguildVar[english]==1]
$setguildVar[prefix;$message]
$author[1;Custom Prefix!;https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
$description[1;Vale, mi nuevo prefijo es **$message**, ahora utiliza **$messagehelp**]

$addField[Mi prefix general#COLON#;\`\`\`fix
$getUserVar[prefix]\`\`\`;yes]
$addField[Mi nuevo prefix#COLON#;\`\`\`fix
$message\`\`\`;yes]

$image[$getUserVar[imgComan]]
$thumbnail[$userAvatar]
$footer[1;Prefix cambiado por $userName]
$color[1;$getUserVar[colorMuichiro]]	
$addTimestamp[1]
$argsCheck[1;Use: \`$getguildVar[prefix]setprefix\`]

$onlyIf[$getGlobalUserVar[Premium]==true;{newEmbed:{description:Hey! $userTag no estas en la lista de usuarios premium}}]

$onlyIf[$charCount[$message]<4;Upps tal vez no sabias pero el limite de caracteres para el nuevo prefix es maximo 4]
$onlyPerms[administrator;Al parecer no tienes permisos suficientes para hacer esto.]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif



$if[$getguildVar[english]==2]
$setguildVar[prefix;$message]
$author[1;Custom Prefix!;https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
$description[1;OK, my new prefix is **$message**, now use **$messagehelp**]

$addField[My general prefix#COLON#;\`\`\`fix
$getUserVar[prefix]\`\`\`;yes]
$addField[My new prefix#COLON#;\`\`\`fix
$message\`\`\`;yes]

$image[$getUserVar[imgComan]]
$thumbnail[$userAvatar]
$footer[1;Prefix changed to $userName]
$color[1;$getUserVar[colorMuichiro]]
$addTimestamp[1]
$argsCheck[1;Use: \`$getguildVar[prefix]setprefix\`]

$onlyIf[$getGlobalUserVar[Premium]==true;{newEmbed:{description:Hey! $userTag you are not in the list of premium users}}]

$onlyIf[$charCount[$message]<4;Oops maybe you didn't know but the character limit for the new prefix is maximum 4]
$onlyPerms[administrator;It looks like you don't have enough permissions to do this.]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif
`
})