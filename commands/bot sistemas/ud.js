module.exports = [{
    name: "unlock",
    aliases: ['ud','udown'],
    code: `
    $awaitMessages[$channelId;$authorid;5m;y,n;yy,nn;El tiempo de espera del comando se agoto.;{}]
    $title[1;**Comando de desbloqueo**]
    $color[1;$getUserVar[colorMuichiro]]
    $thumbnail[1;$userAvatar]
    $image[$getUserVar[imgComan]]
    $description[1;**¿Estás seguro de que quieres desbloquear todos los comandos?**
    ** y o n **]
    $onlyIf[$authorID==$botOwnerID;Solo mi idolo $userTag[$botOwnerID] puede usar esto!]`
    }, {
    type: "awaited",
    name: "yy",
    code: `
    **Todos los comandos han sido desbloqueados.**
    $setVar[lockdown;off]`
    }, {
    type: "awaited",
    name: "nn",
    code: `
    **La acción se ha detenido.**
    `
    }]