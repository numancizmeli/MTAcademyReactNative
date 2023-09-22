import axios from 'axios'

export const getFilmCharsFromBackEnd = () => {
  return axios.get('https://swapi.dev/api/people')
}
