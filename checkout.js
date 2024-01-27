let cartItems = [];

function addToCart(title, price) {
    cartItems.push({ title, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalCost = document.getElementById('total-cost');

    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    totalCost.textContent = `Total: $${total.toFixed(2)}`;

    const finalCost = document.getElementById('final-cost');
    finalCost.textContent = `Final Cost: $${total.toFixed(2)}`;
}

function placeOrder() {
    alert('Order placed successfully!');
}
