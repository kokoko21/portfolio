<template>
  <v-main class="grey lighten-3">
    <h1>About me</h1>
    <v-container py-6 px-5>
      <v-row  justify="center" align-content="center">
        <v-col>
          <v-avatar
            color="grey darken-1"
            size="220"
          >k</v-avatar>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="display-1 font-weight-bold mb-1">{{name}}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>{{hobby}}</p>
          <p>{{me}}</p>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <div class="my-10">
      <h2 class="mb-5">Time Line</h2>
      <v-row>
        <v-col>
          <v-timeline>
            <v-timeline-item
              v-for="job in jobs"
              :key="job"
              color="indigo"
              large
            >
              <template v-slot:opposite>
                <span>{{job.year}}</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">
                  {{job.affiliation}}
                </v-card-title>
                <v-card-text>
                  {{job.text}}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
      </div>
      <v-row
        aligin="center"
        justify="space-around">
        <v-icon
          left
          class="fab fa-twitter"
          size="120px">
        </v-icon>
        <v-icon
          left
          class="fab fa-facebook"
          size="120px">
        </v-icon>
        <v-icon
          left
          class="fab fa-github"
          size="120px">
        </v-icon>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    data() {
      return {
        name: "KazushiTakagaki",
        hobby: "趣味：フットサル、ゴルフ、スノーボード、読書",
        me: "普段監視業務をしながら、開発エンジニアになるために日々、学習中です。",
        jobs: [
          {
            year: "2013 ~ 2017",
            affiliation: "同志社大学　商業部",
            text: "大学では経営学を中心に学んでいました。"
          },
          {
            year: "2017 ~ 2019",
            affiliation: "営業",
            text: "建築資材のメーカーでルート営業をしていました。"
          },
          {
            year: "2019 ~",
            affiliation: "監視業務",
            text: "監視業務の合間に業務効率化のツール等を作成しています。"
          },
        ]
      }
    }
  }
</script>

<style>
  
</style>