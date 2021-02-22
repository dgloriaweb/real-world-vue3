import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id:'abc123',
      name: 'adam',
    },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']
  },
  mutations: {},
  actions: {},
  modules: {}
})
