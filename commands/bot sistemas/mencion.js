module.exports = ({
    name: "<@$finduser[$clientID]>",
     nonPrefixed: true,
    code: `
    $title[1;Estoy despierto.]
    $description[1;Hola $username en que podria ayudarte?, por las dudas mi prefix en este server es \`$getguildVar[prefix]\`.]
    $color[1;$getUserVar[colorMuichiro]]
    $addTimestamp[1]
    $thumbnail[1;$userAvatar;$username]
    $addButton[1;Web;link;https://palpley-2.andremm1.repl.co/;no]
`
})