module.exports = [{
  name: "happy",
  aliases: "feliz",
  $if : 'old',
  code: `
  $if[$getguildVar[english]==2]
  $author[1;$username Se puso feliz :P ;$userAvatar]
$image[1;$randomText[https://media.giphy.com/media/JWGgsu82QDoEE/giphy.gif;https://media.giphy.com/media/13qZ2twbuC5kac/giphy.gif;https://media.giphy.com/media/XMVsIvkUjZUqc/giphy.gif;https://media.giphy.com/media/w7dn7xRSHGZUs/giphy.gif;https://media.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif;https://media.giphy.com/media/28AEi3TIvtSP6/giphy.gif;https://media.giphy.com/media/cxPtMDHG8Ljry/giphy.gif;https://media.giphy.com/media/gIYntrxFKsImxgKwBm/giphy.gif;https://media.giphy.com/media/MG1B6RPKn8OLC/giphy.gif;https://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif;https://media.giphy.com/media/uZ2KFV4yEMkYLuVxJ0/giphy.gif;https://media.giphy.com/media/kKHA3hzsXbD00hchbd/giphy.gif;https://imgur.com/ZUhX2ks;https://64.media.tumblr.com/c3cd11c3bc6b4b62365adde39cc897a7/b308f2ae17339698-80/s1280x1920/e7d4f1bab16b855cf26fe6cfbe8f5175533f3073.gif]]
$color[1;#eccb09]
$footer[1;:P]
$addTimestamp[1]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username esta feliz:D;$userAvatar]
$image[1;$randomText[https://media.giphy.com/media/JWGgsu82QDoEE/giphy.gif;https://media.giphy.com/media/13qZ2twbuC5kac/giphy.gif;https://media.giphy.com/media/XMVsIvkUjZUqc/giphy.gif;https://media.giphy.com/media/w7dn7xRSHGZUs/giphy.gif;https://media.giphy.com/media/bqSkJ4IwNcoZG/giphy.gif;https://media.giphy.com/media/28AEi3TIvtSP6/giphy.gif;https://media.giphy.com/media/cxPtMDHG8Ljry/giphy.gif;https://media.giphy.com/media/gIYntrxFKsImxgKwBm/giphy.gif;https://media.giphy.com/media/MG1B6RPKn8OLC/giphy.gif;https://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif;https://media.giphy.com/media/uZ2KFV4yEMkYLuVxJ0/giphy.gif;https://media.giphy.com/media/kKHA3hzsXbD00hchbd/giphy.gif;https://imgur.com/ZUhX2ks;https://64.media.tumblr.com/c3cd11c3bc6b4b62365adde39cc897a7/b308f2ae17339698-80/s1280x1920/e7d4f1bab16b855cf26fe6cfbe8f5175533f3073.gif]]
$color[1;#eccb09]
$footer[1;:)]
$addTimestamp[1]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]