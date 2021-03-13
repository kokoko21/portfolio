<template>
  <v-app-bar
    app
    color="white"
    flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar
        class="mr-10"
        color="grey darken-1"
        size="32"
      >k</v-avatar>
      Portfolio Site
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link"
        :to="link.url"
        text
      >
        {{ link.name }}
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {
          name: 'Top',
          url: '/'
        },
        {
          name: 'Profile',
          url: '/profile'
        },
        {
          name: 'MyLife',
          url: '/mylife'
        },
        {
          name: 'Contact',
          url: '/contact'
        },
      ],
    }),
  }
</script>