module.exports = {
name: "set-join-msg",
 description: "Mensaje de Bienvenida",
 category: "Bienvenida",
 aliases: ["wcm","swm"],
 code: `
 $onlyPerms[administrator;Lo sentimos, ¡pero necesita los permisos de **Administrador**!]
$onlyIf[$message!=;:x: Ninguno mensaje proporcionado, también puedes usar estas variables: 
\`\`\`
{user} = $username
{user.tag} = $userTag
{user.ping} = <@$authorID>
{guild} = $guildName\`\`\`]

$title[1;¡Mensaje de bienvenida establecido!]
$description[1;Nuevo mensaje de bienvenida:
$message]
$footer[1;Ahora configura la tarjeta de Bienvenida usando $getguildVar[prefix]setbackGround]
$addTimestamp[1]
$setguildVar[WelcomeMessage;$message]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
 `
 }