function acaoInicializacao(){
    //$(".alert").fadeOut("slow"); //comando fadeOut oculta um elemento
    //$(".alert p").html("e fomos supreendidos novamente..."); //html troca o conteudo da tag selecionada
    //$(".alert").fadeIn("slow"); //comando fadeIn mostra um elemento

    //$(".alert").fadeOut("slow", function(){
        //$(".alert").html("e fomos supreendidos novamente...").fadeIn("fast");
    //});

    $(".alert").fadeOut("slow", function(){
        $(".alert").html("Mestre...").fadeIn("slow", function(){
            $(".alert").delay(500).fadeOut("slow", function(){
                $(".alert").html("Wallla!!!").fadeIn("slow");
            });    
        });
    });
}

$(document).ready(acaoInicializacao);
