module.exports = ({
    name: "eval",
    code: `
    $eval[$message]
    $onlyIf[$authorID==$botOwnerID;Solo mi idolo $userTag[$botOwnerID] puede usar esto!]
    $argsCheck[>0;{newEmbed:{title:Error!}{description:Escribe algo $userTag o como quieres que te responda?}{color:Red}{timestamp:ms}}]
    `
})