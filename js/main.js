var storyboard = createStoryboard();

$("#btn_novo").fancybox({
        'href'   : '#form_inicial',
        'width' : '900px',
        'height' :'700px',
        'titleShow'  : false,
        'transitionIn'  : 'elastic',
        'transitionOut' : 'elastic',
        'autoSize' : false,
        'closeClick'  : false, // prevents closing when clicking INSIDE fancybox
     helpers : { 
            overlay : {
                closeClick: false
            } // prevents closing when clicking OUTSIDE fancybox
        }
});




// Lógica da Persistência - Retirar Daqui
function saveSTB(){
var stb_local = storyboard;
localStorage.setItem('stb_local', JSON.stringify(stb_local));
}



$("#inicia_stb").click(function(){
storyboard.demanda =  $("input[name=stb-demanda]").val();
storyboard.curso =    $("input[name=stb-curso]").val();
storyboard.modulo =   $("input[name=stb-modulo]").val();
storyboard.objetivo = $("input[name=stb-objetivo]").val();
storyboard.modelo =   $( "#stb-modelo" ).val();
storyboard.arquivoNome = storyboard.demanda+"-17.STB.C.1.modulo"+storyboard.modulo;



saveSTB(); 
window.open("builder.html", "_self");

});


$(document).ready(function() {
    $('select').material_select();

});



