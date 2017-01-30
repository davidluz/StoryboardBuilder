console.log("Classe Storyboard inicializada...");

//Classe que cria um objeto do tipo Storyboard
function createStoryboard(curso, modulo, telas){
var storyboard = new Object();  
storyboard.id =  "Insira o número da demanda";
storyboard.curso =  "Nome do curso";
storyboard.modulo = "Módulo";
storyboard.telas = 30;
storyboard.contents = [];
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










