function readMore1() {
  var dots = document.querySelector(".dots");
  var moreText = document.querySelector(".more");
  var btnText = document.querySelector("#read-more1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
}

// Model
const Model = {
  players: [],

  init() {
    this.players.push({ id: 1, name: 'Ivi Lopez' });
    this.players.push({ id: 2, name: 'Vladan Kovacević' });
    this.players.push({ id: 3, name: 'Fran Tudor' });
  },

  getPlayers() {
    return this.players;
  },

  addPlayer(name) {
    const newPlayer = {
      id: Date.now(),
      name: name
    };
    this.players.push(newPlayer);
    return newPlayer;
  },

  removePlayer(id) {
    const index = this.players.findIndex(player => player.id === id);
    if (index !== -1) {
      this.players.splice(index, 1);
    }
  }
};

// View
const View = {
  playersList: document.querySelector('#players-list'),

  init() {
    this.renderPlayers(Model.getPlayers());
    this.setupFormSubmit();
  },

  renderPlayers(players) {
    players.forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = player.name;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.addEventListener('click', () => {
        Controller.removePlayer(player.id);
      });

      listItem.appendChild(deleteButton);
      this.playersList.appendChild(listItem);
    });
  },

  setupFormSubmit() {
    const form = document.querySelector('#add-player-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      const input = form.querySelector('#player-input');
      const playerName = input.value;
      Controller.addPlayer(playerName);
      input.value = '';
    });
  },

  updatePlayersList(players) {
    this.playersList.innerHTML = '';
    this.renderPlayers(players);
  }
};

// Controller
const Controller = {
  init() {
    Model.init();
    View.init();
  },

  addPlayer(name) {
    const newPlayer = Model.addPlayer(name);
    View.updatePlayersList(Model.getPlayers());
    console.log(`Dodano piłkarza: ${newPlayer.name}`);
  },

  removePlayer(id) {
    Model.removePlayer(id);
    View.updatePlayersList(Model.getPlayers());
    console.log(`Usunięto piłkarza o ID: ${id}`);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const cookieInfo = document.querySelector("#cookie-info");
  const cookieAcceptButton = document.querySelector("#cookie-accept");

  cookieInfo.style.display = "block";

  cookieAcceptButton.addEventListener("click", function() {
    localStorage.setItem("cookiesAccepted", "true");
    cookieInfo.style.display = "none";
  });
});

Controller.init();