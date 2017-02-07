var modelo0 = []; 
function modelo0generator(){

	var element0 = $("#element0").html(); // Conteudo parte 1
	var element1 = $("#element1").html(); // Conteudo parte 2
	var element2 = $("#element2").html(); // Orientação 
	var element3 = $("#element3").html(); // Descrição da imagem 
	modelo0.push(element0, element1, element2, element3);
	//$('body').html(modelo0); // Pode virar um Storyboard.append
}




// Funções de Testes 
function logDeMontagem(){


	modelo0generator();
	var modelo0montado =  `<table border="1"> <tr> <td colspan="2" width="992"> 
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
					<p id="t1-ctn">`+ modelo0[0]+`</p>
					<p id="t1-ctn">`+ modelo0[1]+`</p>
					</td>
					<td rowspan="2" width="324">
					<p id="t1-orientacao1">`+ modelo0[2]+`</p>
					<p id="t1-orientacao2">`+ modelo0[3]+`</p>
					</td></tr> 
					</table>`;

	$('body').html(modelo0montado);
}


