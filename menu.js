let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function deleteFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let shopDiv = document.querySelector('.shop');
    shopDiv.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;
        shopDiv.innerHTML += `<p>${item.name}: $${item.price}</p>`;
    });

    shopDiv.innerHTML += `<p>Total: $${totalPrice}</p>`;
}
