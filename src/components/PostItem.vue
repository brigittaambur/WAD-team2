<script>
export default{
  name: "PostItem",
  props:{
  id: {
    type: Number,
    required: true
  },
  author_name: {
    type: String,
    required: true
  },
  created_at: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  image_path: {
    type: String,
    required: false
  },
  image_alt: {
    type: String,
    required: false
  },
  likes: {
    type: Number,
    required: true
  }
  },
  methods:{
    getImageUrl(name) {
    return new URL(`../assets/${name}`, import.meta.url).href
    
  },
  incrementLike(id) {
    this.$store.dispatch("incrementLikeAct",id)
  }
  }
  
}
</script>

<template>
  <article class="post post--grey">
    <header class="post__header">
      <img src="../assets/img/loginpic.jpeg" class="post__profile"><i class="post__profile">
      </i>
      <p class="post__date">{{ created_at }}</p>
    </header>
    <img v-if="image_path" class="post__image" :src="getImageUrl(image_path)" :alt=image_alt>
    <p> {{ text }} </p>
    <p class="post__like">
      <button class="addLike" v-on:click="incrementLike(id)">
        <img src="../assets/img/thumbsUp.jpg">
      </button>
        <div>{{ likes }}</div>
    </p>
  </article>
</template>

<style scoped>
@import '../assets/post.css'
</style>
