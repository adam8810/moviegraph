module.exports = (movie) => ({
  id: movie.id,
  imdb_id: movie.imdb_id,
  title: movie.title,
  original_title: movie.original_title,
  tagline: movie.tagline,
  overview: movie.overview,
  release_date: movie.release_date,
  revenue: movie.revenue,
  runtime: movie.runtime,
  status: movie.status,
  poster_path: movie.poster_path,
  adult: movie.adult,
  backdrop_path: movie.backdrop_path,
  belongs_to_collection: movie.belongs_to_collection,
  budget: movie.budget,
});