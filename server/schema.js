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

  type MovieCredit {
    id: Int!
    imdb_id: String
    name: String!
    character: String
    profile_path: String
  }

  type Movie {
    id: Int!
    imdb_id: String
    title: String!
    original_title: String
    tagline: String
    overview: String
    release_date: String
    revenue: Int
    runtime: Int
    status: String
    poster_path: String
    adult: Boolean
    backdrop_path: String
    budget: Int
    cast: [MovieCredit]
    providers: ProviderOptions
  }

  type ProviderOptions {
    rent: [Provider]!
    buy: [Provider]!
    flat: [Provider]!
  }

  type Provider {
    id: Int!
    name: String!
  }

  enum MovielistType {
    POPULAR
    UPCOMING
    TOP_RATED
  }

  type Query {
    moviesById(id: Int!): Movie
    person(personId: Int!): Person
    movieList(type: MovielistType!): [Movie]!
    movieSearch(query: String!): [Movie]!
  }
`;

module.exports = typeDefs;