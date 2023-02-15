module.exports = {
  name: "rank", 
  aliases: ["level"],
  $if: "old",
  code: `
  $if[$getguildVar[english]==1]  
$color[$getUserVar[colorMuichiro]]

  $image[https://api.munlai.fun/image/rankcard?image=$userAvatar[$mentioned[1;yes]]&username=$uri[$username[$mentioned[1;yes]];encode]&discriminator=$uri[$discriminator[$mentioned[1;yes]];encode]&xp=$getUserVar[exp;$mentioned[1;yes]]&level=$getUserVar[lvl;$mentioned[1;yes]]&total=$getUserVar[rexp;$mentioned[1;yes]]&background=https://cdn.discordapp.com/attachments/932235278066802719/1055012573050851328/63d50fef33ef8dc6621818557c773a52.gif]

$onlyIf[$getguildVar[rsystem]>=1;{newEmbed: {description:El sistema de niveles está __deshabilitado__!!

**__Como utilizarlo__**
$getguildVar[prefix]set-rank-channel *#channel*}{color:#FFD8F0}}]
$cooldown[5s;tienes que esperar %time%]
$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
 $endif

 $if[$getguildVar[english]==2]
 $color[$getUserVar[colorMuichiro]]
  
 $image[https://api.munlai.fun/image/rankcard?image=$userAvatar[$mentioned[1;yes]]&username=$uri[$username[$mentioned[1;yes]];encode]&discriminator=$uri[$discriminator[$mentioned[1;yes]];encode]&xp=$getUserVar[exp;$mentioned[1;yes]]&level=$getUserVar[lvl;$mentioned[1;yes]]&total=$getUserVar[rexp;$mentioned[1;yes]]&background=https://cdn.discordapp.com/attachments/932235278066802719/1055012573050851328/63d50fef33ef8dc6621818557c773a52.gif]
 $onlyIf[$getguildVar[rsystem]>=1;{newEmbed: {description:The tier system is __disabled__!!
 
 **__How to use__**
 $getguildVar[prefix]set-rank-channel *#channel*}{color:#FFD8F0}}]
 $cooldown[5s;you have to wait %time%]
 
 
 $onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Access Denied!}
 {description:> Dear $userTag[$authorID] you are on the blacklist.
 
 > Reason: **$getglobaluservar[rblacklist]**}
 {color:ff0000}
 {field:What can I do?:What you can do is enter the [support guild](https://discord.gg/aZn5AEDwVy) and discuss with $userTag[$botOwnerID] and find out the reason for the ban:yes} }]
 $onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Commands in maintenance.**} {color:Red} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png} {description:**Hello $username my commands are now under maintenance, I can't tell you how long I'll be there, but my commands will be active soon, if you think it's a bug contact my owner** \`$ userTag[$botownerid]\`
**My support guild [support guild](https://discord.gg/aZn5AEDwVy)**}}]
 $endif
  `
 }