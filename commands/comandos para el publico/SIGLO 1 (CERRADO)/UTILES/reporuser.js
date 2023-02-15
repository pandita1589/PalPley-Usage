module.exports = {
  name: "report-user",
  code: `$usechannel[$getUserVar[channelReportUser]]
  $title[1;Reporte!]
  $color[1;FFFAD3]
  $addfield[1;Servidor;\`\`\`fix
  $guildName[$guildID]\`\`\`]
  $addField[1;Razón;\`\`\`fix
  $nomentionmessage\`\`\`]
  $addField[1;Usuario reportado;\`\`\`fix
  $userTag[$mentioned[1]] | $mentioned[1]\`\`\`]

  $addField[1;Dueño del mensaje;\`\`\`fix
  $usertag[$authorID] | $authorID\`\`\`]
  $deletecommand
  $image[$getUserVar[imgComan]]
$thumbnail[1;$userAvatar]

$channelSendMessage[$channelID;<@$authorID> {newEmbed: {title:Reporte de usuario entragado} {thumbnail:$guildIcon} {description:Reporte enviado, gracias por el reporte esto nos ayuda a mejorar la calidad de $username[$clientID]!} {footer:Gracias por reportar este usuario} {color:FFD3D3}}] 
$onlyIf[$nomentionmessage!=;Escribe la razón del reporte!]
$onlyIf[$authorID!=$mentioned[1];Por que quieres reportarte a ti mismo?]
$onlyIf[$userExists[$mentioned[1]]==true;Menciona al usuario que quieres reportar]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support server](https://discord.gg/aZn5AEDwVy)**}}]
`}

