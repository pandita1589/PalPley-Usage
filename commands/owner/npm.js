module.exports = [{
name: "install-pack",
code: `
$thumbnail[1;$guildIcon]
$description[1;$exec[$message]]
$color[1;Random]
$onlyIf[$authorID==$botOwnerID;Solo mi idolo $userTag[$botOwnerID] puede usar esto!]
`
}]