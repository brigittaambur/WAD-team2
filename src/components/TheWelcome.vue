<script setup>
import PostItem from './PostItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const posts = computed(() => store.getters.allPosts);
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <PostItem :author_name=post.author_name :created_at=post.created_at :text=post.text :image_path=post.image_path
      :image_alt=post.image_alt>
      <template #icon>
        <DocumentationIcon />
      </template>
    </PostItem>
  </div>
</template>
