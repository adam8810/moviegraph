module.exports = {
  MovielistType: {
    POPULAR: 'popular',
    UPCOMING: 'upcoming',
    TOP_RATED: 'top_rated',
  },
  Query: {
    moviesById: (_, { id }, { dataSources }) =>
      dataSources.movies.getMovieById(id),

    person: (_, { personId }, {dataSources}) =>
      dataSources.people.getPersonById(personId),

    // Lists
    movieList: (_, { type }, { dataSources }) =>
      dataSources.movies.getMovielist(type),

    movieSearch: (_, {query}, { dataSources }) =>
      dataSources.movies.getMovieSearch(query),
  },
  Movie: {
    cast: (parent, {}, { dataSources }) =>
      dataSources.movies.getMovieCast(parent.id),
    providers:(parent, {}, { dataSources}) =>
      dataSources.movies.getMovieProviders(parent.id),
  },

  Person: {
    movies: (parent, {}, { dataSources }) =>
      dataSources.people.getMoviesByPersonId(parent.id),
  }
}