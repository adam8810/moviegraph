const { RESTDataSource } = require('apollo-datasource-rest');
const { tmdbKey } = require('../secrets');
const personReducer = require('../reducers/person');
const movieReducer = require('../reducers/movie');

class Person extends RESTDataSource {
  constructor () {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  willSendRequest(request) {
    request.params.set('api_key', tmdbKey);
  }

  async getPersonById(id) {
    const response = await this.get(`person/${id}`, {});
    
    return !response ? {} : personReducer(response);
  }

  async getMoviesByPersonId(id) {
    const response = await this.get(`person/${id}/movie_credits`, {});
    
    return !Array.isArray(response?.cast) ? [] : response.cast.map(movieReducer);
  }
}

module.exports = Person;