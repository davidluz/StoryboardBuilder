//Classe que cria um objeto do tipo Storyboard
function createStoryboard(){
var storyboard = new Object();  
storyboard.id =  "Insira o número da demanda";
storyboard.demanda = 0;
storyboard.curso =  "Nome do curso";
storyboard.modulo = "Módulo";
storyboard.objetivo = "inserir objetivo";
storyboard.modelo = "inserir modelo";
storyboard.telas = 30;
storyboard.contents = [];
storyboard.tela1, storyboard.tela2, storyboard.tela3,
storyboard.tela4, storyboard.tela5, storyboard.tela6,
storyboard.tela7, storyboard.tela8, storyboard.tela9,
storyboard.tela10, storyboard.tela11, storyboard.tela12, 
storyboard.tela13, storyboard.tela14, storyboard.tela15,
storyboard.tela16, storyboard.tela17, storyboard.tela18,
storyboard.tela19, storyboard.tela20, storyboard.tela21,
storyboard.tela22, storyboard.tela23, storyboard.tela24,
storyboard.tela25, storyboard.tela26, storyboard.tela27,
storyboard.tela28, storyboard.tela29, storyboard.tela30 = 'vazio';

//Getters and Setters

storyboard.getCurso = function(){
	return storyboard.curso;
}

storyboard.getModulo = function(){
	return storyboard.modulo;
}

storyboard.getTelas = function(){
	return storyboard.telas;
}

storyboard.getContents = function(){
	return storyboard.contents;
}


storyboard.setCurso = function(){
	console.log("nome do curso alterado");
}

storyboard.setModulo = function(){
	console.log("modulo do curso alterado");
}

storyboard.setTelas = function(){
	console.log("n de telas alterado");
}

storyboard.setContents = function(){
	console.log("conteudos alterados");
}


return storyboard;

}










