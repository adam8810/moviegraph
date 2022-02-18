const { gql } = require('apollo-server');

const typeDefs = gql`

  type Person {
    id: Int!
    imdb_id: String
    name: String!
    profile_path: String
    bio: String
    birthday: String
    deathday: String
    movies: [Movie]!
  }

  type Movie {
    id: Int!
    imdb_id: String
    title: String!
    original_title: String!
    tagline: String
    overview: String
    release_date: String
    revenue: Int!
    runtime: Int!
    status: String!
    poster_path: String
    adult: Boolean!
    backdrop_path: String!
    budget: Int!
    cast: [Person]
  }

  type Query {
    moviesById(id: Int!): Movie
    movieCast(movieId: Int!): [Person]!
    person(personId: Int!): Person
    popularMovies: [Movie]!
  }
`;

module.exports = typeDefs;