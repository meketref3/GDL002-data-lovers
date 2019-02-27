require('../src/data.js');
const pokemon = require('../src/data/pokemon/pokemon.js');

describe('pokemon',()=>{
  it('is an object',()=>{
    expect(typeof pokemon).toBe('object');
  });
});

describe('allPokemon',()=>{
  it('is an object',()=>{
    expect(typeof allPokemon).toBe('object');
  });
});

describe('filterType',()=>{
  it('is a function',()=>{
    expect(typeof window.allPokemon.filterType).toBe('function');
  });
  it('debería retornar element.type', () =>{
    expect(window.allPokemon.filterType (filterType,'element.type.indexOf(condition) > -1'));
  });
});

describe('sortData',()=>{
  it('is a function',()=>{
    expect(typeof window.allPokemon.sortData).toBe('function');
  });
});

/*describe('computeStats',()=>{
  it('is a function',()=>{
    expect(typeof computeStats).toBe('function');
  });
});*/

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
