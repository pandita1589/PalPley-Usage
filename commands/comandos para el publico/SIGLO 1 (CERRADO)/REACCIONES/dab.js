module.exports = [{
  name: "dab",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;$username hizo un dab en pleno $year, el futuro es hoy, ¿oíste viejo?;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/664507208309932042/D_TqSEeWsAAzZOl.jpg;https://cdn.discordapp.com/attachments/399448944889036801/664507325452779524/tenor.gif;https://cdn.discordapp.com/attachments/399448944889036801/664507062868246528/92f4bc00934f3bb4c15293a44406cb9b.jpg;https://cdn.discordapp.com/attachments/399448944889036801/555409463000170516/Rikka_Dab.jpeg;https://imgur.com/3IF6IBX.gif;https://cdn.discordapp.com/attachments/399448944889036801/664507088294379521/9adb3d2b46e3d3d6594f60fe428b72b9.jpg;https://cdn.discordapp.com/attachments/399448944889036801/664507544324276234/3dc8f919-38fc-412c-9e1b-94e27bdaaf91.png;https://cdn.discordapp.com/attachments/399448944889036801/664507450275266616/ecc786b1-d93c-4057-8da3-bdebfcb30a17.png;https://cdn.discordapp.com/attachments/399448944889036801/664507355022753792/1494582419_megumin_dabbing.jpg;https://cdn.discordapp.com/attachments/399448944889036801/664507620702421011/8837f05a-cf30-4363-877a-ddeaab7ced3d.png]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username makes a dab in $year... why?;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/664507208309932042/D_TqSEeWsAAzZOl.jpg;https://cdn.discordapp.com/attachments/399448944889036801/664507325452779524/tenor.gif;https://cdn.discordapp.com/attachments/399448944889036801/664507062868246528/92f4bc00934f3bb4c15293a44406cb9b.jpg;https://cdn.discordapp.com/attachments/399448944889036801/555409463000170516/Rikka_Dab.jpeg;https://imgur.com/3IF6IBX.gif;https://cdn.discordapp.com/attachments/399448944889036801/664507088294379521/9adb3d2b46e3d3d6594f60fe428b72b9.jpg;https://cdn.discordapp.com/attachments/399448944889036801/664507544324276234/3dc8f919-38fc-412c-9e1b-94e27bdaaf91.png;https://cdn.discordapp.com/attachments/399448944889036801/664507450275266616/ecc786b1-d93c-4057-8da3-bdebfcb30a17.png;https://cdn.discordapp.com/attachments/399448944889036801/664507355022753792/1494582419_megumin_dabbing.jpg;https://cdn.discordapp.com/attachments/399448944889036801/664507620702421011/8837f05a-cf30-4363-877a-ddeaab7ced3d.png]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]
