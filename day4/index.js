const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const colors = {
    fire :'#FDDFDF',
    grass :'#DEFDE0',
    electric :'#FCF7DE',
    water :'#DEF3FD',
    ground :'#f4e7da',
    rock :'#d5d5d4',
    fairy :'#fceaff',
    poison :'#98d7a5',
    bug :'#f8d5a3',
    dragon :'#97b3e6',
    psychic :'#eaeda1',
    flying :'#F5F5F5',
    fighting :'#E6E0D4',
    normal :'#F5F5F5'
    
}

const main_types = Object.keys(colors);


const fetchPokemons = async() =>{
    for(let i= 1; i<= pokemons_number; i++){  //150가지의 포켓몬
        await getPoketmon(i);       //포켓몬을 받아온다.
    }
}

const getPoketmon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`; //api를 이용해서 url 구성
    
    const res = await fetch(url); // 요청하고
    
    const pokemon = await res.json(); //json 형식으로 받아온다.

    
    //console.log(pokemon);
    console.log(typeof(pokemon)) // 

    createPokemonCard(pokemon); //q
    
}

fetchPokemons();



function createPokemonCard(pokemon){
    
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    
    const poke_types = pokemon.types.map(el => el.type.name);

//  console.log(poke_types);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);

    const color = colors[type];

    pokemonEl.style.backgroundColor = color;
    //console.log(type);

    const pokeInnerHtml = `
        <div class ="img-container">
            <img src = "https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />

        </div>
        <div class ="info">
            <span class = "number">#${pokemon.id.toString().padStart(3,'0')}</span>
            <h3 class ="name">${pokemon.name} </h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;
    
    pokemonEl.innerHTML = pokeInnerHtml;
    
    poke_container.appendChild(pokemonEl);
    
}
