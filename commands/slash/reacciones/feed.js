module.exports = {
    name: "feed", 
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
    $if[$getguildVar[english]==1]
    $interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> le dio de comer a <@$interactionData[options.data[0].value]> 😋}{color:Random}{image: $jsonRequest[https://nekos.life/api/v2/img/feed;url]}{footer: Esta comida es para ti.}};;;all;no] 
    $endif

    $if[$getguildVar[english]==2]
    $interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> fed <@$interactionData[options.data[0].value]> 😋}{color:Random}{image: $jsonRequest[https://nekos.life/api/v2/img/feed;url]}{footer: This feed is for you.}};;;all;no]
    $endif
    `
    } 