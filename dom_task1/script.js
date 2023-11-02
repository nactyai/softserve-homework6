const closeBtn = document.querySelector('.closeBtn');
const modalWindow = document.querySelector('#modalWindow');
const seeResBut = document.querySelector('#modalBtn');
const list = document.querySelector('#list');
const listItems = document.querySelectorAll('#list li');
const listValues = document.querySelector('.list-value');

closeBtn.addEventListener('click', function () {
  modalWindow.style.display = 'none';
});


seeResBut.addEventListener('click', function () {
  modalWindow.style.display = 'block';

  let i = 0;
  listValues.innerHTML += listItems[i].textContent + '<br>';
  listValues.innerHTML += listItems[i + 4].textContent + '<br>';
  listValues.innerHTML += listItems[i + 1].textContent + '<br>';
  listValues.innerHTML += listItems[i + 3].textContent + '<br>';
  listValues.innerHTML += listItems[i + 2].textContent + '<br>';



});