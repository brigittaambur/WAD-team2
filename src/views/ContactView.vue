<script>
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
export default {
  name: 'HomeView',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<template>
  <div class="container">
    <PageHeader />
    <div>
      You can contact WAD team 2 during practice sessions on Mondays! 🎉
    </div>
    <PageFooter />
  </div>
</template>
