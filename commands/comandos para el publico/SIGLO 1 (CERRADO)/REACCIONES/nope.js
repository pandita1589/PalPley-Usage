module.exports = [{
  name: "nope",
  $if : 'old',
  code: `
$if[$getguildVar[english]==1]
$author[NOPE!;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/712058751020171314/a1d7868d43f3bb7849d86971f1b105b2.gif;https://cdn.discordapp.com/attachments/399448944889036801/759486770483691570/tenor.gif;https://imgur.com/kqXnYib.gif;https://cdn.discordapp.com/attachments/399448944889036801/754060917821669426/5263af83-e3a4-4a92-8580-57f2e89272fb.gif;https://imgur.com/3FYDa8d.gif;https://data.whicdn.com/images/157966314/original.gif;https://imgur.com/yPi3Wjl.gif;https://cdn.discordapp.com/attachments/399448944889036801/744942427910963332/d367ec8f-9934-4e90-83bb-757da3cc1a7c.gif;https://imgur.com/bniXJKb.gif;https://cdn.discordapp.com/attachments/399448944889036801/728964168077541407/1a3157cbb7154ed1e5a6c30fe6f553a1.gif;https://imgur.com/Ha2CCXp.gif;https://imgur.com/pbl1CtF.gif;https://imgur.com/OYXL1B2.gif;https://cdn.discordapp.com/attachments/399448944889036801/702700405775138907/a6363557-8e8e-4ca2-b93c-2e39954b8327.gif;https://imgur.com/OMbai7y.gif;https://cdn.discordapp.com/attachments/399448944889036801/822955037088677938/3816f6a52bee5c8cdb555d52395b25f0.gif;https://cdn.discordapp.com/attachments/399448944889036801/747831613404217445/f4a49c86-2b3c-4426-84aa-62b8bd688dcd.gif;https://i.kym-cdn.com/photos/images/original/001/087/918/e5c.gif;https://cdn.discordapp.com/attachments/399448944889036801/615280306651529277/8e3c32d9-282d-4538-85f8-5035838ec189.gif;https://cdn.discordapp.com/attachments/399448944889036801/597190816024494100/jGYMqAy.gif;https://imgur.com/FgdX64X.gif;https://imgur.com/XpFyPA0.gif;https://cdn.discordapp.com/attachments/399448944889036801/774815651533553684/tenor-1.gif;https://uploads.disquscdn.com/images/87717a429aaa68b148ceae4bcb420e818e6e5a020f0df531cc678dc2bad7b04d.gif;https://imgur.com/1f0eahF.gif;https://i.kym-cdn.com/photos/images/newsfeed/000/700/910/6c7.gif;https://cdn.discordapp.com/attachments/399448944889036801/748886985191587951/91b35fda-59e0-4abe-bbfd-c27b49c3eb24.gif;https://imgur.com/Sk0NuM4.gif;https://imgur.com/QxGkMWD.gif;https://pa1.narvii.com/5709/283cd338d17bccabdcffe4022200bce33de9a26f_hq.gif;https://imgur.com/Ks9Q81G.gif;https://imgur.com/GieOsOk.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[NOPE!;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/712058751020171314/a1d7868d43f3bb7849d86971f1b105b2.gif;https://cdn.discordapp.com/attachments/399448944889036801/759486770483691570/tenor.gif;https://imgur.com/kqXnYib.gif;https://cdn.discordapp.com/attachments/399448944889036801/754060917821669426/5263af83-e3a4-4a92-8580-57f2e89272fb.gif;https://imgur.com/3FYDa8d.gif;https://data.whicdn.com/images/157966314/original.gif;https://imgur.com/yPi3Wjl.gif;https://cdn.discordapp.com/attachments/399448944889036801/744942427910963332/d367ec8f-9934-4e90-83bb-757da3cc1a7c.gif;https://imgur.com/bniXJKb.gif;https://cdn.discordapp.com/attachments/399448944889036801/728964168077541407/1a3157cbb7154ed1e5a6c30fe6f553a1.gif;https://imgur.com/Ha2CCXp.gif;https://imgur.com/pbl1CtF.gif;https://imgur.com/OYXL1B2.gif;https://cdn.discordapp.com/attachments/399448944889036801/702700405775138907/a6363557-8e8e-4ca2-b93c-2e39954b8327.gif;https://imgur.com/OMbai7y.gif;https://cdn.discordapp.com/attachments/399448944889036801/822955037088677938/3816f6a52bee5c8cdb555d52395b25f0.gif;https://cdn.discordapp.com/attachments/399448944889036801/747831613404217445/f4a49c86-2b3c-4426-84aa-62b8bd688dcd.gif;https://i.kym-cdn.com/photos/images/original/001/087/918/e5c.gif;https://cdn.discordapp.com/attachments/399448944889036801/615280306651529277/8e3c32d9-282d-4538-85f8-5035838ec189.gif;https://cdn.discordapp.com/attachments/399448944889036801/597190816024494100/jGYMqAy.gif;https://imgur.com/FgdX64X.gif;https://imgur.com/XpFyPA0.gif;https://cdn.discordapp.com/attachments/399448944889036801/774815651533553684/tenor-1.gif;https://uploads.disquscdn.com/images/87717a429aaa68b148ceae4bcb420e818e6e5a020f0df531cc678dc2bad7b04d.gif;https://imgur.com/1f0eahF.gif;https://i.kym-cdn.com/photos/images/newsfeed/000/700/910/6c7.gif;https://cdn.discordapp.com/attachments/399448944889036801/748886985191587951/91b35fda-59e0-4abe-bbfd-c27b49c3eb24.gif;https://imgur.com/Sk0NuM4.gif;https://imgur.com/QxGkMWD.gif;https://pa1.narvii.com/5709/283cd338d17bccabdcffe4022200bce33de9a26f_hq.gif;https://imgur.com/Ks9Q81G.gif;https://imgur.com/GieOsOk.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif
`}]