module.exports = ({
    name: "set-autorole",
    $if: "old",
    code: `$setguildVar[autorole;$mentionedRoles[1]]
  $if[$getguildVar[english]==1]
  $description[1;✅ Auto rol configurado a: <@&$mentionedRoles[1]>]
  $color[1;$random[000000;999999]]
  $onlyPerms[administrator;Necesitas el permiso de \`MANAGE_ROLES\` para usar este comando.]
  $endif
  $if[$getguildVar[english]==2]
  $description[1;✅ Welcome role setted to: <@&$mentionedRoles[1]>]
  $color[1;$random[000000;999999]]
  $onlyPerms[administrator;You need the \`MANAGE ROLES\` permission to use this command.]
  $endif
  `
  })