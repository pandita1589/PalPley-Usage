module.exports = ({
name: "reload",
description: "Reload all the commands! (Developer Only)",
usage: "reload",
code:`
$addButton[1;Se Eliminaron: $replaceText[$replaceText[$checkContains[$math[$get[oldcount]-$get[newcount]];-];true;0];false;$math[$get[oldcount]-$get[newcount]]];danger;removed;yes;]
$addButton[1;Se Añadieron: $replaceText[$replaceText[$checkContains[$math[$get[newcount]-$get[oldcount]];-];true;0];false;$math[$get[newcount]-$get[oldcount]]];success;added;yes]
$addButton[1;Se Actualizaron: $get[newcount];primary;updated;yes]
$color[1;35CE8D]
$description[1;**__¡Se Recargaron con éxito todos los comandos!__**]
$deleteMessage[$get[reloadid];$channelID]
$wait[700ms]
$let[reloadid;$sendMessage[{newEmbed: {description:<a:cargando:903143360657760288> **__¡Recargando todos los comandos!__**}{color:3ABEFF}};yes]]
$let[newcount;$commandsCount]
$updateCommands
$let[oldcount;$commandsCount]
$onlyForIDs[$botOwnerID;{newEmbed: {color:DA2C38}{description::fail: **__This command can only be used by <@$botOwnerID>!__**}{footer:Executed by $userTag[$authorID]:$userAvatar}{timestamp}{author:$guildName[$guildID]:$guildIcon[$guildID]}}]`
})