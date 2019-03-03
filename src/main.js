
//llamo mis datos de pokemon.
const data = window.POKEMON.pokemon;

//esto es lo que se va a mostrar en pantalla
document.getElementById('buttonClear').classList.add('display_none');
document.getElementById('welcomePage').classList.add('display_block');
document.getElementById('orderBy').classList.add('display_none');
document.getElementById('calculo').classList.add('display_none');

//variable para imprimir las imagenes en la pantalla
const containerRoot = document.getElementById('img');


let selectType = Array.from(document.getElementsByClassName('pokeType'));
//-----------------------------filtara------------------------------------------
    for (let i = 0; i < selectType.length; i++) {
    let buttonsArray= selectType[i];
       buttonsArray.addEventListener('click',()=>{
        document.getElementById('buttonsType').setAttribute("class","display_none");
        document.getElementById('buttonClear').setAttribute('class','display_block');
        document.getElementById('welcomePage').setAttribute('class','display_none');
        document.getElementById('orderBy').classList.add('display_block');

        let condition = buttonsArray.value;
        let filtered = window.allPokemon.filterType(data, condition);

          console.log(JSON.stringify (filtered));
        showPokemons(filtered);
        selectOrder(filtered);
        calcSpawnChance(filtered);
    });


}


  //---------------------------------ordenara-9-----------------------------------
  //hago mi funcion para el ordenado.
  function selectOrder (filtered){

                   let selectedOrder = document.getElementById('orderBy');

                    //creo mi funcion donde cuando cambie la opcion de mi selector ordene los pokemones.
                    selectedOrder.addEventListener('change', () => {

                    //creo variable donde evalua el cambio del selector.
                    let sortBy = selectedOrder.value;
                    //creo una variable donde obtiene la funcion de filtrar. donde le estoy mandando mis datos y mi condicion del selector.
                    let ordered = window.allPokemon.sortData(filtered, sortBy);

                   showPokemons(ordered);



     });

}


function card(element) {
  return (`<div class="caja-pokemon">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img class="activator" src="${element.img}"/>
                  <h1 class="activator"> ${element.name}</h1>
                </div>
                <div class="flip-card-back caja-pokemon">
                  <h1 class="activator"> ${element.num}</h1>
                  <p class="activator">  Eggs: ${element.egg}</p>
                  <p class="activator"> Spawn Chance : ${element.spawn_chance}</p>
                  <p class="activator"> Debilidades : ${element.weaknesses.join(" / ")}</p>
                </div>
              </div>
            </div>
          </div>`);
}

//--------------------------------------calculo/-----------------------------------------------------
function calcSpawnChance (filtered){
  let calc = document.getElementById('calculo');

  calc.addEventListener('click',()=>{

    let compute = window.allPokemon.computeStats(filtered);
    //document.getElementById('result').setAttribute("class","show");
    document.getElementById('calculo').setAttribute('class','hidden');
    document.getElementById('orderBy').setAttribute('class','hidden');

       let result = compute.relatedPokemon;
       containerRoot.innerHTML=``;
       containerRoot.innerHTML +=  `<div class="flip-card">
             <div class="flip-card-front boxCompute caja-pokemon">
               <h2>El Pokemon con mayor Spawn Chance de es te tipo ${result.type}</h2>
               <img class="activator" src="${result.img}"/>
               <h1 class="activator"> ${result.spawn_chance}</h1>

             </div>`
       //console.log(JSON.stringify (result));
    });
}




 ////-------------------------------imprime---------------------------------


function showPokemons (filtered){
   let result = "";
   containerRoot.innerHTML = '';
   document.getElementById('calculo').classList.add('display_block');

   filtered.forEach(element => {
     result = containerRoot.innerHTML += card(element);
   });
   return result;
}
