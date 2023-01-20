const navEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuHamIcon = document.querySelector('.menu'); 
const mobileMenu = document.querySelector('.mobile-menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail'); 
const cardsContainer = document.querySelector('.cards-container'); 
const toogleDesktopMenu = () => {
    mobileMenu.classList.add('inactive'); 
    aside.classList.add('inactive'); 
    desktopMenu.classList.toggle('inactive');
}
const toggleMobileMenu = () => {
const isAsideClosed = aside.classList.contains('inactive');
 if(!isAsideClosed){
    aside.classList.add('inactive'); 
 }
    mobileMenu.classList.toggle('inactive'); 
}
const toogleCarritoAside = () => {
const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); 
}
navEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside); 



let dataArray = [];
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => dataArray.push(element));
    iterarCArds(dataArray); 
  })
  .catch(error => {
    console.error('Error:', error);
  });

function iterarCArds(productos){
    for(datos of productos){
        const divCard = document.createElement('div');
        divCard.classList.add('product-card'); 
        const imgProd = document.createElement('img'); 
        imgProd.setAttribute('src', datos.image); 
        const divInfo = document.createElement('div');
        divInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const priceInfo = document.createElement('p'); 
        priceInfo.innerText = `$ ${datos.price}`;
        const nameProduct = document.createElement('p'); 
        nameProduct.innerText = `${datos.title}`; 
        productInfoDiv.appendChild(priceInfo);
        productInfoDiv.appendChild(nameProduct); 
        const figura = document.createElement('figure'); 
        const imgAddCard = document.createElement('img'); 
        imgAddCard.setAttribute('src', './icons/bt_add_to_cart.svg'); 
        figura.appendChild(imgAddCard);
        divCard.appendChild(imgProd);
        divInfo.appendChild(productInfoDiv); 
        divInfo.appendChild(figura);
        divCard.appendChild(divInfo); 
        cardsContainer.appendChild(divCard); 
     }
}