<template>
  <Projects/>
  </template>
<script>
import Projects from '../components/projects.vue'
export default {
  computed: {
    Modal() {
      return this.$store.state.Modal
      },
      Resume() {
    return this.$store.state.Resume
    },
  },
  components:{
    Projects
  }
}

</script>
<style scoped>
</style>
