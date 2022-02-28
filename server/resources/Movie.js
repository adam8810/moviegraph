const { RESTDataSource } = require('apollo-datasource-rest');
const { tmdbKey } = require('../secrets');
const movieCreditReducer = require('../reducers/movieCredit');
const movieReducer = require('../reducers/movie');
const providerReducer = require('../reducers/provider');

class Movie extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  willSendRequest(request) {
    request.params.set('api_key', tmdbKey);
  }

  async getMovielist(type) {
    const response = await this.get(`movie/${type}`, {});
    
    return !Array.isArray(response?.results) ? [] : response.results.map(movieReducer);
  }

  async getMovieSearch(query) {
    const response = await this.get(`search/movie`, {query});

    return !Array.isArray(response?.results) ? [] : response.results.map(movieReducer);
  }

  async getMovieById(id) {
    const response = await this.get(`movie/${id}`, {});
    
    return !response ? {} : movieReducer(response);
  }

  async getMovieCast(movieId) {
    const response = await this.get(`movie/${movieId}/credits`, {});
    
    return !Array.isArray(response?.cast) ? [] : response.cast.map(movieCreditReducer);
  }

  async getMovieProviders(movieId) {
    const response = await this.get(`movie/${movieId}/watch/providers?locale=US`, {});

    if(!response?.results) {
      return {
        rent: [], buy: [], flat: []
      };
    }

    return {
      rent: response.results.US?.rent?.map(providerReducer) || [],
      buy: response.results.US?.buy?.map(providerReducer) || [],
      flatrate: response.results.US?.flatrate?.map(providerReducer) || [],
      ads: response.results.US?.ads?.map(providerReducer) || []
    };
  }
  async getSimilarMovies(movieId) {
    const response = await this.get(`/movie/${movieId}/similar`, {});
    return !Array.isArray(response?.results) ? [] : response.results.map(movieReducer);
  }
}

module.exports = Movie;