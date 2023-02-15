module.exports = {
name: "add-black-list",
aliases: "abl",
code: `$setvar[numblacklist;$sum[$getVar[numblacklist];1]]

$setvar[lastblacklist;$finduser[$message[1]]]

$setGlobalUserVar[rblacklist;$replacetext[$replacetext[$checkcondition[$messageSlice[1]==];true;Sin razon especificada];false;$messageSlice[1]];$finduser[$message[1]]]

$setGlobalUserVar[blacklist;true;$finduser[$message[1]]]

$thumbnail[1;$guildIcon]
$author[1;Sistema Blacklist;$useravatar[$finduser[$message[1]]]]
$description[1;$usertag[$finduser[$message[1]]] fue añadido a la blacklist, la razon fue:
\`\`\`djs
$replacetext[$replacetext[$checkcondition[$messageSlice[1]==];true;Sin razon especificada];false;$messageSlice[1]]\`\`\`]
$color[1;$getUserVar[colorMuichiro]]
$onlyif[$getuservar[blacklist;$findUser[$message[1]]]==false;Este usuario ya estan blacklisteado!]
$onlyForIDs[$botOwnerID;no eres competente de hacer esto >:c]
$onlyIf[$message!=;pon el id, mencion o nombre#tag del usuario a banear del bot!]`
}