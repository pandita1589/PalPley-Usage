module.exports = ({
name: "math",
code: `
$title[📐 Calculando..]
$thumbnail[1;$useravatar]
$description[1;

**Pregunta:**
\`\`\`fix
$message
\`\`\`

**Respuesta:**
\`\`\`fix
$math[$message]
\`\`\`]
$color[$getUserVar[colorMuichiro]]
$onlyIf[$getVar[lockdown]==off;{newEmbed: {title:**Comandos en mantenimiento.**} {color:RED} {thumbnail:https://cdn.discordapp.com/emojis/916695734412255282.png?size=128} {description:**Hola $username mis comandos ahora estan en mantenimiento, no puedo decirte cuanto tiempo estare haci, pero pronto estaran activos mis comandos, si crees que es un bug comunicate con mi owner** \`$userTag[$botownerid]\`
**Mi servidor de sorpote [support server](https://discord.gg/aZn5AEDwVy)**}}]
`
})