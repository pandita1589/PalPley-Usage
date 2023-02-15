module.exports = {
name: "baneados",
code: `$author[1;Baneados;$useravatar]
$addField[1;> Ultimo desbaneado;\`\`\`fix
$getvar[lastunblacklist]\`\`\`;yes]
$addField[1;> Ultimo baneado;\`\`\`fix
$getvar[lastblacklist]\`\`\`;no]
$addField[1;> Numero de baneados;\`\`\`fix
$getvar[numblacklist]\`\`\`;yes]
$thumbnail[1;$guildIcon]
$color[1;$getUserVar[colorMuichiro]]

$onlyif[$getglobaluservar[blacklist]==false;> No puede ser :0, estas en la blacklist :C
razon: **$getglobaluservar[rblacklist]**
Si crees que fue un error comunicate con $usertag[$botOwnerID]]`
}