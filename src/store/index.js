import Vue from 'vue'
import Vuex from 'vuex'

import Todos from './todo.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos: Todos
  }
});
