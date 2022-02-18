module.exports = (person) => ({
  id: person.id,
  imdb_id: person.imdb_id,
  name: person.name,
  profile_path: person.profile_path,
  bio: person.biography,
  birthday: person.birthday,
  deathday: person.deathday,
});