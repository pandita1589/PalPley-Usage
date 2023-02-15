module.exports = ({
  name: "perfil-letter",
  code: `
  $title[1;Perfil de $userTag[$mentioned[1;yes]]]
  $description[1;Tu perfil esta activo $userTag[$mentioned[1;yes]]!]
  
$image[1;https://api.daimon-bot.ga/imagegen/profilecardv1?usertag=$uri[$userTag[$mentioned[1;yes]];encode]&avatar=$userAvatar[$mentioned[1;yes]]&bio=$uri[Soy una usuario listo e inteligente!;encode]&roles=$uri[$replaceText[$userRoles[$mentioned[1;yes];$guildID;name;,];,;];encode]&xp=$getUserVar[exp;$mentioned[1;yes]]&total=$getUserVar[rexp;$mentioned[1;yes]]&level=$getUserVar[lvl;$mentioned[1;yes]]&nitroBadge=true&devBadge=true]

$color[1;D6D4FF]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]

`
})