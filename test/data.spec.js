require('../src/data.js');
const pokemon = require('../src/data/pokemon/pokemon.js');

describe('pokemon',()=>{
  it('is an object',()=>{
    expect(typeof pokemon).toBe('object');
  });
});

describe('filterData',()=>{
  it('is a function',()=>{
    expect(typeof filterData).toBe('function');
  });
});

describe('sortData',()=>{
  it('is a function',()=>{
    expect(typeof sortData).toBe('function');
  });
});

describe('computeStats',()=>{
  it('is a function',()=>{
    expect(typeof computeStats).toBe('function');
  });
});

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
