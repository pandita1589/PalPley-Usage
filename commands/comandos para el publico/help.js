module.exports = ({
    name: "help",
    aliases: ["ayuda", "ayudame"],
    description: "Te manda el archivo de ayuda.",
    usage: "<prefix>help",
    cooldown: "4s",
    code: `
    $title[$userName a pedido ayuda;$getBotInvite[administrator]]
$description[Aca esta mi sistema de ayuda $username, espero que te sea de utilidad este comando, investiga mas con mi menu y mis botones, ¡DIVIERTETE!]
$color[$getUserVar[colorMuichiro]]

$addSelectMenu[1;menu;Selecciona algo;1;1;false;Inicio:Te manda al inicio del menu.:men1:true:<:home:1066049403523182662>;Reacciones:Reacciona con estos comandos para desmostrar tus sentimientos...:men2:false:<:shopelo:1061284046514171914>;Utiles:Diviertete con tus amigos con este categoria.:men3:false:<:reaction_roles_13:1058759639199662121>}]

$addButton[2;;success;InicioHelp;false;<:home:1066049403523182662>]
$addButton[2;;primary;SiguienteHelp;false;<:flecha:1066049408057233458>]
$addButton[2;;danger;CloseHelp;false;<:MH_white_X:1066058991341404210>]
$addButton[2;;primary;AnteriorHelp;true;<:flecha_rj:1066055866819805314>]
$addButton[2;Informacion, aqui :;secondary;Help;true;<:pink_info:1058759662545162291>]

$botTyping

    `
})