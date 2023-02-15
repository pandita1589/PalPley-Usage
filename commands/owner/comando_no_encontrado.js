module.exports = ({
name: "$alwaysExecute",
 code: `

    $author[$username[$authorID]#$discriminator[$authorID]
    $thumbnail[$useravatar]
    $description[$customEmoji[nope] Este comando no esta en mi lista de comandos!]
    $addField[Como se usa:;\`\`\`fix
 $getguildVar[prefix][comando]\`\`\`;yes]
 
 $addField[Ejemplo:;\`\`\`fix
 $getguildVar[prefix]help\`\`\`;yes]

 $color[$getUserVar[colorMuichiro]]
 $image[$getUserVar[imgMuichiro]]
 $deleteIn[11s]
 $onlyIf[$commandinfo[$replaceText[$message[1];$getguildVar[prefix];];name]==;]
 $onlyIf[$stringStartsWith[$message;$getguildVar[prefix]]!=false;]`
})