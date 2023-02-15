module.exports = (AoiClient) => {
    AoiClient.interactionCommand({
        name: "menu",
        prototype: 'selectMenu',
        code: `
        $interactionUpdate[;{newEmbed:{title:$userName a pedido ayuda}{url:$getBotInvite[administrator]}{description:Aca esta mi sistema de ayuda $username, espero que te sea de utilidad este comando, investiga mas con mi menu y mis botones, ¡DIVIERTETE!}{color:$getUserVar[colorMuichiro]}};{actionRow:{selectMenu:menu:Selecciona algo:1:1:false:{selectMenuOptions:Inicio:men1:Te manda al inicio del menu.:true:<:home:1066049403523182662>}{selectMenuOptions:Reacciones:men2:Reacciona con estos comandos para desmostrar tus sentimientos...:false:<:shopelo:1061284046514171914>}{selectMenuOptions:Utiles:men3:Diviertete con tus amigos con este categoria.:false:<:reaction_roles_13:1058759639199662121>}}}{actionRow:
          {button:Informacion, aqui #COLON#:secondary:Help:true:<:pink_info:1058759662545162291>}
          {button::primary:AnterirorHelp:false:<:flecha_rj:1066055866819805314>}{button::danger:CloseHelp:false:<:MH_white_X:1066058991341404210>}{button::primary:SiguienteHelp:false:<:flecha:1066049408057233458>}{button::success:InicioHelp:false:<:home:1066049403523182662>}]
        
        $onlyIf[$interactionData[values[0]]==men1;]
        `
           }),
    
           //SELECION MENU
    
           AoiClient.interactionCommand({
        name: "menu",
        prototype: 'selectMenu',
        code: `
        $interactionReply[;{newEmbed:{color:$getUserVar[colorMuichiro]}{description:
        \`\`\`ansi
    mangry - banghead - blush - boom - bored - confused - cry - dab - die - discouraged - disgusted - facepalm - game - happy - lewd - like - nervous - nope - police - pout - shrug - sing - sip - smug - think - vomit - wow
      \`\`\`
        }};;;all;true]
        
        $onlyIf[$interactionData[values[0]]==men2;]
        `
           }),
    
           AoiClient.interactionCommand({
            name: "menu",
            prototype: 'selectMenu',
            code: `
            $interactionReply[;{newEmbed:{color:$getUserVar[colorMuichiro]}{description:
            \`\`\`ansi
            command - google - invite - math - ping - roblox-userinfo - guild-info - user-info - vote - youtube - yt
          \`\`\`
            }};;;all;true]
            
            $onlyIf[$interactionData[values[0]]==men3;]
            `
               }),
           
    
           //////BOTONES
    
           AoiClient.interactionCommand({
            name: "AnterirorHelp",
          type: "interaction",
          prototype: "button",
          code: `
          $interactionUpdate[;{newEmbed:{title:$userName a pedido ayuda}{url:$getBotInvite[administrator]}{description:Aca esta mi sistema de ayuda $username, espero que te sea de utilidad este comando, investiga mas con mi menu y mis botones, ¡DIVIERTETE!}{color:$getUserVar[colorMuichiro]}};{actionRow:{selectMenu:menu:Cerrado:1:1:true:{selectMenuOptions:Inicio:men1:Te manda al inicio del menu.:false:<:home:1066049403523182662>}{selectMenuOptions:Reacciones:men2:Reacciona con estos comandos para desmostrar tus sentimientos...:false:<:shopelo:1061284046514171914>}{selectMenuOptions:Utiles:men3:Diviertete con tus amigos con este categoria.:false:<:reaction_roles_13:1058759639199662121>}}}{actionRow:
            {button:Informacion, aqui#COLON#:secondary:Help:true:<:pink_info:1058759662545162291>}
            {button::primary:AnterirorHelp:true:<:flecha_rj:1066055866819805314>}{button::danger:CloseHelp:false:<:MH_white_X:1066058991341404210>}{button::primary:SiguienteHelp:false:<:flecha:1066049408057233458>}{button::success:InicioHelp:false:<:home:1066049403523182662>}]
          `
        })
      
        AoiClient.interactionCommand({
          name: "SiguienteHelp",
        type: "interaction",
        prototype: "button",
        code: `
    $interactionReply[;{newEmbed:{title:Informacion}{description:**__NUEVA VERSION__**
      El bot tendra nuevos sistemas nuevos cambios mas interaciones y mucho mas, ahora nuestro sistema de comandos tiene $commandsCount comandos que seran utilizados pasando los años, ahora aumentamos los comandos tambie tendremos comandos de musica pero eso tomara tiempo por ahora tendremos comandos interactibos y divertidos.
    
    **__INFORMACION GENERAL__**
    El informe del bot es algo tan complicado y divertido a la vez, ya que nuestro equipo se entretiene y se divierte en editar y desarrollar comandos, este bot sera grande mas grande que **nekotina** (sin ofender a la comunidad de nekotina jejeje), esperemos que este bot sea grande, muchas gracias.}{color:$getUserVar[colorMuichiro]}{field:Nueva version:\`\`\`djs
    v2.1.0\`\`\`:true}{field:Info.:\`\`\`djs
    $getguildVar[prefix]info-bot\`\`\`:true}};;;all;true]
        `
      })
    
      AoiClient.interactionCommand({
        name: "InicioHelp",
      type: "interaction",
      prototype: "button",
      code: `
      $interactionReply[;{newEmbed:{title:Welcome a inicio.}{description:Este sistema esta en mantenimiento, espera su lanzamiento.}{color:$getUserVar[colorMuichiro]}};;;all;true]
      `
    })
    
    AoiClient.interactionCommand({
            name: "CloseHelp",
          type: "interaction",
          prototype: "button",
          code: `
        $deleteMessage[$interactionData[message.id]]
          `
        })
}