let riga = document.getElementById("dati");
let contenitore = [];

window.addEventListener("DOMContentLoaded", init);

function init() {
  stampaJSON();
}

function stampaJSON() {
  fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    return response.json();
  }).then(data => {
    contenitore = data;
    riga.innerHTML = '';
    contenitore.map(function (Elemento) {
      riga.innerHTML +=
        `<tr>
        <th scope="row">${Elemento.id}</th>
        <td>${Elemento.name}</td>
        <td>${Elemento.username}</td>
        <td>${Elemento.email}</td>
        <td>${Elemento.address.city}</td>
        <td>${Elemento.phone}</td>
      </tr>
      <tr>`;
    });
  })
}

