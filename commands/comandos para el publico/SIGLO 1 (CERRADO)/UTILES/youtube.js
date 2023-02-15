module.exports = ({
    name: "youtube-party",
    $if: "old",
    code: `
    $if[$getguildVar[english]==1]
    $addButton[1;Unete a la fiesta;link;$nonEscape[$createChannelInvite[$voiceId;{
        "targetApplication" : "880218394199220334",
        "targetType" : 2,
        "temporary" : false
        }]];no;🍀]
         $description[1;Ha comenzado una actividad de **YouTube Together**. Haz clic en __**Unirse a la fiesta**__ para unirte a la actividad.]
         $color[1;D72638]
         $addTimestamp[1]
         $footer[1;Comenzado por $userTag[$authorID];$userAvatar]
         $author[1;YouTube Together;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjp30RRu3ij2hSJ88lHhvDdn15hCSljCW_g&usqp=CAU
         $image[1;https://www.pixelstalk.net/wp-content/uploads/2016/05/Backgrounds-Youtube-Wallpapers-HD.jpg]
         $onlyIf[$voiceID!=;{newEmbed: {color:Red}{description:🚫 **¡Debes conectarte a un canal de voz para reproducir YouTube!**}}]
    $endif

    $if[$getguildVar[english]==2]
    $addButton[1;Join Party;link;$nonEscape[$createChannelInvite[$voiceId;{
   "targetApplication" : "880218394199220334",
   "targetType" : 2,
   "temporary" : false
   }]];no;🍀]
    $description[1;A **YouTube Together** activity has started. Click __**Join Party**__ to join the activity.]
    $color[1;D72638]
    $addTimestamp[1]
    $footer[1;Started by $userTag[$authorID];$userAvatar]
    $author[1;YouTube Together;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjp30RRu3ij2hSJ88lHhvDdn15hCSljCW_g&usqp=CAU
    $image[1;https://www.pixelstalk.net/wp-content/uploads/2016/05/Backgrounds-Youtube-Wallpapers-HD.jpg]
    $onlyIf[$voiceID!=;{newEmbed: {color:Red}{description:🚫 **You must connect to a voice channel in order to play YouTube!**}}]
$endif
    `
   })