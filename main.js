const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const categoryInput = document.getElementById('class-id');
const deleteAllButton = document.getElementById('clear-btn');
const table = document.querySelector('.contacts-table');

deleteAllButton.addEventListener('click', function() {
  
  table.innerHTML = `
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  `;
});
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