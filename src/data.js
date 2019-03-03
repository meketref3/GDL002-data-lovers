window.allPokemon = {
      //creo mi funcion de filtrado, donde coloco los parametros de data
      // y condition que estan declarados en mi main.
      filterType: (data, condition) => {
              //se crea una variable donde le hago una funcion de los datos con un filter
             //le pongo el argumento element.
              const filteredType = data.filter(element => {
                    /*retorno mi element.type(que es el tipo de mi pokemon).junto con el
                     metodo indexOf, donde le paso mi condition donde esta evaluando mi selector del html.
                     retorna el primer índice en el que se puede encontrar un elemento
                     dado en el array, ó retorna -1 si el elemento no esta presente.*/
                     return element.type.indexOf(condition) > -1;

        });
                           //como function retorna mi filteredType.
                             return filteredType;

},




       //creo mi funcion de ordenado. le paso mis parametros data y sortBy
      //que estan en mi main.js
  sortData: (filtered, sortBy) => {
         /* console.log(data, sortOrder);
         hago dos condicionales donde si mi en mi primera
          condicion selecion es a-z*/
             if (sortBy == 'a-z') {
               /*me retorna los datos con mi .sort
               en la cual creo una funcion con los parametros a,b.
                 en ella creo otras dos condicionales*/
              return filtered.sort((a, b) => {
           //si  a.name(data) es mayor b.name(data)
            if (a.name > b.name) {
          //retorna 1
          return 1;
        }
           //si a.name es menor b.name
        if (a.name < b.name) {
          //retorna menos 1
          return -1;
        }

        return 0;
      });

      /* console.log(data, sortOrder);
   hago dos condicionales donde si mi en mi primera
   condicion selecion es z-a*/
   }if (sortBy == 'z-a') {
      /*me retorna los datos con mi .sort
      en la cual creo una funcion con los parametros a,b.
      en ella creo otras dos condicionales*/
      return filtered.sort((a, b) => {
        //si  a.name(data) es menor b.name(data)
        if (a.name < b.name) {
          //retorna 1
          return 1;
          //si  a.name(data) es mayor b.name(data)
        }if (a.name > b.name) {
          //retorna 1
         return -1;
        }
        return 0;
      });
    }
},




  computeStats: (filtered) => {

      let maxArray = filtered.map((element) => (element.spawn_chance));
         let maxSpawnChance = Math.max.apply(Math, maxArray);
         let relatedPokemon = filtered.find(element => element.spawn_chance === maxSpawnChance);
          //console.log(result);

          return  {maxSpawnChance, relatedPokemon};
          
     }

};
