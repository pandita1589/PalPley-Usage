module.exports = (AoiClient) => {
    
    ////Bienvenida
AoiClient.joinCommand({ 
    channel:"$getGuildvar[WelcomeChannel]", 
    $if: "old",
    code:`
    $title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
    $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]
    ]
     $image[1;$getguildVar[bg]]
    $footer[1;Ahora $guildName tiene $membersCount usuarios!;$guildIcon]
    $addTimestamp[1]
    $color[1;$getguildVar[WelcomeColor]]
   `}) 
   
   //////Despedida
   
   AoiClient.leaveCommand({ 
    channel:"$getGuildvar[LeaveChannel]", 
    code:`$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getGuildvar[LeaveTitle];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
    $description[1;
   $replaceText[$replaceText[$replaceText[$replaceText[$getGuildvar[LeaveMessage];{user};$username];{user.ping};<@$authorID>];{guild};$guildName];{user.tag};$userTag[$authorID]]]
   
    $image[1;$getGuildvar[lbg]]
    $color[1;$getGuildvar[LeaveColor]]
   $footer[1;Ahora $guildName tiene $membersCount usuarios!;$guildIcon]
    $addTimestamp[1]
   `}) 
  
  
}