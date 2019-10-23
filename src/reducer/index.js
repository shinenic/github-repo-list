import { combineReducers } from 'redux'
const initState = {
  data: [],
  currentCount: 4,
  list: []
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_MORE':
      const length = state.data.length
      return Object.assign({}, state, {
        list: state.data.slice(0, state.currentCount + 2 >= length ? length : state.currentCount + 2),
        currentCount: state.currentCount + 2 >= length ? length : state.currentCount + 2
      })
    case 'GET_DATA_FROM_GITHUB':
      let result = []
      const data = action.payload.data.reverse()
      data.map(value => {
        const obj = {
          name: value.name,
          description: value.description,
          html_url: value.html_url,
          updated_at: value.updated_at,
          language: value.language,
          homepage: value.homepage
        }
        return result.push(obj)
      })
      return Object.assign({}, state, {
        data: result,
        list: result.slice(0, state.currentCount)
      })
    default:
      return state;
  }
}

export default combineReducers({
  root: reducer
})
