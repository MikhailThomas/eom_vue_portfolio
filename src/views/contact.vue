<template>
        <div id="form">
            <form id="contact" method="post" action="https://formspree.io/f/mknydjoq">
              <input type="hidden" data-form-email="true">
              <div class="form-group">
                <input type="text" class="form-control" name="name" required="" placeholder="Name*" data-form-field="Name">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" required="" placeholder="Email*" data-form-field="Email">
              </div>
              <div class="form-group">
                <input type="tel" class="form-control" name="phone" placeholder="Phone" data-form-field="Phone">
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                <button type="submit" class="btn btn-lg btn-danger">CONTACT US</button>
                </div>   
            </form>
            <div id="contact" class="row w-100 mx-auto py-5 my-3 text-center">
              <div class="col-sm-6" v-for="cont in Contact" :key="cont">
                <a target="_blank" :href="cont.link"><i :class="cont.icon">{{ cont.name }}</i></a>
              </div>
          </div>
        </div>
</template>
<script>
export default {
  computed: {
    Contact() {
      return this.$store.state.Contact
    }
  }
}
</script>
<style scoped>
#form{
    background: gold;
    height: 100vh;
    font-family: 'Bebas Neue', cursive;
}
#contact{
    border: 6px solid red;
}
i{
    color: black;
}
button{
    background-color: red;
    color: black;
}
button:hover{
    background-color: blue;
    color: white;
}
</style>
