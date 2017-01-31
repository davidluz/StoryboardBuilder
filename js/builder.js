// Builder - Script de controle da UI
console.log("Scripts de formatação da interface do Builder iniciados");

//Pega dados do STB gerado no HTML da Home e injeta neste escopo
var retrievedObject = localStorage.getItem('stb_local');
var storyboard = JSON.parse(retrievedObject);
console.log(storyboard.curso);
console.log(storyboard);

// Controles do Menu
$("#btn-salvar").click(function(){

});

// Necessário colocar confirmação depois. 
// Testar no Firefox
$("#btn-limpar").click(function(){
location.reload();
});

$("#btn-doc").click(function(){

});

$("#btn-pdf").click(function(){

});

$("#btn-contagem").click(function(){

});

// Necessário colocar confirmação depois. 
$("#btn-voltar").click(function(){
window.open("home.html", "_self");
});



$( ".draggable" ).draggable({ 
    	revert: true
        }
);

$( ".drops" ).droppable({
      drop: function( event, ui ) {
       
        //Muda a minuatura que item dropou
      	var dragItem = eval(ui.draggable.attr("id"));
       	var dragItemImg = $(dragItem).find('img:first');
        $( this ).css("background-image","url('"+eval(dragItemImg).attr("src")+"')");
        var elementoSelecionado = $(this).attr("id");
        var elementoSelecionadoID = elementoSelecionado.substring(5,4);
                

       /////////////////////////////////////////////////////////////////////////////////
       // Coloca a estrura selecionada na tela de edição
       var idDoConteudoSelecionado = '#conteudo-tela'+elementoSelecionadoID;
       $(idDoConteudoSelecionado).load('telas-reais/modelo1.html');      
       //Coloca a tela final com conteúdo no array de telas 
        storyboard.contents.push ("conteudo-primera-tela");
      
    }
});





// Ao clicar na minituara dos modelos, é exibido um modelo em tela cheia.
$("#modelo1").click(function(){
	console.log("mostrou ");
});

