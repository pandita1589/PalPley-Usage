module.exports = (AoiClient) => {
   
  AoiClient.status({
        text: "$getGuildVar[prefix]help || $getUserVar[version]",
      type: "PLAYING",
      time: 20
      });
  
      AoiClient.status({
        text: "$allmembersCount usuarios",
      type: "WATCHING",
      time: 20
      });
  
      AoiClient.status({
        text: "$guildCount servidores",
      type: "COMPETING",
      time: 20
      });
}