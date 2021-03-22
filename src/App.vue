<template>
  <v-app>
    <AppHeader/>
    <router-view/>
  </v-app>
</template>

<script>
  import AppHeader from './components/AppHeader'

  export default {
    components: {
      AppHeader
    },
  }
</script>

<style>
#app {
  text-align: center;
  color: 'rgba(0, 0, 0, 0.6)';
}
</style>