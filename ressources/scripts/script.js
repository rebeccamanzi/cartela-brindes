function gerarCartela() {
    $("#posicoes").html();
    for (i = 1; i <= 100; i++) {
        $("#posicoes").append(`<div class="pos${i}">${i}</div>`);         
    } 
}


function calcular() {
    var valor = $("input#valor-compras").val();    
    var selos = (valor / 20).toFixed(0);

    function calcularSelos() {        
        $("#qtde-selos").text(`Selos conquistados: ${selos}`);    
        for (i = 1; i <= selos; i++) {
            $(`.pos${i}`).addClass('checked');
        }
    }
    
    function calcularBrindes(){  
        var b15 = Math.floor(selos / 15);
        var b35 = Math.floor(selos / 35);
        var b55 = Math.floor(selos / 55);
        var b85 = Math.floor(selos / 85);
        var b100 = Math.floor(selos / 100);

        $("#brinde-15").text(`${b15}`);
        $("#brinde-35").text(`${b35}`);
        $("#brinde-55").text(`${b55}`);
        $("#brinde-85").text(`${b85}`);
        $("#brinde-100").text(`${b100}`);          
    }

    calcularSelos();
    calcularBrindes();
}


$(function() {
    gerarCartela();
});


// TO DO:

// resgate brindes
// à medida que retira os brindes o cálculo tem q ser td refeito pra saber qts ainda posso pegar
// gerar nova cartela de selos (se selos > 100)
// obrigatório resgatar brinde(s) ao completar cartela (selos = 100)


