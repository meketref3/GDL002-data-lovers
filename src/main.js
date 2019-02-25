const data = window.POKEMON.pokemon;

//variables globales.
document.getElementById('buttonsType').classList.add('display_none');
document.getElementById('buttonClear').classList.add('display_none');
document.getElementById('welcomePage').classList.add('display_block');
//document.getElementById('orderBy').classList.add('display_none');


const containerRoot = document.getElementById('imagenes');
let selectType =Array.from(document.getElementsByClassName('pokeType'));
//-----------------------------filtara------------------------------------------
    for (let i = 0; i <= selectType.length; i++) {
    let botonesArray= selectType[i];
       botonesArray.addEventListener('click',()=>{
        document.getElementById('buttonsType').setAttribute("class","display_none");
        document.getElementById('buttonClear').setAttribute('class','display_block');
        document.getElementById('welcomePage').setAttribute('class','display_none');
        document.getElementById('orderBy').classList.add('display_block');
        let condition = botonesArray.value;
        let filtered = window.allPokemon.filterType(data, condition);
        showPokemons(filtered);
    });
  }


  //---------------------------------ordenara------------------------------------
  //hago mi variable de selectOrder para cargar mi selector de id de html
  const selectOrder = document.getElementById('orderBy');
                    //creo mi funcion donde cuando cambie la opcion de mi selector ordene los pokemones.
                  selectOrder.addEventListener('change', () => {
                    //creo variable donde evalua el cambio del selector.
                  let sortBy = selectOrder.value;
                    //creo una variable donde obtiene la funcion de filtrar. donde le estoy mandando mis datos y mi condicion del selector.
                    let ordered = window.allPokemon.sortData(data, sortBy);
                    showPokemonsOrder  (ordered);
                    console.log(ordered);

  });
 ////-------------------------------imprime---------------------------------


function showPokemons (filtered){
   let result = "";
filtered.forEach(element => {
      result = containerRoot.innerHTML +=
        `<div class="caja-pokemon">
            <div class="flip-card">
              <div class="flip-card-inner">
              <div class="flip-card-front">
              <img class="activator" src="${element.img}">
                <h1 class="activator"> ${element.name}</h1>
              </div>
           <div class="flip-card-back caja-pokemon">
          <h1 class="activator"> ${element.num}</h1>
          <p class="activator"> Candy : ${element.candy}</p>
          <p class="activator"> Spawn Chance : ${element.spawn_chance}</p>
          <p class="activator"> Debilidades : ${element.weaknesses.join(" / ")}</p>

        </div>
        </div>
        </div>
        </div>`;
    });
    return result;
}

function showPokemonsOrder (ordered){
   let result = "";
ordered.forEach(element => {
      result = containerRoot.innerHTML +=
        `<div class="caja-pokemon">
            <div class="flip-card">
              <div class="flip-card-inner">
              <div class="flip-card-front">
              <img class="activator" src="${element.img}">
                <h1 class="activator"> ${element.name}</h1>
              </div>
           <div class="flip-card-back caja-pokemon">
          <h1 class="activator"> ${element.num}</h1>
          <p class="activator"> Candy : ${element.candy}</p>
          <p class="activator"> Spawn Chance : ${element.spawn_chance}</p>
          <p class="activator"> Debilidades : ${element.weaknesses.join(" / ")}</p>

        </div>
        </div>
        </div>
        </div>`;
    });
    return result;
}
