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

});

// Necessário colocar confirmação depois. 
$("#btn-voltar").click(function() {
  window.open("home.html", "_self");
});


$(".draggable").draggable({
  revert: true
});

$(".drops").droppable({
  drop: function(event, ui) {

    //Muda a minuatura que item dropou
    var dragItem = eval(ui.draggable.attr("id"));

    var dragItemImg = $(dragItem).find('img:first');
    $(this).css("background-image", "url('" + eval(dragItemImg).attr("src") + "')");
    var elementoSelecionado = $(this).attr("id");
    var elementoSelecionadoID = elementoSelecionado.substring(5, 4);



    /////////////////////////////////////////////////////////////////////////////////
    // Coloca a estrura selecionada na tela de edição
    var idDoConteudoSelecionado = '#conteudo-tela' + elementoSelecionadoID;
    var dragItemID = ui.draggable.attr("id");
    $(idDoConteudoSelecionado).load('telas-reais/'+dragItemID+'.html');
    $('.conteudo-telas').hide();
  
  atualizaConteudos();

 



  }
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
    'transitionOut': 'elastic'
   
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

