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

 $("#wordGenerator").click(function(event) {
  geraStoryboardCompleto();
 $("#todas-as-telas").wordExport('00N-16.STB.C.N.moduloN');
 });


$( function() {
  $( ".telas" ).draggable({
    	revert: true
    });
  } );	


$( ".telas-selecionadas" ).droppable({
	
    drop: function( event, ui ) {

    var dragID = $(ui.draggable).attr("id"); 
	var dragIMG = $(ui.draggable).find("img").attr('src');
    dragID = dragID.substring(4,5);
	// Esta funcionando 
     var telaSelecionada = "#ctn-t"+dragID;

    //Altera miniatura selecionada
    $(this).html('<img src='+dragIMG+' width="100px">');
	

    //Altera conteúdo da tela
	var droppableId = $(this).attr("id");
	var telaAlterada = "#ctn-"+$(this).attr("id");
	telaAlterada = telaAlterada.substring(0,8);

  var formato1 = '<div class="stb-cabecalhos" >M1Tela 1</div> <div class="stb-telas" contenteditable="true"><p>Bem-vindo ao curso</p> <h1>Título do curso </h1> <p>Neste curso você vai aprender...</p><p>Iniciar curso</p> <div>';
  
// ABAIXO ESTÁ ESTRATURA DA TABELA QUE SERÁ EXPORTADA - IMPORTANTE - TELA EXPORTADA SERÁ DIFERENTE DA VISUALIZADA.
  var formato2 = `<table border="1">
<tbody>
<tr>
<td colspan="2" width="992">
<p><strong>M1T1Tela1</strong></p>
</td>
</tr>
<tr>
<td width="743">
<p><strong>CONTE&Uacute;DO DA TELA</strong></p>
</td>
<td width="324">
<p><strong>ORIENTA&Ccedil;&Otilde;ES PARA PRODU&Ccedil;&Atilde;O</strong></p>
</td>
</tr>
<tr>
<td rowspan="2" width="657">
</td>
<td width="324">
</td>
</tr>
<tr>

</tr>
</tbody>
</table>
<br clear="all" style="page-break-before:always" />
`


$(telaAlterada).html(formato2);

	 

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

function geraStoryboardCompleto(){
for(i=1; i<=30; i++){
$("#todas-as-telas").html();
var telaDaVez = '#ctn-t'+i;
var comparador = $(telaDaVez).html();
if(comparador!="tela vazia"){  
$("#todas-as-telas").append(comparador);
}



}


}



//Classe geradora de Tela 


