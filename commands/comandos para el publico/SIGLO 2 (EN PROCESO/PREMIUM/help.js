module.exports = ({
    name: "help-premium",
    $if: "old",
    code: `
    $if[$getguildVar[english]==1]
$description[Hola $username[$authorID] te presento mi seccion privada de sistema premium, abajo tendras un boton para pagar el monto que necesitas para tener el sistema premium, ahora aca te dejo lso precios.]
$addField[7.71 PEN | $2 | Un mes#COLON#;\`\`\`fix
purge
reset-prefix
set-prefix
set-sugget
suggest\`\`\`;yes]

$addField[11.57 PEN | $3 | Dos meses#COLON#;\`\`\`fix
purge
reset-prefix
set-prefix
set-sugget
suggest\`\`\`;yes]
    $endif
    `
})