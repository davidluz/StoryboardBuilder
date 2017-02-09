var telaFinal1 = {};
var telaFinal2 = {};
var telaFinal3 = {};
var telaFinal4 = {};
var telaFinal5 = {};
var telaFinal6 = {};
var telaFinal7 = {};
var telaFinal8 = {};
var telaFinal9 = {};
var telaFinal10 = {};
var telaFinal11 = {};
var telaFinal12 = {};
var telaFinal13 = {};
var telaFinal14 = {};
var telaFinal15 = {};
var telaFinal16 = {};
var telaFinal17 = {};
var telaFinal18 = {};
var telaFinal19 = {};
var telaFinal20 = {};
var telaFinal21 = {};
var telaFinal22 = {};
var telaFinal23 = {};
var telaFinal24 = {};
var telaFinal25 = {};
var telaFinal26 = {};
var telaFinal27 = {};
var telaFinal28 = {};
var telaFinal29 = {};
var telaFinal30 = {};

telaFinal1.modelo = $(conteudosDasTelas[0]).find(':nth-child(1)').attr("data-modelo");
//telaFinal1.conteudo = ;


$("#btn-doc").unbind().click(function(event){

$("#stb-final").empty();
// NUNCA MAIS ESQUECER NA VIDADE DE USAR .HTML PARA CHAMAR O CONTENT DE UM OBJETO

// Parei aqui - lembrar que o esquema agora é o seguinte - Pega as infos diretos na tela de edição e decompõe aqui - não existe mais uma camada intermediária 

for (i=1; i<=30; i++){
var temp = '#conteudo-tela'+i;
$("#stb-final").append($(temp).html());
}
console.log($("#conteudo-tela1").find(':nth-child(1)').attr("data-modelo"));

 $("#stb-final").wordExport(storyboard.arquivoNome);

});







/*  function geraModelo0(){

var element0 = $("#M0element0").html(); // Conteudo parte 1
var element1 = $("#M0element1").html(); // Conteudo parte 2
var element2 = $("#M0element2").html(); // Orientação 
var element3 = $("#M0element3").html(); // Descrição da imagem 
modelo_final_0.push(element0, element1, element2, element3);

}


console.log(telaFinal1.modelo,telaFinal1.conteudo );



var modelo9montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M1T1Tela1</strong></p>
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
					<p id="t1-ctn">` + modelo_final_0[0] + `</p>
					<p id="t1-ctn">` + modelo_final_0[1] + `</p>
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">` + modelo_final_0[2] + `</p>
					<p id="t1-orientacao2">` + modelo_final_0[3] + `</p>
					</td></tr> 
					</table><br>`;

	                $("#stb-final").append(modelo9montado); */