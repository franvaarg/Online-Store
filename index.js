const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-items')

btnCart/addEventListener('click', () => {  containerCartProducts.classList.toggle('hidden-cart')})