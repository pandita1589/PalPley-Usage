module.exports = [{
    name: "lockdown",
    aliases: ['ld','lockd','ldown'],
    code: `
    $awaitMessages[$channelId;$authorid;5m;y,n;y,n;Se acabo el tiempo.;{}]
    $title[1;**Comando lockdown**]
    $color[1;$getUserVar[colorMuichiro]]
    $thumbnail[1;$userAvatar]
    $description[Bloquea los comandos del bot para todos los servidores.]
    $image[$getUserVar[imgComan]]
    $description[1;**Escoge:**
    ** y o n **]
    $onlyIf[$authorID==$botOwnerID;Solo mi idolo $userTag[$botOwnerID] puede usar esto!]
    `
    }, {
    type: "awaited",
    name: "y",
    code: `
    **All commands have been locked**
    $setVar[lockdown;on]`
    }, {
    type: "awaited",
    name: "n",
    code: `
    **Action has been stopped**`
    }]