const initState = {
  list: [{ checked: false, name: 'init' }],
  name: '',
  mode: 'All',
}

function reducer(state, action) {
  switch (action.type) {
  case 'UpdateName':
    return { ...state, name: action.name }
  case 'UpdateMode':
    return { ...state, mode: action.mode }
  case 'UpdateList':
    return { ...state, list: action.list }
  default:
    throw new Error()
  }
}

export { initState, reducer }
