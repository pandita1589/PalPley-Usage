module.exports = [{
    name: "user-info",
    category: "Info",
    aliases: ['user', 'whois'],
    code: `$author[$userTag[$get[user]];$userAvatar[$get[user]]]
    $thumbnail[1;$userAvatar[$get[user]]]
  $description[Aca esta el info de <@$get[user]>]
  $addField[1;Roles:; $userRoles[$get[user];$guildID;mention;,]
  $addField[1;Dia de creacion:;\`\`\`fix
  $ordinal[$advancedtextsplit[$creationdate[$get[user];date];/;2]] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$advancedtextsplit[$creationdate[$get[user];date];/;1];12;December];11;November];10;October];9;September];8;August];7;July];6;June];5;May];4;April];3;March];2;February];1;January], $advancedtextsplit[$creationdate[$get[user];date];/;3;, ;1] ($advancedtextsplit[$creationdate[$get[user];time]; ;1] $advancedtextsplit[$creationdate[$get[user];time]; ;2] and $advancedtextsplit[$creationdate[$get[user];time]; ;3] $advancedtextsplit[$creationdate[$get[user];time]; ;4] ago)\`\`\`]
  $addField[1;ID;$get[user]]
  $color[1;$userRoleColor[$get[user]]]
  $footer[$formatDate[$memberJoinedDate;LLLL];$userAvatar]
$let[user;$findMember[$message]]
  `
   }]