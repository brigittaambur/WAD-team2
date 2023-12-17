<script>
import PostItem from '../components/PostItem.vue';
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
import auth from '../auth'

export default {
  name: 'HomeView',
  components: {
    PostItem,
    PageHeader,
    PageFooter
  },
  methods: {
    deleteAllPosts() {
      fetch(`http://localhost:3000/posts`, { method: "DELETE", headers: { "Content-Type": "application/json" } })
        .then(() => {
          this.$store.dispatch("deleteAllPosts")
        })
    },
    fetchPosts() {
      fetch(`http://localhost:3000/posts`, { headers: { "Content-Type": "application/json" } })
        .then((r) => r.json())
        .then((data) => {
          this.$store.dispatch("saveFetchedPosts", data["data"])
        })
    },
    addPost: function () {
      this.$router.push("/addpost")
    },
    aPost: function (id) {
      this.$router.push(`/apost/${id}`);
    },
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  data: function () {
    return {
      authResult: auth.authenticated()
    }
  },
}
</script>

<template>
  <div class="container">
    <PageHeader />
    <div v-for="post in posts" :key="post.id">
      <PostItem :id=post.id :created_at=post.created_at :text=post.text v-on:click="aPost(post.id)"></PostItem>
    </div>
    <div class="home-buttons-group">
      <button class="home-button home-button--left" v-on:click="addPost">Add post</button>
      <button class="home-button home-button--right" v-on:click="deleteAllPosts">Delete all</button>
    </div>
    <PageFooter />
  </div>
</template>
