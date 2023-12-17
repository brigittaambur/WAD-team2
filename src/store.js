import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: []
  },
  mutations: {
    incrementLike(state, id) {
      for (let post of state.posts) {
        if (post.id === id) {
          post.likes += 1
          return
        }
      }
    },
    resetLikes: (state) => {
      state.posts.forEach((post) => {
        post.likes = 0
      })
    },
    saveFetchedPosts: (state, posts) => {
      state.posts = posts
    }
  },
  actions: {
    incrementLikeAct(act, id) {
      setTimeout(function () {
        act.commit('incrementLike', id)
      }, 70)
    },
    resetLikesAct: (act) => {
      setTimeout(function () {
        act.commit('resetLikes')
      }, 70)
    },
    saveFetchedPosts(act, posts) {
      setTimeout(function () {
        act.commit('saveFetchedPosts', posts)
      }, 70)
    },
  }
})
