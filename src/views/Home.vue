<template>
  <v-app class="home">
    <navigation-bar :menu="false" />
    <v-card min-width="320" max-width="640" class="mx-auto mt-6 pa-4">
      <header class="bold mb-2">Olá Mundo!</header>
      <article v-html="summary" />
    </v-card>
  </v-app>
</template>

<script lang="ts">
  import { summary } from '@/data/texts'
  import NavigationBar from '@/components/NavigationBar.vue'
  import Vue from 'vue'

  export default Vue.extend({
    components: { NavigationBar },
    data: function() {
      return {
        summary: summary,
      }
    },
  })
</script>
