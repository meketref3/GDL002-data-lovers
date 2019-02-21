const data = window.POKEMON.pokemon;
document.getElementById('pokeType').classList.add('display_none');
document.getElementById('orderBy').classList.add('display_none');

//variable de bienvenida.
const buttonUseRegister=document.getElementById('buttonRegister');
//Funcion para el registro.
buttonUseRegister.addEventListener('click',function(){
//variable de input para registrar usuario.
const userInput =document.getElementById('user').value;
document.getElementById('useRegister').classList.add('display_none');
document.getElementById('useRegister').classList.remove('display_block');

document.getElementById('hi').innerHTML = 'Hola '+userInput;
document.getElementById('pokeType').classList.add('display_block');
document.getElementById('orderBy').classList.add('display_block');
});




//-----------------------------filtara------------------------------------------

//hago mi variable de selectType para cargar mi selector ID de html
const selectType =document.getElementById('bicho');
//creo mi funcion donde cuando cambie la opcion de mi selector filtre los pokemones.
selectType.addEventListener('click', function(showPokemons)  {
  //creo variable donde evalua el cambio del selector.
  let condition = selectType.value;
  /*creo una variable donde obtiene la funcion de filtrar.
  donde le estoy mandando mis datos y mi condicion del selector.*/
  let filtered = window.allPokemon.filterType(data, condition);
  console.log(filtered);
});


document.getElementById('buttonRegister').addEventListener('click', showPokemons);

function fillElement (data, activeElem){
  for(let i=0; i<data.length; i++){
    let newDiv=document.createElement("div");
    newDiv.className ="contenedor";
    newDiv.innerHTML = "<img src=\"" +data[i].img+ "\">";
    activeElem.insertAdjacentElement('beforeend', newDiv);
  };
};

function showPokemons(){
  let divPokemonList = document.getElementById("imagenes");
  fillElement(data,divPokemonList);
};

//ordenara
//hago mi variable de selectOrder para cargar mi selector de id de html
const selectOrder = document.getElementById('orderBy');
//creo mi funcion donde cuando cambie la opcion de mi selector ordene los pokemones.
selectOrder.addEventListener('change', () => {
  //creo variable donde evalua el cambio del selector.
  let sortBy = selectOrder.value;
  //creo una variable donde obtiene la funcion de filtrar. donde le estoy mandando mis datos y mi condicion del selector.
  let ordered = window.allPokemon.sortData(data, sortBy);
console.log(sortBy);

});
