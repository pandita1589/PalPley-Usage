module.exports = ({
 name: "reset-prefix",
 $if: "old",
 code:`
 $if[$getguildVar[english]==1]
$resetguildVar[prefix]
$title[1;Custom Prefix]
$description[1;
Prefix receteado ahora sera \`$getUserVar[prefix]\`]
$color[1;Random]
$onlyIf[$getGlobalUserVar[Premium]==true;❌ Usted no esta agregado al sistema Premium]
$onlyPerms[administrator;No tienes permisos suficientes]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif

$if[$getguildVar[english]==2]
$resetguildVar[prefix]
$title[1;Custom Prefix]
$description[1;
Prefix prefix will now be \`$getUserVar[prefix]\`]
$color[1;Random]
$onlyIf[$getGlobalUserVar[Premium]==true;❌ You are not added to the Premium system]
$onlyPerms[administrator;You do not have sufficient permissions]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
$endif
`
})