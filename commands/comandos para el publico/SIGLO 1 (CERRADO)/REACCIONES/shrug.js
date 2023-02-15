module.exports = [{
  name: "shrug",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;Parece que a $username no le interesa;$userAvatar]
$image[1;$randomText[https://imgur.com/Grq8OP5.gif;https://imgur.com/yeSo0ry.gif;https://cdn.discordapp.com/attachments/399448944889036801/551469162241851392/1541388467_0515797c67313f59ecce8b4321f7936c52edeeee_hq.gif;https://cdn.discordapp.com/attachments/399448944889036801/736274931855261793/47b0cd43-a649-40d5-b8ea-288ed61069fb.gif;https://imgur.com/TTpOPMi.gif;https://thumbs.gfycat.com/MedicalDazzlingAzurewingedmagpie-size_restricted.gif;https://imgur.com/LBxVHfd.gif;https://imgur.com/5QHyD0W.gif;https://imgur.com/6Cd1xuj.gif;https://cdn.discordapp.com/attachments/399448944889036801/608651124664172544/shrug.gif;https://cdn.discordapp.com/attachments/399448944889036801/702700669223567380/7a3bf267-3090-4acc-8506-32943746e87c.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;It seems that $username is not interested;$userAvatar]
$image[1;$randomText[https://imgur.com/Grq8OP5.gif;https://imgur.com/yeSo0ry.gif;https://cdn.discordapp.com/attachments/399448944889036801/551469162241851392/1541388467_0515797c67313f59ecce8b4321f7936c52edeeee_hq.gif;https://cdn.discordapp.com/attachments/399448944889036801/736274931855261793/47b0cd43-a649-40d5-b8ea-288ed61069fb.gif;https://imgur.com/TTpOPMi.gif;https://thumbs.gfycat.com/MedicalDazzlingAzurewingedmagpie-size_restricted.gif;https://imgur.com/LBxVHfd.gif;https://imgur.com/5QHyD0W.gif;https://imgur.com/6Cd1xuj.gif;https://cdn.discordapp.com/attachments/399448944889036801/608651124664172544/shrug.gif;https://cdn.discordapp.com/attachments/399448944889036801/702700669223567380/7a3bf267-3090-4acc-8506-32943746e87c.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]