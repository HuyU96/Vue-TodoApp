import keyMirror from 'keymirror'
import uuidv4 from 'uuid'

export const mutationTypes = keyMirror({
  FETCH_ALL_TODOS: null,
  ADD_TODO: null,
  REMOVE_TODO: null,
  FILTER_TODOS: null,
  UPDATE_STATUS: null,
  UPDATE_TITLE: null
})

export default {
  [mutationTypes.FETCH_ALL_TODOS] (state, payload) {
    return state.todos = payload
  },
  [mutationTypes.ADD_TODO] (state, payload) {
    const todos = state.todos

    const newTodo = {
      id: uuidv4(),
      title: payload,
      completed: false
    }
    todos.unshift(newTodo)

    return state.todos = todos
  },
  [mutationTypes.REMOVE_TODO] (state, payload) {
    return state.todos = state.todos.filter(todo => todo.id !== payload)
  },
  [mutationTypes.FILTER_TODOS] (state, payload) {
    console.log(payload)
  },
  [mutationTypes.UPDATE_STATUS] (state, payload) {
    return state.todos.map(todo => {
      if (todo.id === payload.id) {
        todo.completed = !todo.completed
      }
    })
  },
  [mutationTypes.UPDATE_TITLE] (state, payload) {
    return state.todos.map(todo => {
      if (todo.id === payload.todo.id) {
        todo.title = payload.value
      }
    })
  }
}
