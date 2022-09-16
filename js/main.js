// variáves para inserir em funções de evento "click", retornando uma callback e alterando o css

var esconderMostrarHome = document.getElementById('home');
var esconderMostrarSobre = document.getElementById('sobre');
var esconderMostrarPortifolio = document.getElementById('portifolio');
var esconderMostrarContato = document.getElementById('contato');


// variáveis dos seletores incluídos no NAV

var homeNome = document.querySelector('.nome');
var container = document.querySelector('.container');
var container2 = document.querySelector('.container2');
var container3 = document.querySelector('.container3');

// ****** funções ******* //

//home//

esconderMostrarHome.addEventListener('click', function () {
    container.style.display = 'none'
    container2.style.display = 'none';
    container3.style.display = 'none';
    homeNome.style.display = 'block';
})

//sobre//

esconderMostrarSobre.addEventListener('click', function () {
    container.style.display = 'block'
    homeNome.style.display = 'none'
    container2.style.display = 'none';
    container3.style.display = 'none';

});

//portifolio//

esconderMostrarPortifolio.addEventListener('click', function () {
    container.style.display = 'none';
    container2.style.display = 'block';
    container3.style.display = 'none';
    homeNome.style.display = 'none'

});


//contato//

esconderMostrarContato.addEventListener('click', function () {
    container.style.display = 'none';
    container2.style.display = 'none';
    container3.style.display = 'block';
    homeNome.style.display = 'none'

});
