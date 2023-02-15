module.exports = ({
    name: "purge",
    aliases: ['clear'],
    description: "This command will allow you to delete the amount of messages you request.",
    usage: "purge <amount> [userID]",
    permissions: ["sendMessages", "manageMessages"],
    cooldown: "8s",
    $if: "old",
    code: `
    $if[$getguildVar[english]==1]
   $if[$message[2]==]
   $description[1;Los mensajes de este canal fueron eliminados correctamente sin ningun error.]
   $footer[1;$username;$userAvatar]
   $image[$getUserVar[imgComan]]
   $thumbnail[1;$guildIcon]
   $color[1;$getUserVar[colorMuichiro]]
   $title[Se eliminaron $message mensajes!]
 
   $addField[Cantidad:;\`\`\`
 $message
 \`\`\`;yes]
 
 $addField[ID del canal:;\`\`\`
 $channelID
 \`\`\`;yes]
   $deleteIn[8s]
   $clear[$message[1]]
   $onlyPerms[managemessages;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:No tienes el permiso necesario. 
    
    Faltan permisos: \`MANAGE_MESSAGES\`}{color:Red}}]

   $onlyPerms[administrator;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:No tienes el permiso necesario. 
    
    Faltan permisos: \`MANAGE_MESSAGES\`}{color:Red}}]

   $onlyif[$isnumber[$message[1]]==true;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:Pon una cantidad valida.}{color:Red}}]

   $onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
   $endif
   $endif
   
   $if[$getguildVar[english]==2]
   $if[$message[2]==]
    $description[1;The messages in this channel were successfully removed without any errors.]
    $footer[1;$username;$userAvatar]
    $image[$getUserVar[imgComan]]
    $thumbnail[1;$guildIcon]
    $color[1;$getUserVar[colorMuichiro]]
    $title[Deleted $message messages!]
 
    $addField[Quantity:;\`\`\`
  $message
  \`\`\`;yes]
 
  $addField[Channel ID:;\`\`\`
  $channelID
  \`\`\`;yes]
    $deleteIn[8s]
    $clear[$message[1]]
    $onlyPerms[managemessages;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:You don't have the require permission.Permissions missing: \`MANAGE_MESSAGES\`}{color:Red}}]

    $onlyPerms[administrator;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:You don't have the require permission.Permissions missing: \`MANAGE_MESSAGES\`}{color:Red}}]

    $onlyif[$isnumber[$message[1]]==true;{newEmbed:{author:$username[$clientid] | Error:$useravatar[$clientid]}{description:Please give a valid amount.}{color:Red}}]

    $onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
    $endif
   $endif`
   
   })