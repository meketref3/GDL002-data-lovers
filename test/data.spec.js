require('../src/data.js');
const pokemon = require('../src/data/pokemon/pokemon.json');
const filterTypeMock = require('../src/data/pokemon/filterTypeMock.json');
const sortDataMock  = require('../src/data/pokemon/sortDataMck.json');
const computeStatsMock = require('../src/data/pokemon/computeStatsMock.json');


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

  it('should return a subset of electric pokemon', () => {

    expect(window.allPokemon.filterType(pokemon.pokemon, 'Electric')).toEqual(filterTypeMock);
  });
});

describe('sortData',()=>{
  it('is a function',()=>{
    expect(typeof window.allPokemon.sortData).toBe('function');
  });
  it('should return order of dragon pokemon', () =>{
    expect(window.allPokemon.sortData(pokemon.pokemon, 'a-z')).toEqual(sortDataMock);
  });
});

describe('computeStats',()=>{
  it('is a function',()=>{
  expect(typeof window.allPokemon.computeStats).toBe('function');
  });
  it ('should return the greatest spawn_chance of pokemon dragon',()=>{
    expect(typeof window.allPokemon.computeStats(pokemon.pokemon,'spawn_chance')).toEqual(computeStatsMock);

  });
});
