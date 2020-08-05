<template>
  <div class="bar-height">
    <v-app-bar clipped-left fixed elevate-on-scroll color="black">
      <v-app-bar-nav-icon v-if="menu" color="white" />
      <h1 class="position-absolute white--text bold mx-auto text-center" v-text="title" />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      menu: { type: Boolean, default: true },
      title: { type: String, default: 'Hugo Mitsumori' },
    },
  })
</script>

<style lang="scss" scoped>
  .bar-height { height: 56px; min-height: 56px; max-height: 56px; }
  h1 {
    left: 0;
    right: 0;
    width: 200px;
    font-size: 18px;
  }
</style>
