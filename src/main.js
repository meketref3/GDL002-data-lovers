//variable para obtener los datos de mi pokemon.js
const dataPokemon = window.POKEMON.pokemon;

//creo mi funcion para ver las imagenes.
const showImagePokemon =(dataPokemon)=>{

  let result=document.getElementById('card').innerHTML;

  let data=dataPokemon.pokemon;

  data.filter(element=>{
    //console.log(element.img);
   result = result + element.img;
  });
  return result;
  console.log(result);
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
