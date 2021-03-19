<template>
  <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                  class="fab fa-js-square">
                </v-icon>
                <span class="title font-weight-light">Javascript</span>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="text-right">
                勉強期間
                1年
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                  class="fab fa-python">
                </v-icon>
                <span class="title font-weight-light">python</span>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="text-right">
                勉強期間
                1年
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                  class="fab fa-html5">
                </v-icon>
                <span class="title font-weight-light">HTML & CSS</span>
                <v-icon
                  large
                  left
                  class="fab fa-css3-alt">
                </v-icon>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="text-right">
                勉強期間
                1年
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-card-title>
                <v-icon
                  large
                  left
                  class="fab fa-vuejs">
                </v-icon>
                <span class="title font-weight-light">Vue.js</span>
              </v-card-title>

              <v-card-text class="headline font-weight-bold">
                "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
              </v-card-text>
              <v-divider></v-divider>
              <v-card-text class="text-right">
                勉強期間
                1年
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-main>
</template>

<style>
  .card {
    color: #ffffff;
  }
</style>

<script>
export default {
  name: 'Profile',
}
</script>
