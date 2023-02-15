module.exports = [{
  name: "die",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;$username se siente muerto por dentro... x.x;$userAvatar]
$image[1;$randomText[https://imgur.com/bWQYISt.gif;https://imgur.com/lFlPu7b.gif;https://imgur.com/wIXo8S3.gif;https://imgur.com/F4OMmnY.gif;https://imgur.com/9aJkrm1.gif;https://imgur.com/C9DUrIJ.gif;https://imgur.com/rRmYPNu.gif;https://imgur.com/MsasLfM.gif;https://imgur.com/HNGMSBI.gif;https://imgur.com/57ev39K.gif;https://imgur.com/ocg1f3u.gif;https://imgur.com/orFLVOG.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username feels dead inside... x.x;$userAvatar]
$image[1;$randomText[https://imgur.com/bWQYISt.gif;https://imgur.com/lFlPu7b.gif;https://imgur.com/wIXo8S3.gif;https://imgur.com/F4OMmnY.gif;https://imgur.com/9aJkrm1.gif;https://imgur.com/C9DUrIJ.gif;https://imgur.com/rRmYPNu.gif;https://imgur.com/MsasLfM.gif;https://imgur.com/HNGMSBI.gif;https://imgur.com/57ev39K.gif;https://imgur.com/ocg1f3u.gif;https://imgur.com/orFLVOG.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]