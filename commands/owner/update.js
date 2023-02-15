module.exports = {
    name: "update",
    code: `$description[Updated **$commandsCount** Commands
    ]

    $addButton[1;Comandos: $get[newcount];success;removed;yes]
    $addButton[2;Mantenimiento:$get[mantenimiento];danger;removed;yes]
    $let[1;newcount;$commandsCount]
$let[2;mantenimiento;Este boton esta en proceso..]
   $updateCommands
   $let[a;$commandsCount]
   $onlyIf[$botOwnerID==$authorID;]`
   }