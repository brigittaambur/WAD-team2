import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: []
  },
  mutations: {
    saveFetchedPosts: (state, posts) => {
      state.posts = posts
    },
    deleteAllPosts: (state) => {
      state.posts = []
    }
  },
  actions: {
    saveFetchedPosts(act, posts) {
      setTimeout(function () {
        act.commit('saveFetchedPosts', posts)
      }, 70)
    },
    deleteAllPosts(act) {
      setTimeout(function () {
        act.commit('deleteAllPosts')
      }, 70)
    }
  }
})
