import Product from './product.js'

const section = document.querySelector('section')

//Produtos Copa
const prod1 = new Product('Camisa Copa', 230.0, 'Camisa Unissex da Copa tamanho M', '../img/camisa-copa.png');
const prod2 = new Product('Álbum Copa', 110.0, 'Album da copa de 2022 versão Gold', '../img/album-copa.png');
const prod3 = new Product('Mascote da Copa', 120.0, 'Mascote de pelúcia da copa de 2022', '../img/mascote-copa.jpg');
const prod4 = new Product('Bola de futebol da Copa', 120.0, 'Bola de futebol da copa de 2022', '../img/bola-futebol-copa.jpeg');
const prod5 = new Product('Chaveiro Troféu Copa', 120.0, 'Bola de futebol da copa de 2022', '../img/chaveiro-copa.jpeg');
const prod6 = new Product('Garrafa Retro Copa', 120.0, 'Bola de futebol da copa de 2022', '../img/garrafa-retro-copa.jpeg');
const prod7 = new Product('Brinquedo Neymar', 120.0, 'Bola de futebol da copa de 2022', '../img/brinquedo-neymar.jpeg');
const prod8 = new Product('Ingresso Copa 2022', 120.0, 'Bola de futebol da copa de 2022', '../img/ingresso-copa.jpeg');
const prod9 = new Product('Figurinhas da Copa 2022', 120.0, 'Bola de futebol da copa de 2022', '../img/figurinhas-copa.jpeg');
const prod10 = new Product('Balde pipoca Copa', 120.0, 'Bola de futebol da copa de 2022', '../img/balde-pipoca-copa.jpeg');

//Produtos eletronicos/setup
const prod11 = new Product('Iphone 14 PLUS', 8000.0, 'Iphone 14 PLUS com 128 GB', '../img/iphone.jpeg');
const prod12 = new Product('Head Set Razer', 120.0, 'Head Set Razer Turbo Max Verde/Preto', '../img/head-set.png');
const prod13 = new Product('Cadeira Gamer', 120.0, 'Cadeira Gamer Rx3000 Vermelha', '../img/cadeira-gamer.jpeg');
const prod14 = new Product('Samsung Galaxy', 120.0, 'Notebook Samsung Max Pro 2.0', '../img/samsung-galaxy.jpeg');
const prod15 = new Product('Smartphone Xiaomi', 120.0, 'Notebook Samsung Max Pro 2.0', '../img/smartphone-xiaomi.jpeg');
const prod16 = new Product('SmartPhone Motorola', 120.0, 'Notebook Samsung Max Pro 2.0', '../img/smartphone-motorola.jpeg');
const prod17 = new Product('MacBook', 120.0, 'Notebook Samsung Max Pro 2.0', '../img/macbook.jpeg');
const prod18 = new Product('Pc Gamer', 120.0, 'Pc Gamer Pixal', '../img/pc-gamer.jpeg');
const prod19 = new Product('Mouse Gamer', 120.0, 'Notebook Samsung Max Pro 2.0', '../img/mouse-gamer.jpeg');
const prod20 = new Product('Teclado Gamer', 120.0, 'Notebook Samsung Max Pro 2.0', '../img/teclado-gamer.jpeg');

//Produtos Vestimenta
const prod21 = new Product('Casaco moletom Adidas', 120.0, 'Moletom Adidas Masculino cinza tamanho 36', '../img/moletom-adidas.jpeg');
const prod22 = new Product('Tênis Nike', 120.0, 'Tênis de corrida Nike Masculino tamanho 40', '../img/tenis-nike.jpeg');
const prod23 = new Product('Boné da Puma', 120.0, 'Boné da Puma core preta Unissex', '../img/bone-puma.jpeg');
const prod24 = new Product('Calça da Diesel', 120.0, 'Calça da Diesel Masculina tamanho M', '../img/calca-diesel.jpeg');
const prod25 = new Product('Cueca Lupo', 120.0, 'Calça da Diesel Masculina tamanho M', '../img/cueca-lupo.jpeg');
const prod26 = new Product('Jaqueta Jeans', 120.0, 'Calça da Diesel Masculina tamanho M', '../img/jaqueta-jeans.jpeg');
const prod27 = new Product('Calça moletom Adidas', 120.0, 'Calça da Diesel Masculina tamanho M', '../img/calca-moletom-adidas.jpeg');
const prod28 = new Product('Calça Levis', 120.0, 'Calça da Diesel Masculina tamanho M', '../img/calca-levis.jpeg');
const prod29 = new Product('Camisa Nike', 120.0, 'Calça da Diesel Masculina tamanho M', '../img/camisa-nike.jpeg');
const prod30 = new Product('Tenis Corrida Asics', 120.0, 'Tênis de corrida Asics', '../img/tenis-corrida-asics.jpeg');


const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10,
    prod11, prod12, prod13, prod14, prod15, prod16, prod17, prod18, prod19, prod20,
    prod21, prod22, prod23, prod24, prod25, prod26, prod27, prod28, prod29, prod30]
let n = 1

products.forEach(product => {
    localStorage.setItem(`Product${n}`, JSON.stringify(product))
    n += 1
})


const productJSON = localStorage.getItem('Product1');

console.log(productJSON)

const productObj = JSON.parse(productJSON)

console.log(productObj)



function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

const listProductsJson = allStorage();

const listProductObj = listProductsJson.map(prod => {
    return JSON.parse(prod)
})

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffle(listProductObj)

let count = 1;
const limitOfProductsToShow = 12;

listProductObj.forEach(prodObj => {
  //  if(count <= limitOfProductsToShow){
        const div = document.createElement('div')
        const imgProd = document.createElement('img')
        const pTitle = document.createElement('p')
        const pPrice = document.createElement('p')
        const pDescription = document.createElement('p')
    
        imgProd.src = prodObj.linkImg
        pTitle.innerText = prodObj.name
        pPrice.innerText = "R$" + prodObj.price
        pDescription.innerText = prodObj.description
    
        div.appendChild(imgProd)
        div.appendChild(pTitle)
        div.appendChild(pPrice)
        div.appendChild(pDescription)
    
    
        section.appendChild(div)
  //  }
    //count++
   
})



