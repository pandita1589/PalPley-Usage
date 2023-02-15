module.exports = [{
  name: "banghead",
  $if : 'old',
  code: `$if[$getguildVar[english]==1]
$author[1;$username está golpeando su cabeza O.o;$userAvatar]
$image[1;$randomText[https://media.discordapp.net/attachments/399448944889036801/609822007676370945/banghead.gif;https://images-ext-2.discordapp.net/external/7Q5z95uab8Qemm-NFceKvTY1azYQOCMCVddk4MsAf00/https/imgur.com/NoXHZVm.gif;https://images-ext-1.discordapp.net/external/dmgRw04OgCY6IIriV2LSo_FaPJCtsyi7FLTt1vvPB1Q/https/imgur.com/4mDTLQf.gif;https://media.discordapp.net/attachments/399448944889036801/754302629672386580/51c0c9ac-5002-443f-a614-558225077aeb.gif;https://images-ext-1.discordapp.net/external/R1o_LQB7NAeGZBRKSTwFhuDTu7gEtCuB5d3rzFY3yYs/https/imgur.com/ANsahLl.gif;https://media.discordapp.net/attachments/399448944889036801/753521459204194314/d10f1e77-cdfd-44bb-ad6c-ae358d7b137a.gif;https://images-ext-2.discordapp.net/external/qLWgEzaG_LE7Q7eMYFOM0AD_J7StIs5w4wcJwnfVj2A/https/imgur.com/3EQ0cSV.gif;https://media.discordapp.net/attachments/399448944889036801/674306275139649547/c63c9026-2674-4e58-981b-5ce2a40abf07.gif;https://images-ext-2.discordapp.net/external/tWqes_ar4VKWj4SvpJ7t-0CQJNMrg5jMeCRjw-d7Gjc/https/imgur.com/UcBsAE6.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[titleBloqueo]}{color:$getUserVar[colorBloqueo]}{thumbnail:$getUserVar[imgMiniaturaBloqueo]}{description:$getUserVar[textBloqueo]}]
$endif

$if[$getguildVar[english]==2]
$author[1;$username is banging his head O.o;$userAvatar]
$image[1;$randomText[https://media.discordapp.net/attachments/399448944889036801/609822007676370945/banghead.gif;https://images-ext-2.discordapp.net/external/7Q5z95uab8Qemm-NFceKvTY1azYQOCMCVddk4MsAf00/https/imgur.com/NoXHZVm.gif;https://images-ext-1.discordapp.net/external/dmgRw04OgCY6IIriV2LSo_FaPJCtsyi7FLTt1vvPB1Q/https/imgur.com/4mDTLQf.gif;https://media.discordapp.net/attachments/399448944889036801/754302629672386580/51c0c9ac-5002-443f-a614-558225077aeb.gif;https://images-ext-1.discordapp.net/external/R1o_LQB7NAeGZBRKSTwFhuDTu7gEtCuB5d3rzFY3yYs/https/imgur.com/ANsahLl.gif;https://media.discordapp.net/attachments/399448944889036801/753521459204194314/d10f1e77-cdfd-44bb-ad6c-ae358d7b137a.gif;https://images-ext-2.discordapp.net/external/qLWgEzaG_LE7Q7eMYFOM0AD_J7StIs5w4wcJwnfVj2A/https/imgur.com/3EQ0cSV.gif;https://media.discordapp.net/attachments/399448944889036801/674306275139649547/c63c9026-2674-4e58-981b-5ce2a40abf07.gif;https://images-ext-2.discordapp.net/external/tWqes_ar4VKWj4SvpJ7t-0CQJNMrg5jMeCRjw-d7Gjc/https/imgur.com/UcBsAE6.gif]]
$color[1;#eccb09]
$onlyIf[$getVar[lockdown]==off;{newEmbed:{title:$getUserVar[lockdowntitle]}{color:$getUserVar[lockdowncolor]}{thumbnail:$getUserVar[imgLockThumbnail]}{description:$getUserVar[lockdowntext]}]
$endif`}]