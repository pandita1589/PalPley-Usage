module.exports = {
 name: "set-join-channel",
 description: "Canal de Bienvenida",
 category: "Bienvenida",
 aliases: ["wc","swc"],
 code: `
 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
 $onlyPerms[managechannels;Lo sentimos, ¡pero necesita los permisos de **ManageChannels**! ]
 $onlyIf[$mentionedChannels[1]!=;Puedes mencionar un canal para configurarlo como canal de bienvenida]
 $title[1;Listo!]
 $color[1;00FF00]
 $description[1;Configuré el canal de bienvenida en <#$mentionedChannels[1]>!]
 $footer[1;Ahora configura el mensaje de bienvenida usando $getguildVar[prefix]setjoinmsg]
 $setguildVar[WelcomeChannel;$mentionedChannels[1]]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]

 `
 }