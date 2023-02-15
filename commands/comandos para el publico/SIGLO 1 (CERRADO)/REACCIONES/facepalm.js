module.exports = [{
  name: "facepalm",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;$username cree que es absurdo;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/722452395539431454/desconocido.gif;https://cdn.discordapp.com/attachments/399448944889036801/755604746672406619/dfc4f7700f3f757f816c5a9c6eec2d6d.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506155167907840/unnamed_3.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506153846439938/unnamed_2.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506063173976074/unnamed_4.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506062284914699/unnamed_6.gif;https://66.media.tumblr.com/adbe0134565db0b342db98db3aa0f662/tumblr_o0jiegjcTD1uqrfrco1_500.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506153108373525/unnamed.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506064088465418/unnamed_5.gif;]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username thought it was absurd;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/722452395539431454/desconocido.gif;https://cdn.discordapp.com/attachments/399448944889036801/755604746672406619/dfc4f7700f3f757f816c5a9c6eec2d6d.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506155167907840/unnamed_3.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506153846439938/unnamed_2.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506063173976074/unnamed_4.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506062284914699/unnamed_6.gif;https://66.media.tumblr.com/adbe0134565db0b342db98db3aa0f662/tumblr_o0jiegjcTD1uqrfrco1_500.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506153108373525/unnamed.gif;https://cdn.discordapp.com/attachments/393558002726338561/464506064088465418/unnamed_5.gif;]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]