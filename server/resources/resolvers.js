module.exports = {
  Query: {
    moviesById: (_, { id }, { dataSources }) =>
      dataSources.movies.getMovieById(id),

    person: (_, { personId }, {dataSources}) =>
      dataSources.people.getPersonById(personId),

    // Lists
    popularMovies: (_, __, { dataSources }) =>
      dataSources.movies.getPopular()
  },
  Movie: {
    cast: (parent, {}, { dataSources }) =>
      dataSources.movies.getMovieCast(parent.id),
  },

  Person: {
    movies: (parent, {}, { dataSources }) =>
      dataSources.people.getMoviesByPersonId(parent.id),
  }
}