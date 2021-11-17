function recarregarPágina() {
    window.location.replace("index.html")
}

function paginaMaquina() {
    window.location.href="paginaMaquina.html"
}

function paginaPolitica() {
    window.location.href="politica.html"
}

$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-estevao');

       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

$(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.ul-vitor');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.ul-bruno');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
    var botao = $('.bt4');
    var dropDown = $('.ul-lucas');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});

$(document).ready(function() {
    var botao = $('.bt5');
    var dropDown = $('.ul-silas');

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});