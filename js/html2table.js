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

var modelo_final_0 = [];
var modelo_final_1 = [];
var modelo_final_2 = [];
var modelo_final_3 = [];
var modelo_final_4 = [];
var modelo_final_5 = [];
var modelo_final_6 = [];
var modelo_final_7 = [];
var modelo_final_8 = [];
var modelo_final_9 = [];



function montaSTBcompleto() {
 
    $("#stb-final").empty();

	for (i = 1; i <= 30; i++) {

	
		var temp = $(conteudosDasTelas[i]).find(':nth-child(1)').attr("data-modelo");
		var temp2 = conteudosDasTelas[i];

		console.log(temp);
		console.log(temp2);

	
		geraPaginaDeSTB(temp, temp2);

	}

}

function geraPaginaDeSTB(modelo, conteudo) {


	if (modelo == 0) {
		montaModelo0();
	}

	if (modelo == 1) {
		montaModelo1();
	}

	if (modelo == 2) {
		montaModelo2();
	}

	if (modelo == 3) {
		montaModelo3();
	}

	if (modelo == 4) {
		montaModelo4();
	}

	if (modelo == 5) {
		montaModelo5();
	}

	if (modelo == 6) {
		montaModelo6();
	}

	if (modelo == 7) {
		montaModelo7();
	}

	if (modelo == 8) {
		montaModelo8();
	}

	if (modelo == 9) {
		montaModelo9();
	}

}


function montaModelo0() {

	modelo0generator();
	var modelo0montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
					<p id="id-t1"><strong>M1Tela1</strong></p>
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

	$("#stb-final").append(modelo0montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo1() {

	modelo1generator();
	var modelo1montado = `modelo de página 1`+ modelo_final_1[0];

	$("#stb-final").append(modelo1montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}


function montaModelo2() {

	modelo2generator();
	var modelo2montado = `modelo de página 2` + modelo_final_2[0];

	$("#stb-final").append(modelo2montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo3() {

	modelo3generator();
	var modelo3montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
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

	$("#stb-final").append(modelo3montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo4() {

	modelo4generator();
	var modelo4montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
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

	$("#stb-final").append(modelo4montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo5() {

	modelo5generator();
	var modelo5montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
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

	$("#stb-final").append(modelo5montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo6() {

	modelo6generator();
	var modelo6montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
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

	$("#stb-final").append(modelo6montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo7() {

	modelo7generator();
	var modelo7montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
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

	$("#stb-final").append(modelo7montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo8() {

	modelo8generator();
	var modelo8montado = `<table border="1"> <tr> <td colspan="2" width="992"> 
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

	$("#stb-final").append(modelo8montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}

function montaModelo9() {

	modelo9generator();
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

	$("#stb-final").append(modelo9montado);
	$("#stb-final").wordExport(storyboard.arquivoNome);
}



function modelo0generator() {
	var element0 = $("#M0element0").html(); // Conteudo parte 1
	var element1 = $("#M0element1").html(); // Conteudo parte 2
	var element2 = $("#M0element2").html(); // Orientação 
	var element3 = $("#M0element3").html(); // Descrição da imagem 
	modelo_final_0.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}


function modelo1generator() {
	var element0 = $("#M1element0").html(); // Conteudo parte 1
	var element1 = $("#M1element1").html(); // Conteudo parte 2
	var element2 = $("#M1element2").html(); // Orientação 
	var element3 = $("#M1element3").html(); // Descrição da imagem 
	modelo_final_1.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}

function modelo2generator() {
	var element0 = $("#M1element0").html(); // Conteudo parte 1
	var element1 = $("#M2element1").html(); // Conteudo parte 2
	var element2 = $("#M2element2").html(); // Orientação 
	var element3 = $("#M2element3").html(); // Descrição da imagem 
	modelo_final_2.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}


function modelo3generator() {
	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo_final_3.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}


function modelo4generator() {
	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo_final_4.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}

function modelo5generator() {
	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo_final_5.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}

function modelo6generator() {
	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo_final_6.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}

function modelo7generator() {
	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo_final_7.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}


function modelo8generator() {
	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo_final_8.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}


function modelo9generator() {
	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo_final_9.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
	$("#stb-final").css("display", "none");
}