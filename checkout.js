function addToCart(title, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ title, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
