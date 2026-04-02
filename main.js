const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const categoryInput = document.getElementById('class-id');
const table = document.querySelector('.contacts-table tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const phone = phoneInput.value;
  const category = categoryInput.value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    <td>${category}</td>
  `;
  table.appendChild(newRow);

  form.reset();
});