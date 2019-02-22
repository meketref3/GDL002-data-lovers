const data = window.POKEMON.pokemon;
document.getElementById('buttonsType').classList.add('display_none');
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
document.getElementById('buttonsType').classList.add('display_block');
document.getElementById('orderBy').classList.add('display_block');
});


const containerRoot = document.getElementById('imagenes');

//-----------------------------filtara------------------------------------------

//hago mi variable de selectType para cargar mi selector ID de html
let selectType =Array.from(document.getElementsByClassName('pokeType'));
//creo mi funcion donde cuando cambie la opcion de mi selector filtre los pokemones.
    for (let i = 0; i <= selectType.length; i++) {
    let botonesArray= selectType[i];
      botonesArray.addEventListener('click',()=>{

        let condition = botonesArray.value;
        /*creo una variable donde obtiene la funcion de filtrar.
        donde le estoy mandando mis datos y mi condicion del selector.*/
        let filtered = window.allPokemon.filterType(data, condition);
        //hago una variable donde me manda el resultado en innerHTML
        let result = "";
        console.log(filtered);
          filtered.forEach(element => {
          result = containerRoot.innerHTML +=
        `<span>
          <img class="activator caja-pokemon" src="${element.img}">
        </span>`;
      console.log(result);
    });
    return result;
});
}

//ordenara
//hago mi variable de selectOrder para cargar mi selector de id de html
/*const selectOrder = document.getElementById('orderBy');
//creo mi funcion donde cuando cambie la opcion de mi selector ordene los pokemones.
selectOrder.addEventListener('change', () => {
  //creo variable donde evalua el cambio del selector.
  let sortBy = selectOrder.value;
  //creo una variable donde obtiene la funcion de filtrar. donde le estoy mandando mis datos y mi condicion del selector.
  let ordered = window.allPokemon.sortData(data, sortBy);
console.log(sortBy);*/
