<script setup>
defineProps({
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
})
</script>

<template>
  <article class="post post--grey" id="{{ id }}">
    <i>
      <slot name="icon"></slot>
    </i>
    <header class="post__header">
      <img class="post__profile" src="loginpic.jpeg" alt="Profile Image">
      <p class="post__date">{{ created_at }}</p>
    </header>
    <img class="post__image" :src=image_path :alt=image_alt>
    <p> {{ text }} </p>
    <img class="post__like" src="thumbs-up-solid.svg" alt="Like Image">
  </article>
</template>

<style scoped>
</style>
