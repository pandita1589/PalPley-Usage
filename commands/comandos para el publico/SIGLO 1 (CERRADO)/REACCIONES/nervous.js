module.exports = [{
  name: "nervous",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[$username está nervioso...;$userAvatar]
$image[1;$randomText[https://media.giphy.com/media/oZo3fcCF2OcN2/giphy.gif;https://media.giphy.com/media/12nMEydAAgCxYA/giphy.gif;https://i.redd.it/ee816hcqu4v61.gif;https://i.redd.it/amr1ohcqu4v61.gif;https://1.bp.blogspot.com/-7CdElG6A5uM/YJivquDqifI/AAAAAAACJzk/ueHZ4LxgNPA11w54D3cBzUUgvu7EBrAOACPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B5%2B-%2BSenpai%2BDraws%2BCloser%2Bto%2BNagatoro%2527s%2BArmpit.gif;https://c.tenor.com/1ZOJVyfsi9cAAAAd/the-quintessential-quintuplets-itsuki.gif]]
$color[1;#eccb09]
$footer[1;:/]
$addTimestamp[1]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username is nervous...;$userAvatar]
$image[1;$randomText[https://media.giphy.com/media/oZo3fcCF2OcN2/giphy.gif;https://media.giphy.com/media/12nMEydAAgCxYA/giphy.gif;https://i.redd.it/ee816hcqu4v61.gif;https://i.redd.it/amr1ohcqu4v61.gif;https://1.bp.blogspot.com/-7CdElG6A5uM/YJivquDqifI/AAAAAAACJzk/ueHZ4LxgNPA11w54D3cBzUUgvu7EBrAOACPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B5%2B-%2BSenpai%2BDraws%2BCloser%2Bto%2BNagatoro%2527s%2BArmpit.gif;https://c.tenor.com/1ZOJVyfsi9cAAAAd/the-quintessential-quintuplets-itsuki.gif]]
$color[1;#eccb09]
$footer[1;:/]
$addTimestamp[1]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]