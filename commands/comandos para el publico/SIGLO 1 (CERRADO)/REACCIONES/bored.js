module.exports = [{
  name: "bored",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;$username está muy aburrido.;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/698947054252195840/fe3ea02a-0047-4ee7-b7e3-1f0a48d39870.gif;https://cdn.discordapp.com/attachments/399448944889036801/758990056789639178/tumblr_82fc4646cf77cec0a55cd89f91a95597_b90c0e9a_1280.gif;https://cdn.discordapp.com/attachments/399448944889036801/575813735055097856/1489212099_NIfMBcDGjxtci634nf7kWF3abfVXPwgC_1.gif;https://imgur.com/jnrlaeK.gif;https://cdn.discordapp.com/attachments/399448944889036801/782331799233757204/Bored.gif;https://cdn.discordapp.com/attachments/399448944889036801/502597556862320666/gif_20181018_163846.gif;https://imgur.com/wMJ1Bn6.gif;https://cdn.discordapp.com/attachments/399448944889036801/659843734841720892/tumblr_lqnqjpN7SF1qi7m3fo1_500.gif;https://cdn.discordapp.com/attachments/399448944889036801/753400074176036874/79616cf5-62a4-4bad-9189-1adfd0ad30d4.gif;https://cdn.discordapp.com/attachments/399448944889036801/575804921111379970/GrandSelfassuredCur-small.gif;https://imgur.com/pcEpRm4.gif;https://cdn.discordapp.com/attachments/399448944889036801/502597555939442698/gif_20181018_164123.gif;https://cdn.discordapp.com/attachments/399448944889036801/763814362359660614/80d07cfd-6843-4966-b1f8-8537f4dfdf57.gif;https://cdn.discordapp.com/attachments/399448944889036801/760867437713031239/e1195d2d-d19e-4459-9b63-89c239979457.gif;https://cdn.discordapp.com/attachments/399448944889036801/810663823458697216/463b94e467f682c5e50716fdcdba3ea8.gif;https://imgur.com/4KZ5y8i.gif;https://imgur.com/qRP3KgB.gif;https://cdn.discordapp.com/attachments/399448944889036801/650317547459051520/giphy.gif;https://cdn.discordapp.com/attachments/399448944889036801/803573645989511199/GaBA0hQ.gif;https://cdn.discordapp.com/attachments/399448944889036801/502652157959340042/gif_20181018_201703.gif;https://cdn.discordapp.com/attachments/399448944889036801/659843676109013022/giphy.gif;https://imgur.com/deM472C.gif;https://cdn.discordapp.com/attachments/399448944889036801/659843699701710849/tumblr_mmbqmuwu5V1rvkw6no4_500.gif;https://cdn.discordapp.com/attachments/399448944889036801/765969828250255410/ec709f95-38a2-411b-be78-49d2c3af9a5f.gif;https://cdn.discordapp.com/attachments/399448944889036801/502597556417855488/gif_20181018_163803.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username is bored to death.;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/698947054252195840/fe3ea02a-0047-4ee7-b7e3-1f0a48d39870.gif;https://cdn.discordapp.com/attachments/399448944889036801/758990056789639178/tumblr_82fc4646cf77cec0a55cd89f91a95597_b90c0e9a_1280.gif;https://cdn.discordapp.com/attachments/399448944889036801/575813735055097856/1489212099_NIfMBcDGjxtci634nf7kWF3abfVXPwgC_1.gif;https://imgur.com/jnrlaeK.gif;https://cdn.discordapp.com/attachments/399448944889036801/782331799233757204/Bored.gif;https://cdn.discordapp.com/attachments/399448944889036801/502597556862320666/gif_20181018_163846.gif;https://imgur.com/wMJ1Bn6.gif;https://cdn.discordapp.com/attachments/399448944889036801/659843734841720892/tumblr_lqnqjpN7SF1qi7m3fo1_500.gif;https://cdn.discordapp.com/attachments/399448944889036801/753400074176036874/79616cf5-62a4-4bad-9189-1adfd0ad30d4.gif;https://cdn.discordapp.com/attachments/399448944889036801/575804921111379970/GrandSelfassuredCur-small.gif;https://imgur.com/pcEpRm4.gif;https://cdn.discordapp.com/attachments/399448944889036801/502597555939442698/gif_20181018_164123.gif;https://cdn.discordapp.com/attachments/399448944889036801/763814362359660614/80d07cfd-6843-4966-b1f8-8537f4dfdf57.gif;https://cdn.discordapp.com/attachments/399448944889036801/760867437713031239/e1195d2d-d19e-4459-9b63-89c239979457.gif;https://cdn.discordapp.com/attachments/399448944889036801/810663823458697216/463b94e467f682c5e50716fdcdba3ea8.gif;https://imgur.com/4KZ5y8i.gif;https://imgur.com/qRP3KgB.gif;https://cdn.discordapp.com/attachments/399448944889036801/650317547459051520/giphy.gif;https://cdn.discordapp.com/attachments/399448944889036801/803573645989511199/GaBA0hQ.gif;https://cdn.discordapp.com/attachments/399448944889036801/502652157959340042/gif_20181018_201703.gif;https://cdn.discordapp.com/attachments/399448944889036801/659843676109013022/giphy.gif;https://imgur.com/deM472C.gif;https://cdn.discordapp.com/attachments/399448944889036801/659843699701710849/tumblr_mmbqmuwu5V1rvkw6no4_500.gif;https://cdn.discordapp.com/attachments/399448944889036801/765969828250255410/ec709f95-38a2-411b-be78-49d2c3af9a5f.gif;https://cdn.discordapp.com/attachments/399448944889036801/502597556417855488/gif_20181018_163803.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]