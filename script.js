const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.

// Seleziono l'elemento html

let mainContainer = document.querySelector('.container');

// Creo una variabile con un valore di stringa vuota

let htmlElements = "";

// Ciclo sull'array

for (let team of teamMembers) {

  // Seleziono le proprietà degli oggetti

  const { name, role, email, img } = team;

  // Creo degli elementi HTML assegnandoli alla variabile creata in precedenza (htmlElements)

  htmlElements += `
    <div class="team_card">
        <img src="${img}">
        <div class="team_card-text">
            <h2>${name}</h2>
            <h3>${role}</h3>
            <span>${email}</span>
        </div>
    </div>
  `;

  // Inserisco gli elementi creati all'interno della classe .container

  mainContainer.innerHTML = htmlElements;

}

// Bonus
// Rendere l’esercizio responsive, mandando a capo le card
