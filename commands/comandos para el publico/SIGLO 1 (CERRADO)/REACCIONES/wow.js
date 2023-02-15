module.exports = [{
  name: "wow",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;$username está asombrado :o;$userAvatar]
$image[1;$randomText[https://media1.tenor.com/images/2e6dc4687ab2f54cb95f127099ebd88f/tenor.gif?itemid=21572803;https://media1.tenor.com/images/75ecdb8367b50b191acf19621d721b5f/tenor.gif?itemid=22126962;https://1.bp.blogspot.com/-8THZsDvLvK4/YJivqjvG4xI/AAAAAAACJzk/9mv_DzHdJgU6ka4iLBLTIhbEIvXz24vwwCPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B5%2B-%2BNagatoro%2BSurprised.gif;https://1.bp.blogspot.com/-PTYz_IRKEvg/YJivqqpcJXI/AAAAAAACJzk/4WHdItJVAvkI7OIm5I8JaRb-wfyY2qzygCPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B5%2B-%2BNagatoro%2527s%2BWorst%2BNightmare.gif;https://media1.tenor.com/images/43cb4386020dd54c9f08fe2ca59c97bb/tenor.gif?itemid=22127031;http://giphy.com/gifs/u2dI2h52gAzNS;https://media1.tenor.com/images/c06091bcd17925c3480915d9e579fb1c/tenor.gif?itemid=15182762;https://i.gifer.com/yIL.gif;https://i.giphy.com/media/l0MYsgosS4l30gEJq/giphy.gif;https://i.pinimg.com/originals/b9/cb/2d/b9cb2d8ab8ad89e09304bd7d016b3904.gif;https://c.tenor.com/BQEdllCtcrcAAAAC/nakano-nino-wow.gif;https://c.tenor.com/XnXHEomWdaIAAAAd/yotsuba-nakano-the-quintessential-quintuplets.gif]]
$color[1;#eccb09]
$footer[1;:o]
$addTimestamp[1]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]s
$endif

$if[$getguildVar[english]==2]
$author[1;$username is in awe :o;$userAvatar]
$image[1;$randomText[https://media1.tenor.com/images/2e6dc4687ab2f54cb95f127099ebd88f/tenor.gif?itemid=21572803;https://media1.tenor.com/images/75ecdb8367b50b191acf19621d721b5f/tenor.gif?itemid=22126962;https://1.bp.blogspot.com/-8THZsDvLvK4/YJivqjvG4xI/AAAAAAACJzk/9mv_DzHdJgU6ka4iLBLTIhbEIvXz24vwwCPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B5%2B-%2BNagatoro%2BSurprised.gif;https://1.bp.blogspot.com/-PTYz_IRKEvg/YJivqqpcJXI/AAAAAAACJzk/4WHdItJVAvkI7OIm5I8JaRb-wfyY2qzygCPcBGAsYHg/s1920/Ijiranaide%252C%2BNagatoro-san%2B-%2BEpisode%2B5%2B-%2BNagatoro%2527s%2BWorst%2BNightmare.gif;https://media1.tenor.com/images/43cb4386020dd54c9f08fe2ca59c97bb/tenor.gif?itemid=22127031;http://giphy.com/gifs/u2dI2h52gAzNS;https://media1.tenor.com/images/c06091bcd17925c3480915d9e579fb1c/tenor.gif?itemid=15182762;https://i.gifer.com/yIL.gif;https://i.giphy.com/media/l0MYsgosS4l30gEJq/giphy.gif;https://i.pinimg.com/originals/b9/cb/2d/b9cb2d8ab8ad89e09304bd7d016b3904.gif;https://c.tenor.com/BQEdllCtcrcAAAAC/nakano-nino-wow.gif;https://c.tenor.com/XnXHEomWdaIAAAAd/yotsuba-nakano-the-quintessential-quintuplets.gif]]
$color[1;#eccb09]
$footer[1;:o]
$addTimestamp[1]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]