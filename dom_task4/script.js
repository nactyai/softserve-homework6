// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

const btn = document.querySelector('.btn');
const out = document.querySelector('.out');
const arr = document.querySelectorAll('.arr');

btn.addEventListener('click', function () {
  out.innerHTML = '';
  arr.forEach(function (item) {
    out.innerHTML += '<br>' + item.value;
  });
});

