<template>
    <article class="comic">
  <div class="panel" v-for="modal in Modal" :key="modal">
    <img id="modal-img-1" data-bs-toggle="modal" :data-bs-target="modal.target" :src="modal.link" alt="">
    <p class="text top-left">{{ modal.name }}</p>
    <p class="text bottom-right">{{ modal.extra }}</p>
  </div>
</article>
<div v-for="modal in Modal" :key="modal">
<div :id="modal.target" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
              <div class="modal-content ">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{{ modal.projnumb }}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6">
                        <img class="img-fluid" :src="modal.link" />
                      </div>
                      <div class="col-md-6">
                        <h1>{{ modal.name }}</h1>
                        <p>
                          {{ modal.para }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer mx-auto">
                  <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
                    <a target="_blank" :href="modal.netlify"><i
                        class="bi bi-globe text-light"></i></a>
                  </button>
                  <button type="button" class="btn btn-danger"><a target="_blank"
                      :href="modal.github"><i
                        class="bi bi-github text-light"></i></a></button>
                </div>
              </div>
            </div>
          </div>
</div>
</template>
<script>
export default {
  computed: {
    Modal() {
      return this.$store.state.Modal
      },
  }
}

</script>
<style scoped>

h1, h2, h3, h4, h5, h6{
  font-family: 'Bebas Neue', cursive;
  color: black;
  text-decoration: underline;
  text-decoration-color: rgb(43, 101, 168);
}

img{
  transition: 0.5s;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
img:hover{
    transform:scale(1.2);
}

.comic {
  display:flex;
  flex-wrap:wrap;
  font-family:'Comic Sans', cursive;
  padding:1vmin;
  background-color: gold;
}

.panel {
  background-color:#fff;
  border:solid 5px red;
  box-shadow:0 6px 6px -6px #000;
  flex:1 1;
  height:300px;
  margin:0.6vmin;
  overflow:hidden;
  position:relative;
}

.text {
  background-color:#fff;
  border:solid 2px red;
  margin:0;
  padding:3px 10px;
}

.top-left {
  left:-6px;
  position:absolute;
  top:-2px;
  transform:skew(-15deg);
}

.bottom-right {
  bottom:-2px;
  position:absolute;
  right:-6px;
  transform:skew(-15deg);
}

.speech {
  background-color:#fff;
  border:solid 2px #000;
  border-radius:12px;
  display:inline-block;
  margin:.5em;
  padding:.5em 1em;
  position:relative;
}

.speech:before {
  border:solid 12px transparent;
  border-left:solid 12px #000;
  border-top:solid 12px #000;
  bottom:-24px;
  content:"";
  height:0;
  left:24px;
  position:absolute;
  transform:skew(-15deg);
  width:0;
}

.speech:after {
  border:solid 10px transparent;
  border-left:solid 10px #fff;
  border-top:solid 10px #fff;
  bottom:-19px;
  content:"";
  height:0;
  left:27px;
  position:absolute;
  transform:skew(-15deg);
  width:0;
}

.panel:nth-child(1) {
  flex-basis: 400px;
}
.panel:nth-child(2) {
  flex-basis: 200px;
}
.panel:nth-child(3) {
  flex-basis: 200px;
}
.panel:nth-child(4) {
  flex-basis: 200px;
}
.panel:nth-child(5) {
  flex-basis: 200px;
}
.panel:nth-child(6) {
  flex-basis: 200px;
}
.panel:nth-child(7) {
  flex-basis: 400px;
}
.panel:nth-child(8) {
  flex-basis: 200px;
}
.panel:nth-child(9) {
  flex-basis: 200px;
}

/* background colours */

.panel:nth-child(4n+1) {
  background-image:radial-gradient(circle, yellow, orange);
}

.panel:nth-child(4n+2) {
  background-image:radial-gradient(circle, lightblue, deepskyblue);
}

.panel:nth-child(4n+3) {
  background-image:radial-gradient(circle, palegreen, yellowgreen);
}

.panel:nth-child(4n+4) {
  background-image:radial-gradient(circle, lightcoral, tomato);
}
</style>
