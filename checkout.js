document.addEventListener('DOMContentLoaded', () => {
    const summaryTable = document.getElementById('summary-table');
    const totalSummary = document.getElementById('total-summary');

    function updateSummary() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalPrice = 0;

        summaryTable.innerHTML = '';

        cart.forEach(item => {
            const row = document.createElement('tr');
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>₺${item.price.toFixed(2)}</td>
                <td>₺${itemTotal.toFixed(2)}</td>
            `;
            
            summaryTable.appendChild(row);
        });

        totalSummary.textContent = `₺${totalPrice.toFixed(2)}`;
    }

    // Sepet bilgilerini güncelle
    updateSummary();

    // Ödeme formu gönderildiğinde yapılacak işlemler
    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Formun varsayılan gönderimini engelle

        // Form verilerini al
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const city = formData.get('city');
        const zip = formData.get('zip');
        const cardNumber = formData.get('card-number');
        const expiry = formData.get('expiry');
        const cvv = formData.get('cvv');

        // Ödeme işlemi yapılabilir
        // Burada, gerçek bir ödeme işlemi entegre edilebilir

        alert('Ödeme başarıyla tamamlandı!');

        // Sepeti temizle
        localStorage.removeItem('cart');

        // Formu sıfırla
        form.reset();
        updateSummary();
    });
});
