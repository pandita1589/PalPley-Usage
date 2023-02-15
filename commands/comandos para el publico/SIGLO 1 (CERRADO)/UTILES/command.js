module.exports = ({
 name: "command",
 aliases: ['cmd'],
 description: "información sobre un comando específico",
 usage: "command <nombre del comando>",
 cooldown: '3s',
 $if: "old",
 code:
 `
 $if[$getguildVar[english]==1]
$author[1;$toLocaleUppercase[$commandInfo[$message[1];name]] Comando;$userAvatar[$clientID];https://discord.com/oauth2/authorize?client_id=885316406307082270&permissions=8&scope=bot]
$cooldown[$commandInfo[command;cooldown];{newEmbed:{description: ¡Espera %time% para volver a intentarlo!}{color:Red}}]
$color[1;$getUserVar[colorMuichiro]]

$addField[1;Descripcion:;\`\`\`fix
$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];description]!=];true;$commandInfo[$message[1];description]];false;Ninguna]
    \`\`\`;no]

$addField[1;Cooldown:;\`\`\`fix
$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];cooldown]!=];true;$commandInfo[$message[1];cooldown]];false;None]
\`\`\`;yes]

$addField[1;Uso:;\`\`\`fix
$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$commandInfo[$message[1];usage]];false;Ninguno]
\`\`\`;yes]

$addField[1;Aliases:;\`\`\`fix
$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,; | ]];false;Ninguno]]
\`\`\`;yes]



 $onlyIf[$commandInfo[$message[1];name]!=;{newEmbed:{description: $getUserVar[no] Comando no encontrado}{color:#ff0000}}]
 $onlyIf[$message!=;{newEmbed:{description: Uso de argumentos no válidos:
\`$getguildVar[prefix]cmd <nombre del comando>\`}{color:#ff0000}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif

$if[$getguildVar[english]==2]
$author[1;$toLocaleUppercase[$commandInfo[$message[1];name]] Command;$userAvatar[$clientID];https://discord.com/oauth2/authorize?client_id=885316406307082270&permissions=8&scope=bot]
$cooldown[$commandInfo[command;cooldown];{newEmbed:{description::c_s: Wait %time% to try again!}{color:Red}}]
$color[1;$getUserVar[colorMuichiro]]

$addField[1;Description:;\`\`\`fix
$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];description]!=];true;$commandInfo[$message[1];description]];false;None]
     \`\`\`;no]

$addField[1;Cooldown:;\`\`\`fix
$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];cooldown]!=];true;$commandInfo[$message[1];cooldown]];false;None]
\`\`\`;yes]

$addField[1;Usage:;\`\`\`fix
$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$commandInfo[$message[1];usage]];false;None]
\`\`\`;yes]

$addField[1;Aliases:;\`\`\`fix
$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,; | ]];false;None]]
\`\`\`;yes]



  $onlyIf[$commandInfo[$message[1];name]!=;{newEmbed:{description: $getUserVar[no] Command not found}{color:#ff0000}}]
  $onlyIf[$message!=;{newEmbed:{description: Using invalid arguments:
\`$getguildVar[prefix]cmd <command name>\`}{color:#ff0000}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif

$botTyping
`
});
