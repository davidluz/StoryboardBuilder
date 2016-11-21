// Informações do Storyboard
var numeroDeTelas = 0;
var telasAtualizadas = 0;
var telasNovas = 0;
var tituloDoModulo = "vazio";
var atividades = 0;
var numeroDeCaracteres = 0;
var numeroDeLaudas = 0;
var dataDeProducao = "00/00/00";
var versao = 0;
var telasSelecionadas = [];


$(document).ready(function(){

//Teste para gerar tela
var teste = new GeradorDeTela(1,2,3,4,5);
console.log(teste.conteudo);

$( function() {
  $( ".telas img" ).draggable({
    	revert: true
    });
  } );	


$( ".telas-selecionadas" ).droppable({
     drop: function( event, ui ) {
     var draggableId = ui.draggable.attr("id");
     console.log(ui.draggable);
     var primeiroFlho = $(this).first();
    $(primeiroFlho).html("<div class='tela-editavel'><img  width='100px' height:'51px' src= "+ui.draggable.attr("src")+"> </div>");
   
     }
});

});




//Classe geradora de Tela 
var GeradorDeTela = function(id,conteudo,descricaoImagem, orientacoes,anexos){
  this.id = id;
  this.conteudo = conteudo;
  this.descricaoImagem = descricaoImagem;
  this.orientacoes = orientacoes;
  this.anexos = anexos; 
}