module.exports = [{
    name: "remove-premium",
    code: `$setGlobalUserVar[Premium;false;$mentioned[1]]
    $useChannel[$getguildVar[channelPremiumRemovido]]
    $title[Lo sentimos]
  $description[1;Lo siento $userTag[$mentioned[1]], te sacaron del sistema premium....]
  $color[1;Red]
  $thumbnail[1;$guildIcon]
  $addField[1;Usuario:;\`\`\`fix
$userTag[$mentioned[1]] | $mentioned[1]\`\`\`;yes]
$addField[1;Razón:;\`\`\`fix
$randomText[Su tiempo de sistema premium se acabo.; No tiene mas tiempo para tener sistema premium.]\`\`\`;yes]
  $addTimestamp[1]
  
  $onlyIf[$getGlobalUserVar[Premium;$mentioned[1]]==true;El no esta en el sistema premium!]
  $onlyIf[$authorID==$botOwnerID;Solo mi idolo $userTag[$botOwnerID] puede usar esto!]
  
  
  `
}]