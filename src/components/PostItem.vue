<script setup>

defineProps({
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
})
function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <article class="post post--grey">
    <header class="post__header">
      <img class="post__profile"> <i class="post__profile">
        <slot name="profile_icon"></slot>
      </i>
      <p class="post__date">{{ created_at }}</p>
    </header>
    <img v-if="image_path" class="post__image" :src="getImageUrl(image_path)" :alt=image_alt>
    <p> {{ text }} </p>
    <i class="post__like">
      <slot name="like_icon"></slot>
    </i>
  </article>
</template>

<style scoped>
.post {
    color: black;
    padding: 20px;
    width: 350px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 grey;
    border-radius: 15px;
    min-width: 250px;
    overflow: hidden;
}

.post__header {
    display: flex;
}

.post--grey {
    background-color: ghostwhite;
}

.post__date {
    margin-left: auto;
}

.post__profile {
    height: auto;
    max-width: 15%;
    padding-bottom: 15px;

}

.post__image {
    height: auto;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
}

.post__like {
    height: auto;
    max-width: 20px;
    padding-top: 10px;
    cursor: pointer;
}

.post>p {
    margin-top: 5px;
    margin-bottom: 5px;
}

</style>
