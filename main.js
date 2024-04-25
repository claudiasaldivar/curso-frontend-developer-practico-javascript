const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu');
const productDetail = document.querySelector('.product-detail');
const car = document.querySelector('.navbar-shopping-cart');

navbarEmail.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMobileMenu)
car.addEventListener('click', toggleCar)

function toggleMenu(){
    const aside = productDetail.classList.contains('inactive')
    if(!aside){
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const aside = productDetail.classList.contains('inactive')
    if(!aside){
        productDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCar(){
    const mobileM = mobileMenu.classList.contains('inactive')
    if(!mobileM){
        mobileMenu.classList.add('inactive')
    }
    productDetail.classList.toggle('inactive')
}


const productlist = [];
productlist.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productlist.push({
    name: 'Bike2',
    price: 125,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productlist.push({
    name: 'Bike3',
    price: 195,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productlist.push({
    name: 'Bike4',
    price: 105,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */}

for(product of productlist){
    const divCard = document.createElement('div')
    divCard.classList.add('product-card')

    const img = document.createElement('img')
    img.setAttribute('src', product.image)

    const divInfo = document.createElement('div')
    divInfo.classList.add('product-info')

    const div = document.createElement('div')

    const precio = document.createElement('p')
    precio.innerText = '$',product.price

    const nombre = document.createElement('p')
    precio.innerText = product.name

    const figure = document.createElement('figure')

    const imgFigure = document.createElement('img')
    imgFigure.setAttribute('src', "./icons/bt_add_to_cart.svg")

    figure.appendChild(imgFigure)
    
    div.appendChild(precio)
    div.appendChild(nombre)

    divInfo.appendChild(div)
    divInfo.appendChild(figure)

    divCard.appendChild(img)
    divCard.appendChild(divInfo)

    const cardsContainer = document.querySelector('.cards-container')
    cardsContainer.appendChild(divCard)
}