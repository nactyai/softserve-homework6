// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const submitBtn = document.querySelector('.btn');
const inputFields = document.querySelectorAll('.arr');
const outField = document.querySelector('.out');
const res = [];

submitBtn.addEventListener('click', function () {
  inputFields.forEach(function (item) {
    res.push(item.value);
  });
  const resStr = res.join('<br>');
  outField.innerHTML = resStr;
});
