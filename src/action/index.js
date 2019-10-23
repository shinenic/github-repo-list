import axios from 'axios'

export const loadMore = () => {
  return {
    type: 'LOAD_MORE',
    payload: null
  }
}

export const getDataFromGithub = () => {
  const res = axios.get('https://api.github.com/users/shinenic/repos')
  return {
    type: 'GET_DATA_FROM_GITHUB',
    payload: res
  }
}