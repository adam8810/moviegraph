const { RESTDataSource } = require('apollo-datasource-rest');
const { tmdbKey } = require('../secrets');
const personReducer = require('../reducers/person');
const movieReducer = require('../reducers/movie');

class Movie extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  willSendRequest(request) {
    request.params.set('api_key', tmdbKey);
  }

  async getPopular() {
    const response = await this.get(`movie/popular`, {});
    
    return !Array.isArray(response?.results) ? [] : response.results.map(movieReducer);
  }

  async getMovieById(id) {
    const response = await this.get(`movie/${id}`, {});
    
    return !response ? {} : movieReducer(response);
  }

  async getMovieCast(movieId) {
    const response = await this.get(`movie/${movieId}/credits`, {});
    
    return !Array.isArray(response?.cast) ? [] : response.cast.map(personReducer);
  }
}

module.exports = Movie;