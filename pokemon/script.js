function buscarPokemon() {
  const nomeOuNumero = document.getElementById('pokemonInput').value.toLowerCase();
  const url = `https:pokeapi.co/api/v2/pokemon/${nomeOuNumero}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Pokémon não encontrado");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('pokemonName').textContent = data.name.toUpperCase();
      document.getElementById('pokemonImage').src = data.sprites.front_default;
      document.getElementById('pokemonType').textContent =
        'Tipo: ' + data.types.map(type => type.type.name).join(', ');
      document.getElementById('pokemonCard').classList.remove('escondido');
    })
    .catch(error => {
      alert(error.message);
      document.getElementById('pokemonCard').classList.add('escondido');
    });
}
console.log