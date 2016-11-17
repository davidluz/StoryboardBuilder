var numeroDeTelas = 0;
var telasAtualizadas = 0;
var telasNovas = 0;
var tituloDoModulo = "vazio";
var atividades = 0;
var numeroDeCaracteres = 0;
var numeroDeLaudas = 0;
var dataDeProducao = "00/00/00";
var versao = 0;
var telas = [];

var GeradorDeTela = function(id,conteudo,descricaoImagem, orientacoes,anexos){
  this.id = id;
  this.conteudo = conteudo;
  this.descricaoImagem = descricaoImagem;
  this.orientacoes = orientacoes;
  this.anexos = anexos; 
}

$(document).ready(function(){

var teste = new GeradorDeTela(1,2,3,4,5);
console.log(teste.conteudo);

  $( function() {
    $( ".telas img" ).draggable({
    	revert: true
    });
  } );	

	$('.texto-editavel').attr('contenteditable','true');
});


function insertLine(){
	$('#homologacao').append('<tr><td><p>item 1</p></td><td><p>item 1</p></td></tr>');

}

$("button").click(function(){


  $("#homologacao").table2excel({
    // exclude CSS class
    exclude: ".noExl",
    name: "Worksheet Name",
    filename: "homologacao.xls" //do not include extension
  });

});

$( "#storyboard" ).droppable({
        drop: function( event, ui ) {
        var draggableId = ui.draggable.attr("id");
        console.log(draggableId);
       $( "#storyboard" ).append(draggableId);

      }
    });