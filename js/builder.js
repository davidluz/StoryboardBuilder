// Lembrar que este Array começa em 1
conteudosDasTelas = [];
modelosDasTelas = [];
var telasAtualizadas;
var tempModelo;


// Temp - clear wamp
$.ajaxSetup({
  cache: false
});




//Pega dados do STB gerado no HTML da Home e injeta neste escopo
var retrievedObject = localStorage.getItem('stb_local');
var storyboard = JSON.parse(retrievedObject);



// Controles do Menu
$("#btn-salvar").click(function() {

});

// Necessário colocar confirmação depois. 
// Testar no Firefox
$("#btn-limpar").click(function() {
  location.reload();
});

$("#btn-doc").unbind().click(function(event) {

});



$("#btn-pdf").click(function() {

});

$("#btn-contagem").click(function() {
contarTelas();
});

// Necessário colocar confirmação depois. 
$("#btn-voltar").click(function() {
  window.open("home.html", "_self");
});


$(".draggable").draggable({
  revert: true,
  start: function(e) { $(this).css('z-index', 9999)},
  stop:  function(e) { $(this).css('z-index', 0)}
});

$(".trash").droppable({
drop: function(event, ui) {



//Muda a minuatura que item dropou
    var dragItem = eval(ui.draggable.attr("id"));
    var elementType = ui.draggable.attr("data-type");

   
   if(elementType=="drop"){
  
    var dragItemImg = $(dragItem).find('img:first');
    $(dragItem).css("background-image","none");
    var elementoSelecionado = $(dragItem).attr("id");
    var elementoSelecionadoID = elementoSelecionado.substring(6, 4);



    /////////////////////////////////////////////////////////////////////////////////
    // Remove a estrura selecionada na tela de edição
    var idDoConteudoSelecionado = '#conteudo-tela' + elementoSelecionadoID;
    var dragItemID = ui.draggable.attr("id");
    console.log(idDoConteudoSelecionado);
    $(idDoConteudoSelecionado).html('tela vazia');
    $('.conteudo-telas').hide();
  
  atualizaConteudos();

  }




}






 });


$(".drops").droppable({
  drop: function(event, ui) {



    //Muda a minuatura que item dropou
    var dragItem = eval(ui.draggable.attr("id"));
    var elementType = ui.draggable.attr("data-type");


   
   if(elementType=="drag"){

    var dragItemImg = $(dragItem).find('img:first');
    $(this).css("background-image", "url('" + eval(dragItemImg).attr("src") + "')");
    var elementoSelecionado = $(this).attr("id");
    var elementoSelecionadoID = elementoSelecionado.substring(6, 4);



    /////////////////////////////////////////////////////////////////////////////////
    // Coloca a estrura selecionada na tela de edição
    var idDoConteudoSelecionado = '#conteudo-tela' + elementoSelecionadoID;
    var dragItemID = ui.draggable.attr("id");
    $(idDoConteudoSelecionado).load('telas-reais/'+dragItemID+'.html');
    $('.conteudo-telas').hide();
  
  atualizaConteudos();

  }

   if(elementType=="drop"){

      $(this).insertBefore(dragItem);
  }

  
  }
});

$(".drops").draggable({
    revert: true,
    start: function(e) { $(this).css('z-index', 9999)},
    stop:  function(e) { $(this).css('z-index', 0)}

});






// Ao clicar na miniaura das telas, o conteúdo que existe dentro é exibido

for (i = 1; i <= 30; i++) {
  var temp1 = "#drop" + i;
  var temp2 = "#conteudo-tela" + i;

  $(temp1).fancybox({
    
    'autoSize': false,
    'href': temp2,
    'width': '1050px',
    'height': '100%',
    'titleShow': false,
    'transitionIn': 'elastic',
    'transitionOut': 'elastic',
    'closeClick'  : false, // prevents closing when clicking INSIDE fancybox
     helpers : { 
            overlay : {
                closeClick: false
            } // prevents closing when clicking OUTSIDE fancybox
        }
   
  });


}

   function atualizaConteudos(){
    //Pega os elementos de todas as páginas e coloca no Array que irá para o HTMLtoTAble
    for (i = 1; i <= 30; i++) {
      var telasAtualizadas = '#conteudo-tela' + i;
      conteudosDasTelas[i] = $(telasAtualizadas);
      // Olha todas as páginas, vê qual o modelo gravado para informar ao html2Table que modelo usar para formatação
      var tempModelo = $(telasAtualizadas).find(':nth-child(1)').attr("data-modelo");
      modelosDasTelas[i] = tempModelo;
    }


  
  }



   
