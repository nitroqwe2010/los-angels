    document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll(".menu .set button");

        buttons.forEach(button => {
            button.addEventListener("click", function () {
                const setName = this.previousElementSibling.previousElementSibling.textContent; // Set nomi
                const priceText = this.previousElementSibling.textContent.replace(/\D/g, ""); // Narxni olish
                const price = parseInt(priceText, 10); // Stringni songa aylantirish

                const quantity = prompt(`Nechta "${setName}" buyurtma qilmoqchisiz?`);

                if (quantity && !isNaN(quantity) && quantity > 0) {
                    const totalCost = price * quantity; // Umumiy summa
                    const confirmOrder = confirm(`${quantity} ta "${setName}" buyurtma berilsinmi?\nUmumiy narx: ${totalCost} so‘m`);

                    if (confirmOrder) {
                        alert(`Sizning ${quantity} ta "${setName}" buyurtmangiz hozir keladi!`);
                    }
                }
            });
        });
    });