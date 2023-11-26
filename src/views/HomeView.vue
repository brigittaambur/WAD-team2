<script>
import PostItem from '../components/PostItem.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default{
  name: 'HomeView',
  components: {
    PostItem,
    Header,
    Footer
  },
  methods: {
    resetLikes: function(){
      this.$store.dispatch("resetLikesAct")
    }
  },
  computed:{
    posts(){
      return this.$store.state.posts
    }
  },
}
</script>

<template>
  <div class="container">
    <Header></Header>
      <div v-for="post in posts" :key="post.id">
        <PostItem :id=post.id :author_name=post.author_name :created_at=post.created_at :text=post.text :image_path=post.image_path :image_alt=post.image_alt :likes=post.likes>
        </PostItem>
      </div>
    <button v-on:click="resetLikes">Reset Likes</button>
    <Footer></Footer>
  </div>
</template>
