<template>
  <v-main class="grey lighten-3">
      <v-container>
        <HomeHero/>
      </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/HomeHero.vue'

export default {
  name: 'Home',
  components: {
    HomeHero,
  }
}
</script>
