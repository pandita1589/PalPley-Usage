module.exports = [{
  name: "add-premium",
  code: `$setGlobalUserVar[Premium;true;$mentioned[1]]
  $useChannel[$getguildVar[channelPremimAgregado]]
$title[1;Felicidades]
$description[1;El usuario $userTag[$mentioned[1]] fue añadido al sistema premium.]
$addField[1;Usuario:;\`\`\`fix
$userTag[$mentioned[1]] | $mentioned[1]\`\`\`;yes]
$addField[1;Tiempo:;\`\`\`fix
$nomentionmessage\`\`\`;yes]

$color[1;Green]
$thumbnail[1;$guildIcon]
$addTimestamp[1]

$onlyIf[$getGlobalUserVar[Premium;$mentioned[1]]==false;El ya esta en el sistema premium!]
$onlyIf[$authorID==$botOwnerID;Solo mi idolo $userTag[$botOwnerID] puede usar esto!]


`}]