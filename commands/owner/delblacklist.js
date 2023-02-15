module.exports = ({
name: "delete-black-list",
aliases: "dbl",
code: `$setvar[numblacklist;$sub[$getVar[numblacklist];1]]
$setvar[lastunblacklist;$finduser[$message[1]]]

$setGlobalUserVar[rblacklist;;$finduser[$message[1]]]

$setGlobalUserVar[blacklist;false;$finduser[$message[1]]]

$author[1;Sistema Blacklist;$useravatar[$finduser[$message[1]]]]
$description[1;$usertag[$finduser[$message[1]]] fue añadido a la blacklist, la razon fue:
\`\`\`djs
$replacetext[$replacetext[$checkcondition[$messageSlice[1]==];true;Sin razon especificada];false;$messageSlice[1]]\`\`\`]
$thumbnail[1;$guildIcon]
$color[1;$getUserVar[colorMuichiro]]
$onlyif[$getglobaluservar[blacklist;$findUser[$message[1]]]==true;Este usuario no esta blacklisteado!]
$onlyForIDs[$botOwnerID;no eres competente de hacer esto >:c]
$onlyIF[$message!=;pon el id, mencion o nombre#tag del usuario a desbanear del bot!]`
})