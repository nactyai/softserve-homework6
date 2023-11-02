// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).

// Придумати ще 2 варіації, відяких буде залежати ціна товару.
//Варіанти (розмір, кількість одиниць, наявність знижки і тд)


const colors = document.querySelector('.colors');
const shoes = document.querySelectorAll('.shoe');
const colorItems = document.querySelectorAll('.colors .color');
const gradientItems = document.querySelectorAll('.gradients .gradient');
const outprice = document.getElementById('outprice');
const discont = document.getElementById('discont');


colors.addEventListener('click', (e) => {
    if (e.target.classList.contains('color')) {
        const activeColor = e.target.getAttribute('color');


        colorItems.forEach((color) => {
            color.classList.toggle('active', color === e.target);
        });

        shoes.forEach((shoe) => {
            const shoeColor = shoe.getAttribute('color');
            shoe.classList.toggle('show', shoeColor === activeColor);
        });

        outprice.textContent = e.target.getAttribute('data-price');

        // ціна по знижці
        discont.textContent = e.target.getAttribute('data-discont');
        discont.style.color = 'red';
    }


    gradientItems.forEach((gradient) => {
        gradient.classList.remove('second');
    });


    if (e.target.classList.contains('color')) {
        const activeColor = e.target.getAttribute('color');

        const active = Array.from(gradientItems).find((item) => {
            return item.getAttribute('color') === activeColor;
        });


        if (active) {
            active.classList.add('second');
        }
    }

});
