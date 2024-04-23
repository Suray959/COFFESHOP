

let cart = [];

function addToCart(itemName, itemPrice) {
    let newItem = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === itemName) {
            newItem = cart[i];
            break;
        }
    }
    
    if (newItem) {
        newItem.quantity++;
        newItem.price += itemPrice;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    
    updateCart();
   
}

function deleteFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    showCartDetails();
}

function updateCart() {
    let shopDiv = document.querySelector('.shop');
    shopDiv.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        totalPrice += item.price;
        shopDiv.innerHTML += `<p>${item.name} x ${item.quantity}: $${item.price}</p>`;
    });

    shopDiv.innerHTML += `<p>Total: $${totalPrice}</p>`;
}


