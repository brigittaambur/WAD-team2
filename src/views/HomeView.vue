<script>
import PostItem from '../components/PostItem.vue';
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
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
    }
  },
  created() {
    this.fetchPosts();
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
}
</script>

<template>
  <div class="container">
    <PageHeader />
    <div v-for="post in posts" :key="post.id">
      <PostItem :id=post.id :created_at=post.created_at :text=post.text :image_path=post.image_path
        :image_alt=post.image_alt>
      </PostItem>
    </div>
    <button class="reset" v-on:click="deleteAllPosts">Delete all</button>
    <PageFooter />
  </div>
</template>
