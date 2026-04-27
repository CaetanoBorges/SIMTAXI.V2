const INICIO = {
    "slide": function() {
        var sli = new debliwuislideimg($, [
            '<img src="/inicio/logo.svg"> <h3 style="font-size:26px;margin-bottom:2px;"> </h3><p style="font-size:20px;margin:0;"> </p>',
            '<img src="/inicio/maiscompleto.png"> <h3 style="font-size:26px;margin-bottom:2px;">MOBILIDADE</h3><p style="font-size:20px;margin:0;">O mais completo táxi on demand</p>',
            '<img src="/inicio/toyota.png"> <h3 style="font-size:26px;margin-bottom:2px;">CARRO</h3><p>Segurança e conforto</p>',
            '<img src="/inicio/motoo.png"> <h3 style="font-size:26px;margin-bottom:2px;">MOTORIZADA</h3><p style="font-size:20px;margin:0;">Rapidez e agilidade sempre</p>',
            '<img src="/inicio/rentacar.png"> <h3 style="font-size:26px;margin-bottom:2px;">RENT A CAR</h3><pstyle="font-size:20px;margin:0;">Transporte garantido com o melhor serviço de rent a car</p>'
        ],1,false,1200, 4000);
        setTimeout(function() {
            if (document.querySelector(".principal-corpo")) {
                if(document.querySelector("debliwui-slideimg")){

            
                }else{
                    var root = document.querySelector(".principal-corpo");
                    root.prepend(sli);
                }
                
            }

        }, 1);
    }
}
window.INICIO = INICIO;