module.exports = [{
  name: "pout",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;$username se ha molestado un poquito... hmph;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/719513003103485952/86b24612-5172-445f-8a8a-3728ce44d1e1.gif;https://cdn.discordapp.com/attachments/399448944889036801/808401435137409074/16fe8099687f0f735c0ef104ede4b258.gif;https://cdn.discordapp.com/attachments/399448944889036801/656520342038380554/8a526a10-b7a1-416f-8632-5c8988412220.gif;https://imgur.com/VfsmOM4.gif;https://cdn.discordapp.com/attachments/399448944889036801/692934907608957018/Anime-Tsuujou-kougeki-ga-zentai-kougeki-de-ni-kai-kougeki-no-okaasan-wa-suki-desu-ka-Re-Zero-Kara-Ha.png;https://imgur.com/8peoL2c.gif;https://cdn.discordapp.com/attachments/399448944889036801/564138322738544641/unnamed_2.gif;https://cdn.discordapp.com/attachments/399448944889036801/749275908103340143/9d49cd67-2396-4b94-b660-657ab497047d.gif;https://imgur.com/OyQqiYt.gif;https://cdn.discordapp.com/attachments/399448944889036801/754453477060640888/1f5d9c19-a6e5-4748-9034-4cc7197b3d21.gif;https://imgur.com/kxolwgL.gif;https://imgur.com/yk5B41c.gif;https://cdn.discordapp.com/attachments/399448944889036801/729291288268111902/601482f9-2aed-4353-9fc4-004b9d4387a0.gif;https://cdn.discordapp.com/attachments/399448944889036801/753380689935597688/4b32b9c6-4357-4d3e-8a8c-9c8d2ec9d3f7.gif;https://cdn.discordapp.com/attachments/399448944889036801/754080260718460928/c7b60b24-5d83-4f97-a06f-9662fd3dbc32.gif;https://cdn.discordapp.com/attachments/399448944889036801/753397371022606426/f65be4bc-a05b-4aaf-a5e9-bc8c88156c11.gif;https://imgur.com/InEHEhT.gif;https://cdn.discordapp.com/attachments/399448944889036801/655105390509424641/e44bfb552ee11c39e91d0d06de65758c.gif;https://imgur.com/xw3RMhC.gif;https://cdn.discordapp.com/attachments/399448944889036801/701454589261512744/97d9b111-2796-429a-863e-86b252bffbdd.gif;https://cdn.discordapp.com/attachments/399448944889036801/754305938214748201/565ef885-ad00-4096-89d8-0b7e830b79f6.gif;https://imgur.com/739hy8u.gif;https://cdn.discordapp.com/attachments/399448944889036801/596104164744888350/tenor_18.gif;https://imgur.com/Wd6QwUb.gif;https://imgur.com/F4ZLudB.gif;https://cdn.discordapp.com/attachments/399448944889036801/596116135351549953/018259f09f8a7d666a97ba9e24864bfee31d1a94_00.gif;https://cdn.discordapp.com/attachments/399448944889036801/810669735648952341/a2cde795512dffb7ed89448a14d7e68e.gif;https://imgur.com/IO34js9.gif;https://imgur.com/ZEuVEyk.gif;https://cdn.discordapp.com/attachments/399448944889036801/701454674951405608/282b9647-0dbe-4200-97c0-c8ed91b71145.gif;https://cdn.discordapp.com/attachments/399448944889036801/751445482164846603/5f466321-1bdd-4be8-ad31-bdd0c13e42b0.gif;https://cdn.discordapp.com/attachments/399448944889036801/754424039921025184/42238cdd-4130-48d7-ba7c-5982123161d2.gif;https://imgur.com/hxAkqb5.gif;https://imgur.com/TSLLnJM.gif;https://cdn.discordapp.com/attachments/399448944889036801/750702930004410388/15a33ec5-0d84-4132-bcb3-eedf9c574971.gif;https://imgur.com/t8D0MhD.gif;https://cdn.discordapp.com/attachments/399448944889036801/768864969897934848/8536e43eb56101806a857b8bf52f6b2a.gif;https://cdn.discordapp.com/attachments/399448944889036801/564138323262701586/unnamed_3.gif;https://c.tenor.com/KXtIHmHFN9sAAAAC/ichika-nakano-ichika-nakano-pout.gif;https://c.tenor.com/8wFTOlfcPYoAAAAd/itsuki-nakano.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username got a little upset... hmph;$userAvatar]
$image[1;$randomText[https://cdn.discordapp.com/attachments/399448944889036801/719513003103485952/86b24612-5172-445f-8a8a-3728ce44d1e1.gif;https://cdn.discordapp.com/attachments/399448944889036801/808401435137409074/16fe8099687f0f735c0ef104ede4b258.gif;https://cdn.discordapp.com/attachments/399448944889036801/656520342038380554/8a526a10-b7a1-416f-8632-5c8988412220.gif;https://imgur.com/VfsmOM4.gif;https://cdn.discordapp.com/attachments/399448944889036801/692934907608957018/Anime-Tsuujou-kougeki-ga-zentai-kougeki-de-ni-kai-kougeki-no-okaasan-wa-suki-desu-ka-Re-Zero-Kara-Ha.png;https://imgur.com/8peoL2c.gif;https://cdn.discordapp.com/attachments/399448944889036801/564138322738544641/unnamed_2.gif;https://cdn.discordapp.com/attachments/399448944889036801/749275908103340143/9d49cd67-2396-4b94-b660-657ab497047d.gif;https://imgur.com/OyQqiYt.gif;https://cdn.discordapp.com/attachments/399448944889036801/754453477060640888/1f5d9c19-a6e5-4748-9034-4cc7197b3d21.gif;https://imgur.com/kxolwgL.gif;https://imgur.com/yk5B41c.gif;https://cdn.discordapp.com/attachments/399448944889036801/729291288268111902/601482f9-2aed-4353-9fc4-004b9d4387a0.gif;https://cdn.discordapp.com/attachments/399448944889036801/753380689935597688/4b32b9c6-4357-4d3e-8a8c-9c8d2ec9d3f7.gif;https://cdn.discordapp.com/attachments/399448944889036801/754080260718460928/c7b60b24-5d83-4f97-a06f-9662fd3dbc32.gif;https://cdn.discordapp.com/attachments/399448944889036801/753397371022606426/f65be4bc-a05b-4aaf-a5e9-bc8c88156c11.gif;https://imgur.com/InEHEhT.gif;https://cdn.discordapp.com/attachments/399448944889036801/655105390509424641/e44bfb552ee11c39e91d0d06de65758c.gif;https://imgur.com/xw3RMhC.gif;https://cdn.discordapp.com/attachments/399448944889036801/701454589261512744/97d9b111-2796-429a-863e-86b252bffbdd.gif;https://cdn.discordapp.com/attachments/399448944889036801/754305938214748201/565ef885-ad00-4096-89d8-0b7e830b79f6.gif;https://imgur.com/739hy8u.gif;https://cdn.discordapp.com/attachments/399448944889036801/596104164744888350/tenor_18.gif;https://imgur.com/Wd6QwUb.gif;https://imgur.com/F4ZLudB.gif;https://cdn.discordapp.com/attachments/399448944889036801/596116135351549953/018259f09f8a7d666a97ba9e24864bfee31d1a94_00.gif;https://cdn.discordapp.com/attachments/399448944889036801/810669735648952341/a2cde795512dffb7ed89448a14d7e68e.gif;https://imgur.com/IO34js9.gif;https://imgur.com/ZEuVEyk.gif;https://cdn.discordapp.com/attachments/399448944889036801/701454674951405608/282b9647-0dbe-4200-97c0-c8ed91b71145.gif;https://cdn.discordapp.com/attachments/399448944889036801/751445482164846603/5f466321-1bdd-4be8-ad31-bdd0c13e42b0.gif;https://cdn.discordapp.com/attachments/399448944889036801/754424039921025184/42238cdd-4130-48d7-ba7c-5982123161d2.gif;https://imgur.com/hxAkqb5.gif;https://imgur.com/TSLLnJM.gif;https://cdn.discordapp.com/attachments/399448944889036801/750702930004410388/15a33ec5-0d84-4132-bcb3-eedf9c574971.gif;https://imgur.com/t8D0MhD.gif;https://cdn.discordapp.com/attachments/399448944889036801/768864969897934848/8536e43eb56101806a857b8bf52f6b2a.gif;https://cdn.discordapp.com/attachments/399448944889036801/564138323262701586/unnamed_3.gif;https://c.tenor.com/KXtIHmHFN9sAAAAC/ichika-nakano-ichika-nakano-pout.gif;https://c.tenor.com/8wFTOlfcPYoAAAAd/itsuki-nakano.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]