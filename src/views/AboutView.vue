<template>
<!-- laptop section -->
<Aboutme/>

</template>
<script>
import Aboutme from '@/components/aboutme.vue'
export default {

  components:{
    Aboutme

  },
  computed: {
    Me() {
      return this.$store.state.Me
    },
    Icons() {
      return this.$store.state.Icons
    },
    Testimonials() {
      return this.$store.state.Testimonials
    },
    Technical() {
      return this.$store.state.Technical
    },
    Soft() {
      return this.$store.state.Soft
    },
  }
}
</script>
<style scoped>


</style>

