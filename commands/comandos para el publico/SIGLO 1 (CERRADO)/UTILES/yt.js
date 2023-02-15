module.exports = ({
name: "yt",
code: `$author[1;Busqueda de YouTube;https://cdn.discordapp.com/attachments/1059853976595607612/1074848090076491847/youtube.gif]
$description[1;
  Aca tienes tus resultados $username[$authorID], espero que te guste lo que te encontre.
**Buscaste:** 
\`\`\`fix
$message\`\`\`

**Link:** 
\`\`\`fix
https://www.youtube.com/results?search_query=$replaceText[$message; ;+;-1]
\`\`\`]
$footer[Abajo tendras tu boton para que tengas tu respuesta.]
 $addButton[1;Click;link;https://www.youtube.com/results?search_query=$replaceText[$message; ;+;-1];no;💬]
$color[1;$getUserVar[colorMuichiro]]
$onlyIf[$message!=;Di algo para Buscar.]
$onlyif[$isMentioned[$mentioned[1]]==false;No puedes mencionar un usuario.]
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