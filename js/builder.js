// Builder - Script de controle da UI
console.log("Scripts de formatação da interface do Builder iniciados");

//Pega dados do STB gerado no HTML da Home
var retrievedObject = localStorage.getItem('stb_local');
console.log('objeto gravado: ', JSON.parse(retrievedObject));

// Controles do Menu
$("#btn-salvar").click(function(){

});

// Necessário colocar confirmação depois. 
// Testar no Firefox
$("#btn-limpar").click(function(){
Location.reload();
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
       /////////////////////////////////////////////////////////////////////////////////
       // Coloca a estrura selecionada na tela de edição
       //Coloca a tela final com conteúdo no array de telas 
        storyboard.contents.push ("conteudo-primera-tela");
      
    }
});



