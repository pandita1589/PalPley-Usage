module.exports = ({
name: "guild-info",
code: `$reply[$messageID;yes]
    $title[Informacion del servidor.]
    $color[1;$getguildVar[colorMuichiro]]
$addButton[1;Icon;link;$nonEscape[$get[owonya]]]
$wait[2s]
$let[owonya;$replaceText[$guildIcon;webp;png]]

    $addField[1;Nombre del servidor:; $guildname; yes]
    $addField[1;ID;$guildid;yes]
$addField[1;Dueño:;$usertag[$ownerid] **(** $ownerid **)**;yes]
$addField[1;Creacion del servidor:;<t:$truncate[$divide[$creationDate[$guildID;ms];1000]]> **(** <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R> **)**;yes]
$addField[1;Descripcion del servidor:;$replaceText[$replaceText[$checkCondition[$guildDescription==];true;Sin descripción.];false;$guildDescription];yes]

$addField[1;Roles:;$roleCount;yes]
$addField[1;Miembros:;$membersCount[$guildID] en total, $membersCount[$guildID;online] en línea, $membersCount[$guildID;idle] en ausente, $membersCount[$guildID;dnd] en no molestar y $membersCount[$guildID;offline] desconectados.;yes]
$addField[1;Nivel de verificacion:;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$guildVerificationLevel[$guildID];NONE;Ninguno];LOW;<:_:1056645493599518825> Bajo];MEDIUM;<:_:1056645507050647572> Medio];HIGH;<:_:1056645509273628672> Alto];VERY_HIGH;<:_:1056645509273628672> Muy Alto];yes]
$addField[1;Boost;$guildBoostCount boost ($replaceText[$replaceText[$replaceText[$replaceText[$guildBoostLevel;NONE;Ningún Nivel;1];TIER_1;Nivel 1;1];TIER_2;Nivel 2;1];TIER_3;Nivel 3;1]);yes]
$addField[1;Emojis:;$emojiCount[$guildID] en total, $emojiCount[$guildID;animated] animados y $emojiCount[$guildID;normal] estáticos.;yes]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
`

})