const Movie = require('./resources/Movie');
const Person = require('./resources/Person');

module.exports = () => ({
  movies: new Movie(),
  people: new Person(),
});
