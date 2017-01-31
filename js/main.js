console.log("Main inicializado");
var teste = createStoryboard('gestão de projetos', '1', '30');


$("#btn_novo").fancybox({
        'href'   : '#form_inicial',
        'width' : '900px',
        'height' :'700px',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false
    });




$("#btn_continuar").click(function(){
saveSTB();
});




// Lógica da Persistência - Retirar Daqui

function saveSTB(){
var stb_local = teste;
localStorage.setItem('stb_local', JSON.stringify(stb_local));
var retrievedObject = localStorage.getItem('stb_local');
console.log('objeto gravado: ', JSON.parse(retrievedObject));

}



$("#inicia_stb").click(function(){
window.open("builder.html", "_self");
});


//$(document).ready(function() {
   // $('select').material_select();
//});