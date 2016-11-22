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


$( function() {
  $( ".telas" ).draggable({
    	revert: true
    });
  } );	


$( ".telas-selecionadas" ).droppable({
    drop: function( event, ui ) {

    var dragID = $(ui.draggable).attr("id"); 
    dragID = dragID.substring(4,5);
    console.log(dragID);  
    var miniaturaSelecionada = "#t"+dragID;
    var telaSelecionada = "#ctn-t"+dragID;

    //Altera miniatura
   // $(this).html("<p>teste</p>");
   // $(telaSelecionada).html("<p>teste final</p>");

    //Altera conteúdo da tela


    }
});

$("#t1").click(function(){  
$.fancybox("#ctn-t1");
}); 

$("#t2").click(function(){  
$.fancybox("#ctn-t2");
}); 

$("#t3").click(function(){  
$.fancybox("#ctn-t3");
}); 

$("#t4").click(function(){  
$.fancybox("#ctn-t4");
}); 

$("#t5").click(function(){  
$.fancybox("#ctn-t5");
}); 

$("#t6").click(function(){  
$.fancybox("#ctn-t6");
}); 

$("#t7").click(function(){  
$.fancybox("#ctn-t7");
}); 

$("#t8").click(function(){  
$.fancybox("#ctn-t8");
}); 

$("#t9").click(function(){  
$.fancybox("#ctn-t9");
}); 

$("#t10").click(function(){  
$.fancybox("#ctn-t10");
});

$("#t11").click(function(){  
$.fancybox("#ctn-t11");
});  

$("#t12").click(function(){  
$.fancybox("#ctn-t12");
}); 

$("#t13").click(function(){  
$.fancybox("#ctn-t13");
}); 

$("#t14").click(function(){  
$.fancybox("#ctn-t14");
}); 

$("#t15").click(function(){  
$.fancybox("#ctn-t15");
}); 

$("#t16").click(function(){  
$.fancybox("#ctn-t16");
}); 

$("#t17").click(function(){  
$.fancybox("#ctn-t17");
}); 

$("#t18").click(function(){  
$.fancybox("#ctn-t18");
}); 

$("#t19").click(function(){  
$.fancybox("#ctn-t19");
}); 

$("#t20").click(function(){  
$.fancybox("#ctn-t20");
}); 

$("#t21").click(function(){  
$.fancybox("#ctn-t21");
}); 

$("#t22").click(function(){  
$.fancybox("#ctn-t22");
}); 

$("#t23").click(function(){  
$.fancybox("#ctn-t23");
}); 

$("#t24").click(function(){  
$.fancybox("#ctn-t24");
}); 

$("#t25").click(function(){  
$.fancybox("#ctn-t25");
}); 

$("#t26").click(function(){  
$.fancybox("#ctn-t26");
}); 

$("#t27").click(function(){  
$.fancybox("#ctn-t27");
}); 

$("#t28").click(function(){  
$.fancybox("#ctn-t28");
}); 

$("#t29").click(function(){  
$.fancybox("#ctn-t29");
}); 

$("#t30").click(function(){  
$.fancybox("#ctn-t30");
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


