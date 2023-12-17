<script setup>
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
import LoginForm from '../components/LoginForm.vue';
</script>

<template>
  <div class="container">
    <PageHeader/>
    <main>
      <LoginForm/>
    </main>
  <PageFooter/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
