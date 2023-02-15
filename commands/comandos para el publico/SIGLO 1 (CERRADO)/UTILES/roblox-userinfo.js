module.exports = {
    name: "roblox-userinfo",
    code: `$title[1;Success!] 
    $color[1;$getUserVar[colorMuichiro]] 

    $addField[Display Name:;\`\`\`fix
    $getObjectProperty[data[0].displayName]\`\`\`;yes]

    $addField[Username:;\`\`\`fix
    $getObjectProperty[data[0].name]\`\`\`;yes]

    $addField[Roblox ID:;\`\`\`fix
    $getObjectProperty[data[0].id]\`\`\`;no]

    $addField[hasVerifiedBadge:;\`\`\`fix
    $getObjectProperty[data[0].hasVerifiedBadge]\`\`\`;no]
    $description[1;Aca esta el usario **$getObjectProperty[data[0].name]**] 
    $footer[1;$executionTime ms $addtimestamp] 
       $image[1;$get[robloxav_link]] 
       $let[robloxav_link;https://tr.rbxcdn.com/$splitText[4]/$splitText[5]/$splitText[6]/Avatar/Png] 
    
    $textSplit[$get[roblox_av];/]  $let[roblox_av;$jsonRequest[https://thumbnails.roblox.com/v1/users/avatar?userIds=$getObjectProperty[data[0].id]&size=720x720&format=Png&isCircular=false]]
    
    $createObject[$httpRequest[https://users.roblox.com/v1/usernames/users;POST; {"usernames":["$message[1]"],"excludeBannedUsers":true};;Conent-Type:text/json]]
    $argsCheck[1;username?]
    $suppressErrors[Error! is the username correct?]`
    }