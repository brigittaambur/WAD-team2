<script setup>
import PostItem from './PostItem.vue'
import ThumbsUpIcon from './icons/IconThumbsUp.vue'
import ProfileIcon from './icons/IconProfile.vue'

import { useStore } from 'vuex'

const store = useStore();
const posts = store.state.posts;
function incrementLike(id) {
  // TODO: save like to store
  console.log(id)
}
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <PostItem :author_name=post.author_name :created_at=post.created_at :text=post.text :image_path=post.image_path
      :image_alt=post.image_alt :id=post.id>
      <template #like_icon>
        <ThumbsUpIcon @click="incrementLike(post.id)"/>
      </template>
      <template #profile_icon>
        <ProfileIcon />
      </template>
    </PostItem>
  </div>
</template>
