module.exports = ({
name: "google",
code: `$author[1;Busqueda de Google;https://cdn.discordapp.com/attachments/1059853976595607612/1074848090491736164/va_google.png]
$description[1;
  Aca tienes tus resultados $username[$authorID], espero que te guste lo que te encontre.
**Buscaste:** 
\`\`\`fix
$message\`\`\`

**Link:** 
\`\`\`fix
https://www.google.com/search?q=$replaceText[$message; ;+;-1]
\`\`\`]
$footer[Abajo tendras tu boton para que tengas tu respuesta.]

  $addButton[1;Click;link;https://www.google.com/search?q=$replaceText[$message; ;+;-1];no;💬]
$color[1;$getUserVar[colorMuichiro]]
$onlyIf[$message!=;;:x:┃ Di algo para buscar.]
$onlyif[$isMentioned[$mentioned[1]]==false;:x_:┃No puedes mencionar un usuario.]

$thumbnail[1;$userAvatar]

$onlyIf[$getGlobalUserVar[blacklist]==false;{newEmbed:{title:Acceso denegado!}
{description:> Querido $userTag[$authorID] estas dentro del blacklist.

> Razon: **$getglobaluservar[rblacklist]**}
{color:ff0000}
{field:Que Puedo Hacer?:Lo que puedes hacer, es entrar al [servidor de soporte](https://discord.gg/aZn5AEDwVy) y discutir con $userTag[$botOwnerID] y saber el motivo de baneo:yes}}]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support guild](https://discord.gg/aZn5AEDwVy)**}}]
`

})