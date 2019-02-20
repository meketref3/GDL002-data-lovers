//variable para obtener los datos de mi pokemon.js
const dataPokemon = window.POKEMON.pokemon;

//creo mi funcion para ver las imagenes en mi root
const showImagePokemon =(dataPokemon)=>{
  const result='';
  let data=dataPokemon.pokemon;

  data.filter(element=>{
    //document.write(element.img);
    console.log(element.img);
   //document.getElementById('imgPokemon').innerHTML + element.img;
  });
  //return document.getElementById('imgPokemon').innerHTML= element.img;
};
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
