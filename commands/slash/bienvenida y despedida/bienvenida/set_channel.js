module.exports = {
    name: "set-join-channel", 
    type: "interaction",
    prototype: "slash",
    code: `
$interactionUpdate[;{newEmbed:{title:Listo!}{color:$getUserVar[colorMuichiro]}{description:Configuré el canal de bienvenida en!}{footer:Ahora configura el mensaje de bienvenida usando $getguildVar[prefix]set-join-msg}}]
    $setguildVar[WelcomeChannel;$mentionedChannels[1]]
    `
    } 