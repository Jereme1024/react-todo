const initState = {
  list: [{ checked: false, name: 'init' }],
}

function reducer(state, action) {
  switch (action.type) {
  case 'UpdateList':
    return { ...state, list: action.list }
  default:
    throw new Error()
  }
}

export { initState, reducer }
