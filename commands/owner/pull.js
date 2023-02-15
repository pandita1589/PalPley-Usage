module.exports = ({
    name: "pull",
    code:`
    $editIn[5s;{newEmbed:{description:    **Nuevo:**
  
      \`\`\`fix
      $exec[git pull]\`\`\`}{thumbnail:$guildIcon[$guildID]}{color:$getUserVar[colorMuichiro]}{image:$getUserVar[imgComan]}}]
    $description[<a:_:1075133551479099412> **Cargando**]
    $color[$getUserVar[colorMuichiro]]
    $onlyif[$authorID==$botownerID;]
    `
  })