document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;

        cartItemsContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const row = document.createElement('tr');

            row.innerHTML = `
                <td>
                    <span>${item.name}</span>
                </td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" class="quantity" data-index="${index}">
                </td>
                <td>₺${item.price.toFixed(2)}</td>
                <td>₺${itemTotal.toFixed(2)}</td>
                <td><button class="btn remove-btn" data-index="${index}">Sil</button></td>
            `;

            cartItemsContainer.appendChild(row);
        });

        totalPriceElement.textContent = `₺${totalPrice.toFixed(2)}`;
    }

    cartItemsContainer.addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity')) {
            const index = event.target.getAttribute('data-index');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart[index].quantity = parseInt(event.target.value);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    cartItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const index = event.target.getAttribute('data-index');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    updateCart();
});
