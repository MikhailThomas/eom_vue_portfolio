<template>
  <Landing/>
  <Aboutme/>
  <Projects/>
  <Contact/>
</template>

<script>
import Landing from '../components/landing.vue'
import Aboutme from '../components/aboutme.vue'
import Projects from '../components/projects.vue'
import Contact from '../components/contact.vue'

export default {
  components: {
    Landing,
    Aboutme,
    Projects,
    Contact
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
    Modal() {
      return this.$store.state.Modal
      },
      Resume() {
    return this.$store.state.Resume
    },
    Contact() {
      return this.$store.state.Contact
    },
  }
}
</script>
<style>
</style>
