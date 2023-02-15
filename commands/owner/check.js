module.exports = {
name: "check",
code: `$author[1;Chequeo;$useravatar[$finduser[$message]]]
$addField[1;> Razon:;\`\`\`djs
$replacetext[$replacetext[$checkcondition[$getglobaluservar[rblacklist;$finduser[$message]]==];true;No hay razon.];false;$getglobaluservar[rblacklist;$finduser[$message]]]\`\`\`]
$addField[1;> Estas en la blacklist?;\`\`\`djs
$replacetext[$replacetext[$checkcondition[$getglobaluservar[blacklist;$finduser[$message]]==false];true;No];false;Si]\`\`\`]
$thumbnail[1;$guildIcon]
$color[$getUserVar[colorMuichiro]]`
}