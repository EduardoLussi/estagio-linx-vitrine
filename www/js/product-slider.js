// Botões
const preview = document.getElementById('ps-preview'); 
const next = document.getElementById('ps-next');
//Lista e itens
const itensContainer = document.getElementsByClassName('ps-itens-container')[0];
const itens = document.getElementsByClassName('ps-itens')[0];
const item = document.getElementsByClassName('ps-item');

//Eventos dos botões próximo e anterior
preview.addEventListener('click', previewAnimate);
next.addEventListener('click', nextAnimate);

var itensTranslate = 0; // Deslocamento X da lista

//Animação <-
function previewAnimate() {
    const itemWidth = item[0].clientWidth; // Tamanho de cada item da lista
    changeButton(next, "img/next-arrow.png", "pointer");

    let newItensTranslate = itensTranslate + itemWidth * 2;
    if (newItensTranslate < 0) {    //Limite deslocamento <-
        itensTranslate += itemWidth * 2;
    } else {
        changeButton(preview, "img/preview-arrow-desactivated.png", "initial");
        itensTranslate = 0;
    }
    itens.style.transform = 'translateX(' + itensTranslate  + 'px)';
}

//Animação ->
function nextAnimate() {
    const itemWidth = item[0].clientWidth; // Tamanho de cada item da lista
    var nextLimitX = -1 * ((item.length * itemWidth) - itensContainer.clientWidth); //Limite de deslocamento ->
    changeButton(preview, "img/preview-arrow.png", "pointer");

    let newItensTranslate = itensTranslate - itemWidth * 2;
    if (newItensTranslate > nextLimitX) {   //Limite deslocamento ->
        itensTranslate -= itemWidth * 2;
    } else {
        changeButton(next, "img/next-arrow-desactivated.png", "initial");
        itensTranslate = nextLimitX;
    }
    itens.style.transform = 'translateX(' + itensTranslate  + 'px)';
}

//(Des)ativar botoes
function changeButton(button, newSrc, cursor) {
    button.setAttribute("src", newSrc);
    button.style.cursor = cursor;
}