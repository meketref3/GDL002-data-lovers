//variable para obtener los datos de mi pokemon.js
const dataPokemon = window.POKEMON.pokemon;

//creo mi funcion para ver las imagenes.
const showImagePokemon =(dataPokemon)=>{

  let result="";//document.getElementById('card');
  //console.log(result);

  let data=dataPokemon.pokemon;

  //const filterElement = document.createElement('img');
   //img.src='';

  data.filter(element=>{
    //result +=  element.img;
   //console.log(result);
  document.getElementById('imgPokemon').src = element.img;

   //result.push(element.img);
   console.log(result);
  });
  //return result;
   //filterElement = data.map(element => {
   //result.push(element.img);
   //});
};
//este window es para que me muestre lo que le estoy pidiendo en mi showImagePokemon.
window.open = showImagePokemon(POKEMON);



//variable de bienvenida.
const buttonUseRegister=document.getElementById('buttonRegister');
//Funcion para el registro.
buttonUseRegister.addEventListener('click',function(){
//variable de input para registrar usuario.
const userInput =document.getElementById('user').value;
document.getElementById('useRegister').classList.add('display_none');
document.getElementById('useRegister').classList.remove('display_block');

document.getElementById('hi').innerHTML = 'Hola '+userInput;
});
