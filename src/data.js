// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};*/
//onst buttonUseRegister=document.getElementById('buttonRegister');

//const infoPokemon = window.POKEMON.pokemon;

//let list=[];
document.getElementById('buttonRegister').addEventListener('click', showPokemons);
function fillElement (infoPokemon, activeElem){

    for(let i=0; i<infoPokemon.length; i++){

         let newDiv=document.createElement("div");
         newDiv.className ="pictures";
         newDiv.innerHTML = "<img src=\"" +infoPokemon[i].img+ "\">";
         activeElem.insertAdjacentElement("beforeend", newDiv);
         
       };
    };

function showPokemons(){
  let infoPokemon = POKEMON.pokemon;
  let divPokemonList = document.getElementById("contenedor");
  fillElement(infoPokemon,divPokemonList);
};


//console.log(fillElement);
