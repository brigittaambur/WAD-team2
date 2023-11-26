<script setup>

import PostItem from '../components/PostItem.vue';
import IconThumbsUp from '../components/icons/IconThumbsUp.vue';
import IconProfile from '../components/icons/IconProfile.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { useStore } from 'vuex'

const store = useStore();
const posts = store.state.posts;
function incrementLike(id) {
  // TODO: save like to store
  console.log(id)
}
</script>

<template>
  <div class="container">
    <Header></Header>
      <div v-for="post in posts" :key="post.id">
        <PostItem :author_name=post.author_name :created_at=post.created_at :text=post.text :image_path=post.image_path :image_alt=post.image_alt :id=post.id>
        <template #like_icon>
        <IconThumbsUp @click="incrementLike(post.id)"/>
        </template>
        <template #profile_icon>
        <IconProfile />
        </template>
        </PostItem>
      </div>
    <Footer></Footer>
  </div>
</template>
