<script>

export default {
  name: "PostItem",
  props: {
    id: {
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
    }
  },
}
</script>

<template>
  <article class="post post--grey">
    <header class="post__header">
      <p class="post__date">{{ new Date(created_at).toLocaleString() }}</p>
    </header>
    <p> {{ text }} </p>
  </article>
</template>

<style scoped>
@import '../assets/post.css';
</style>
