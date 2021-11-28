function createTodoVm() {
  return {
    isLoading: true,
    list: [{ checked: false, name: 'test' }],
  }
}

// { checked, name }

export default createTodoVm
