module.exports = {
    name: "kiss", 
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
    $if[$getguildVar[english]==1]
    $interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> besaste a <@$interactionData[options.data[0].value]> ❤️}{color:Random}{image: $jsonRequest[https://nekos.life/api/v2/img/kiss;url]}};;;all;no]
    $endif
    
    $if[$getguildVar[english]==2]
    $interactionReply[;{newEmbed:{description: <@$interactionData[author.id]> you kissed <@$interactionData[options.data[0].value]> ❤️}{color:Random}{image: $jsonRequest[ https://nekos.life/api/v2/img/kiss;url]}};;;all;no]
    $endif
    `
   } 