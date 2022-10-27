import Product from './product.js'

const section = document.querySelector('section')


//Produtos Copa
const prod1 = new Product('Camisa Copa', 230.0, 'Lorem ipsum dolor sit amet', '../img/camisa-copa.png', 'Copa');
const prod2 = new Product('Álbum Copa', 110.0, 'Lorem ipsum dolor sit amet', '../img/album-copa.png' , 'Copa');
const prod3 = new Product('Mascote da Copa', 120.0, 'Lorem ipsum dolor sit amet', '../img/mascote-copa.jpg' , 'Copa');
const prod4 = new Product('Bola de futebol da Copa', 120.0, 'Lorem ipsum dolor sit amet', '../img/bola-futebol-copa.jpeg' , 'Copa');
const prod5 = new Product('Chaveiro Troféu Copa', 120.0, 'Lorem ipsum dolor sit amet', '../img/chaveiro-copa.jpeg' , 'Copa');
const prod6 = new Product('Garrafa Retro Copa', 120.0, 'Lorem ipsum dolor sit amet', '../img/garrafa-retro-copa.jpeg' , 'Copa');
const prod7 = new Product('Brinquedo Neymar', 120.0, 'Lorem ipsum dolor sit amet', '../img/brinquedo-neymar.jpeg' , 'Copa');
const prod8 = new Product('Ingresso Copa 2022', 120.0, 'Lorem ipsum dolor sit amet', '../img/ingresso-copa.jpeg' , 'Copa');
const prod9 = new Product('Figurinhas da Copa 2022', 120.0, 'Lorem ipsum dolor sit amet', '../img/figurinhas-copa.jpeg' , 'Copa');
const prod10 = new Product('Balde pipoca Copa', 120.0, 'Lorem ipsum dolor sit amet', '../img/balde-pipoca-copa.jpeg' , 'Copa');

//Produtos eletronicos/setup
const prod11 = new Product('Iphone 14 PLUS', 8000.0, 'Lorem ipsum dolor sit amet', '../img/iphone.jpeg', 'Eletrônicos');
const prod12 = new Product('Head Set Razer', 120.0, 'Lorem ipsum dolor sit amet', '../img/head-set.png', 'Eletrônicos');
const prod13 = new Product('Cadeira Gamer', 120.0, 'Lorem ipsum dolor sit amet', '../img/cadeira-gamer.jpeg', 'Eletrônicos');
const prod14 = new Product('Samsung Galaxy', 120.0, 'Lorem ipsum dolor sit amet', '../img/samsung-galaxy.jpeg', 'Eletrônicos' );
const prod15 = new Product('Smartphone Xiaomi', 120.0, 'Lorem ipsum dolor sit amet', '../img/smartphone-xiaomi.jpeg', 'Eletrônicos');
const prod16 = new Product('SmartPhone Motorola', 120.0, 'Lorem ipsum dolor sit amet', '../img/smartphone-motorola.jpeg', 'Eletrônicos');
const prod17 = new Product('MacBook', 120.0, 'Lorem ipsum dolor sit amet', '../img/macbook.jpeg', 'Eletrônicos');
const prod18 = new Product('Pc Gamer', 120.0, 'Lorem ipsum dolor sit amet', '../img/pc-gamer.jpeg', 'Eletrônicos');
const prod19 = new Product('Mouse Gamer', 120.0, 'Lorem ipsum dolor sit amet', '../img/mouse-gamer.jpeg', 'Eletrônicos');
const prod20 = new Product('Teclado Gamer', 120.0, 'Lorem ipsum dolor sit amet', '../img/teclado-gamer.jpeg', 'Eletrônicos');

//Produtos Vestimenta
const prod21 = new Product('Casaco moletom Adidas', 120.0, 'Lorem ipsum dolor sit amet', '../img/moletom-adidas.jpeg', 'Vestuario');
const prod22 = new Product('Tênis Nike', 120.0, 'Lorem ipsum dolor sit amet', '../img/tenis-nike.jpeg', 'Vestuario');
const prod23 = new Product('Boné da Puma', 120.0, 'Lorem ipsum dolor sit amet', '../img/bone-puma.jpeg', 'Vestuario');
const prod24 = new Product('Calça da Diesel', 120.0, 'Lorem ipsum dolor sit amet', '../img/calca-diesel.jpeg', 'Vestuario');
const prod25 = new Product('Cueca Lupo', 120.0, 'Lorem ipsum dolor sit amet', '../img/cueca-lupo.jpeg', 'Vestuario');
const prod26 = new Product('Jaqueta Jeans', 120.0, 'Lorem ipsum dolor sit amet', '../img/jaqueta-jeans.jpeg', 'Vestuario');
const prod27 = new Product('Calça moletom Adidas', 120.0, 'Lorem ipsum dolor sit amet', '../img/calca-moletom-adidas.jpeg', 'Vestuario');
const prod28 = new Product('Calça Levis', 120.0, 'Lorem ipsum dolor sit amet', '../img/calca-levis.jpeg', 'Vestuario');
const prod29 = new Product('Camisa Nike', 120.0, 'Lorem ipsum dolor sit amet', '../img/camisa-nike.jpeg', 'Vestuario');
const prod30 = new Product('Tenis Corrida Asics', 120.0, 'Lorem ipsum dolor sit amet', '../img/tenis-corrida-asics.jpeg', 'Vestuario');


const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10,
    prod11, prod12, prod13, prod14, prod15, prod16, prod17, prod18, prod19, prod20,
    prod21, prod22, prod23, prod24, prod25, prod26, prod27, prod28, prod29, prod30]
let n = 1

products.forEach(product => {
    localStorage.setItem(`Product${n}`, JSON.stringify(product))
    n += 1
})

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

document.addEventListener('DOMContentLoaded', function() {
    showProd()
}, false);


function showProd(){
listProductObj.forEach(prodObj => {
    if (prodObj.segment == 'Eletrônicos') {
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
    }
    count++

})
}


const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keydown', () => {
    while (section.firstChild) {
        section.removeChild(section.lastChild);
      }

      listProductObj.forEach(prodObj => {
            if(((prodObj.name).toLowerCase().includes(searchInput.value.toLowerCase())) && prodObj.segment == 'Eletrônicos'){
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
            }
        count++
    
    })
})













