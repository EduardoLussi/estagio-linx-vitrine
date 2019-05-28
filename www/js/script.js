const get = document.createElement("script");
get.setAttribute("src", "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X");
get.setAttribute("id", "get");
document.body.appendChild(get);
document.body.removeChild(document.getElementById("get"));

var X = function(data) {
    loadItens(data);        //Callback JSONP
}

function loadItens(data) {
    document.getElementById('reference').appendChild(createsElement(data.data.reference.item));     //Seta references
    for (let i = 0; i < data.data.recommendation.length; i++) {                                     //Seta recommendation
        let li = document.createElement("li");
        li.setAttribute("class", "ps-item");
        li.appendChild(createsElement(data.data.recommendation[i]));
        document.getElementsByClassName("ps-itens")[0].appendChild(li);
    }
}

function createsElement(item) {                 //Retorna o elemento para html
    let divItem = document.createElement("div");
    divItem.setAttribute("class", "recommends-item");
    let divImg = document.createElement("div");
    divImg.setAttribute("class", "rec-img");
    let img = document.createElement("img");
    img.setAttribute("src", "http:" + item.imageName);
    let a = document.createElement("a");
    a.setAttribute("href", "http:" + item.detailUrl);
    a.setAttribute("target", "_blank");
    let desc = document.createElement("p");
    desc.setAttribute("class", "rec-product-desc");
    desc.innerText = item.name;
    if(item.oldPrice) {                                 //Cria apenas se existe preço antigo
        var oldPrice = document.createElement("p");
        oldPrice.setAttribute("class", "rec-product-old-price");
        oldPrice.innerText = "De: " + item.oldPrice;
    }
    let priceText = document.createElement("p");
    priceText.setAttribute("class", "rec-product-price");
    priceText.innerText = "Por: ";
    let price = document.createElement("span");
    price.innerText = item.price;
    let installmentPrice = document.createElement("p");
    installmentPrice.setAttribute("class", "rec-product-installment-price");
    installmentPrice.innerHTML = item.productInfo.paymentConditions + " <span>sem juros</span>";

    divImg.appendChild(img);
    divItem.appendChild(divImg);
    a.appendChild(desc);
    if(item.oldPrice) {
        a.appendChild(oldPrice);
    }
    priceText.appendChild(price);
    a.appendChild(priceText);
    a.appendChild(installmentPrice);
    divItem.appendChild(a);

    return divItem;
}