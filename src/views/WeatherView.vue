<template>
  <div class="weatherview" >
    <Weather />
    <Footer />

  </div>
</template>

<script>
import Weather from '@/components/Weather.vue';
import Footer from '@/components/Footer.vue' ;

export default {
  components: {
    Weather,
    Footer,
  },
};
</script>

<style>
  .weatherview {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: solid 1px #2c3e50;
    border-radius: 1vw;
    padding: 3vw;
  }
</style>
