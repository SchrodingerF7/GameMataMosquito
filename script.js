/* função para verificar o tamanho da tela */

var altura, largura;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal') {

	criaMosquitoTempo = 1500;

} else if (nivel === 'dificil') {

	criaMosquitoTempo = 1000;

} else if (nivel === 'cacador') {

	criaMosquitoTempo = 750;

}

function ajustarTamanhoTela() {

	altura = window.innerHeight;
	largura = window.innerWidth;

}

ajustarTamanhoTela();


var cronometro = setInterval(function () {

	tempo = tempo - 1;
	

	if(tempo < 0) {

		clearInterval(cronometro);
		clearInterval(criaMosquito);
		window.location.href = 'vitoria.html';

	} else {

		document.getElementById('cronometro').innerHTML = tempo;

	}

}, 2000);

/* cria posições randomicas para a img dentro do tamanho de tela ajustado */

function posicaoRandomica() {

	// remover o mosquito anterior, caso exista

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove();

		if (vidas > 3) {

			window.location.href = "gameover.html";

		} else {

			document.getElementById('vida' + vidas).src = 'img/coracaovazio.png';
			vidas++;

		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	/* logica para evitar que o mosquito saia do limite por causa do -90*/

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	// cria o elemento html do mosquito de forma programatica

	var mosquito = document.createElement('img');
	mosquito.src = 'img/mosquito.png';
	mosquito.className = tamanhoMosquitoAleatorio() + ' ' + ladoMosquitoAleatorio();
	mosquito.style.left = posicaoX + 'px';
	mosquito.style.top = posicaoY + 'px';
	mosquito.style.position = 'absolute';
	mosquito.id = 'mosquito';
	document.body.appendChild(mosquito);

	mosquito.onclick = function() {

		this.remove();

	}
	
}

/* função para linkar as classes que determinam o tamanho do mosquito */

function tamanhoMosquitoAleatorio() {

	var classe = Math.floor(Math.random() * 3);

	switch (classe) {

		case 0: 
			return 'mosquito1';

		case 1: 
			return 'mosquito2';

		case 2: 
			return 'mosquito3';

	}

}

/* função para linkar as classes que determinam o lado do mosquito */

function ladoMosquitoAleatorio() {

		var classe = Math.floor(Math.random() * 2);

	switch (classe) {

		case 0: 
			return 'ladoA';

		case 1: 
			return 'ladoB';


	}

}


