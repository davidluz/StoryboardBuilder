$("#btn-doc").unbind().click(function(event){

$("#stb-final").empty();
// NUNCA MAIS ESQUECER NA VIDADE DE USAR .HTML PARA CHAMAR O CONTENT DE UM OBJETO

// Parei aqui - lembrar que o esquema agora é o seguinte - Pega as infos diretos na tela de edição e decompõe aqui - não existe mais uma camada intermediária 

for (i=1; i<=30; i++){
	
var numero_tela = i;
var temp = '#conteudo-tela'+i;

// Verifica o modelo para ver que tipo de tela vai montar
var tempModelo = $(temp).find(':nth-child(1)').attr("data-modelo");


if(tempModelo==0){
var modelo_final = [];
modelo_final[0] = $(temp).find('#M0element0').html();
modelo_final[1] = $(temp).find('#M0element1').html();
modelo_final[2] = $(temp).find('#M0element2').html();
modelo_final[3] = $(temp).find('#M0element3').html();



var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[2] + `</p>
					<p id="t1-orientacao2">` + modelo_final[3] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);         

    }




if(tempModelo==1){
	
var modelo_final = [];
modelo_final[0] = $(temp).find('#M1element0').html();
modelo_final[1] = $(temp).find('#M1element1').html();



var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[1] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  


	
}

if(tempModelo==2){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M2Element0').html();
modelo_final[1] = $(temp).find('#M2Element1').html();
modelo_final[2] = $(temp).find('#M2Element2').html();
modelo_final[3] = $(temp).find('#M2Element3').html();
modelo_final[4] = $(temp).find('#M2Element4').html();




var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					<p id="t1-ctn">` + modelo_final[2] + `</p>
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[3] + `</p>
					<p id="t1-orientacao1">` + modelo_final[4] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

if(tempModelo==3){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M3Element0').html();
modelo_final[1] = $(temp).find('#M3Element1').html();
modelo_final[2] = $(temp).find('#M3Element2').html();
modelo_final[3] = $(temp).find('#M3Element3').html();
modelo_final[4] = $(temp).find('#M3Element4').html();




var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					<p id="t1-ctn">` + modelo_final[2] + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[3] + `</p>
					<p id="t1-orientacao1">` + modelo_final[4] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

if(tempModelo==4){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M4Element0').html();
modelo_final[1] = $(temp).find('#M4Element1').html();
modelo_final[2] = $(temp).find('#M4Element2').html();
modelo_final[3] = $(temp).find('#M4Element3').html();
modelo_final[4] = $(temp).find('#M4Element4').html();




var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					<p id="t1-ctn">` + modelo_final[2] + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[3] + `</p>
					<p id="t1-orientacao1">` + modelo_final[4] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

if(tempModelo==5){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M5Element0').html();
modelo_final[1] = $(temp).find('#M5Element1').html();
modelo_final[2] = $(temp).find('#M5Element2').html();
modelo_final[3] = $(temp).find('#M5Element3').html();




var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[2] + `</p>
					<p id="t1-orientacao1">` + modelo_final[3] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

if(tempModelo==6){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M6Element0').html();
modelo_final[1] = $(temp).find('#M6Element1').html();
modelo_final[2] = $(temp).find('#M6Element2').html();
modelo_final[3] = $(temp).find('#M6Element3').html();



var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[2] + `</p>
					<p id="t1-orientacao1">` + modelo_final[3] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

if(tempModelo==7){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M7Element0').html();
modelo_final[1] = $(temp).find('#M7Element1').html();
modelo_final[2] = $(temp).find('#M7Element2').html();
modelo_final[3] = $(temp).find('#M7Element3').html();
modelo_final[4] = $(temp).find('#M7Element4').html();



var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					<p id="t1-ctn">` + modelo_final[2] + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[3] + `</p>
					<p id="t1-orientacao1">` + modelo_final[4] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

if(tempModelo==8){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M8Element0').html();
modelo_final[1] = $(temp).find('#M8Element1').html();
modelo_final[2] = $(temp).find('#M8Element2').html();
modelo_final[3] = $(temp).find('#M8Element3').html();
modelo_final[4] = $(temp).find('#M8Element4').html();
modelo_final[5] = $(temp).find('#M8Element5').html();
modelo_final[6] = $(temp).find('#M8Element6').html();



var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					<p id="t1-ctn">` + modelo_final[2] + `</p>
					<p id="t1-ctn">` + modelo_final[3] + `</p>
					<p id="t1-ctn">` + modelo_final[4] + `</p>
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[5] + `</p>
					<p id="t1-orientacao1">` + modelo_final[6] + `</p>
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

if(tempModelo==9){

var modelo_final = [];
modelo_final[0] = $(temp).find('#M9Element0').html();
modelo_final[1] = $(temp).find('#M9Element1').html();
modelo_final[2] = $(temp).find('#M9Element2').html();





var stbMontado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M`+storyboard.modulo+`Tela`+numero_tela+`</strong></p>
					</td>
					</tr>
					<tr>
					<td width="743">
					<p><strong>Conteúdo da tela</strong></p>
					</td>
					<td width="324">
					<p><strong>Orientações para produção</strong></p>
					</td>
					</tr>
					<tr>
					<td rowspan="2" width="657">
					<p id="t1-ctn">` + modelo_final[0] + `</p>
					<p id="t1-ctn">` + modelo_final[1] + `</p>
					
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final[2] + `</p>
				
					</td></tr> 
					</table><br>`; 


					$("#stb-final").append(stbMontado);  
	
}

}


 $("#stb-final").wordExport(storyboard.arquivoNome);

});







