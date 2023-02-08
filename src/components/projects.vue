<template>
    <div class="page">
    <div id="projects">
        <div class="Heading">
  <h1>PROJECTS</h1>
</div>
  <article class="comic">
      <div class="panel" v-for="modal in Modal" :key="modal">
        <img id="modal-img-1" data-bs-toggle="modal" :data-bs-target="modal.target" :src="modal.link" alt="">
        <p class="text top-left">{{ modal.name }}</p>
        <p class="text bottom-right">{{ modal.extra }}</p>
    </div>
</article>
</div>
  <div id="resume">
    <div class="Heading">
  <h1>EXPERIENCE</h1>
</div>
  <article class="resume-comic">
  <div class="resume-panel" v-for="resume in Resume" :key="resume">
    <a href="#">
    <span class="caption">
                  <h3>{{ resume.title }}</h3>
              <p class="desc">{{ resume.para }}</p>
              </span>
    <img id="resume-img" :src="resume.link" alt="">
  </a>
    <p class="text top-left">{{ resume.name }}</p>
    <p class="text bottom-right">{{ resume.extra }}</p>
  </div>
  </article>
</div>
  <div v-for="modal in Modal" :key="modal">
  <div :id="modal.target" class="modal fade-in" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
  </div>
  </template>
  <script>
  export default {
    computed: {
      Modal() {
        return this.$store.state.Modal
        },
        Resume() {
      return this.$store.state.Resume
      },
    }
  }
  
  </script>
  <style scoped>
      @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700;800&display=swap');

* {
  --color-black: #000;
  --color-gray: #f0f0f0;
  --color-white: #fff;
  --color-yellow: #ffea64;
  --color-dark-yellow: #fddd50;
  --header-text-shadow: -1px -1px 0 black, 0 -1px 0 black, 1px -1px 0 black, -1px  0 0 black, 1px  0 0 black, -1px  1px 0 black, 0  1px 0 black, 1px  1px 0 black, -2px -2px 0 black, -1px -2px 0 black, 0 -2px 0 black, 1px -2px 0 black, 2px -2px 0 black, 2px -1px 0 black, 2px  0 0 black, 2px  1px 0 black, 2px  2px 0 black, 1px  2px 0 black, 0  2px 0 black, -1px  2px 0 var(--color-black), -2px  2px 0 var(--color-black), -2px  1px 0 var(--color-black), -2px  0 0 var(--color-black), -2px -1px 0 var(--color-black), -3px -3px 0 var(--color-black), -2px -3px 0 var(--color-black), 0 -3px 0 var(--color-black), 2px -3px 0 var(--color-black), 3px -3px 0 var(--color-black), 3px -2px 0 var(--color-black), 3px  0 0 var(--color-black), 3px  2px 0 var(--color-black), 3px  3px 0 var(--color-black), 2px  3px 0 var(--color-black), 0  3px 0 var(--color-black), -2px  3px 0 var(--color-black), -3px  3px 0 var(--color-black), -3px  2px 0 var(--color-black), -3px  0 0 var(--color-black), -3px -2px 0 var(--color-black), -3px -3px 0 var(--color-black), -1px -3px 0 var(--color-black), 0 -3px 0 var(--color-black), 1px -3px 0 var(--color-black), 3px -3px 0 var(--color-black), 3px -1px 0 var(--color-black), 3px  0 0 var(--color-black), 3px  1px 0 var(--color-black), 3px  3px 0 var(--color-black), 1px  3px 0 var(--color-black), 0  3px 0 var(--color-black), -1px  3px 0 var(--color-black), -3px  3px 0 var(--color-black), -3px  1px 0 var(--color-black), -3px  0 0 var(--color-black), -3px -1px 0 var(--color-black), -3px 4px 0 var(--color-black), 0px 4px 0 var(--color-black), 3px 4px 0 var(--color-black), -3px 5px 0 var(--color-black), 0px 5px 0 var(--color-black), 3px 5px 0 var(--color-black), -3px 6px 0 var(--color-black), 0px 6px 0 var(--color-black), 3px 6px 0 var(--color-black), -3px 7px 0 var(--color-black), 0px 7px 0 var(--color-black), 3px 7px 0 var(--color-black), -3px 8px 0 var(--color-black), 0px 8px 0 var(--color-black), 3px 8px 0 var(--color-black), -3px 9px 0 var(--color-black), 0px 9px 0 var(--color-black), 3px 9px 0 var(--color-black), -3px 10px 0 var(--color-black), 0px 10px 0 var(--color-black), 3px 10px 0 var(--color-black), -3px 11px 0 var(--color-black), 0px 11px 0 var(--color-black), 3px 11px 0 var(--color-black), -3px 12px 0 var(--color-black), 0px 12px 0 var(--color-black), 3px 12px 0 var(--color-black), -3px 13px 0 var(--color-black), 0px 13px 0 var(--color-black), 3px 13px 0 var(--color-black), -3px 14px 0 var(--color-black), 0px 14px 0 var(--color-black), 3px 14px 0 var(--color-black), -3px 15px 0 var(--color-black), 0px 15px 0 var(--color-black), 3px 15px 0 var(--color-black), -3px 16px 0 var(--color-black), 0px 16px 0 var(--color-black), 3px 16px 0 var(--color-black), -3px 17px 0 var(--color-black), 0px 17px 0 var(--color-black), 3px 17px 0 var(--color-black), -3px 18px 0 var(--color-black), 0px 18px 0 var(--color-black), 3px 18px 0 var(--color-black);
  --link-text-shadow: -1px -1px 0 var(--color-black), 0 -1px 0 var(--color-black), 1px -1px 0 var(--color-black), -1px  0 0 var(--color-black), 1px  0 0 var(--color-black), -1px  1px 0 var(--color-black), 0  1px 0 var(--color-black), 1px  1px 0 var(--color-black), -2px -2px 0 var(--color-black), -1px -2px 0 var(--color-black), 0 -2px 0 var(--color-black), 1px -2px 0 var(--color-black), 2px -2px 0 var(--color-black), 2px -1px 0 var(--color-black), 2px  0 0 var(--color-black), 2px  1px 0 var(--color-black), 2px  2px 0 var(--color-black), 1px  2px 0 var(--color-black), 0  2px 0 var(--color-black), -1px  2px 0 var(--color-black), -2px  2px 0 var(--color-black), -2px  1px 0 var(--color-black), -2px  0 0 var(--color-black), -2px -1px 0 var(--color-black);
}
#heading {
  font-family: 'Rubik', sans-serif;
  font-size: 1.125;
  font-weight: 400;
  background-color: #ffea64;
  background-image: radial-gradient(var(--color-dark-yellow) 20%, transparent 0), radial-gradient(var(--color-dark-yellow) 20%, transparent 0);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
h1{
    padding-top: 2rem;
  margin-bottom: 0.65em;
  font-weight: 800;
  line-height: 1.1;
  font-size: 7.5rem;
  font-size: clamp(4.25rem, 10vw, 7.5rem);
  color: black;
  color: white;
  font-style: italic;
  letter-spacing: -0.005em;
  text-shadow: var(--header-text-shadow);
}

  h2, h3, h4, h5, h6{
    font-family: 'Rubik', sans-serif;
    font-weight: 800;
    color:  #f7d413;
  }
  
  .page{
    background-color: #f7d413;
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

  #projects{
    background-color: white;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.431)),url(https://static.vecteezy.com/system/resources/previews/007/905/151/original/pop-art-background-template-free-vector.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .comic {
    display:flex;
    flex-wrap:wrap;
    font-family:'Comic Sans', cursive;
    padding:1vmin;
  }
  
  .panel {
    background-color:#fff;
    border:solid 5px black;
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
  /* ============ */
  #resume-img{
  transition: 0.5s;
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
  
  .resume-comic {
  display:flex;
  flex-wrap:wrap;
  font-family:'Comic Sans', cursive;
  padding:1vmin;
  background-color: #f7d413;
  align-content: flex-start;
  }
  
  .resume-panel {
  background-color:#fff;
  border:solid 5px black;
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
  
  .resume-panel:nth-child(1) {
  flex-basis: 400px;
  }
  .resume-panel:nth-child(2) {
  flex-basis: 200px;
  }
  .resume-panel:nth-child(3) {
  flex-basis: 400px;
  }
  .resume-panel:nth-child(4) {
  flex-basis: 200px;
  }
  .resume-panel:nth-child(5) {
  flex-basis: 200px;
  }
  .resume-panel:nth-child(6) {
  flex-basis: 200px;
  }
  .resume-panel:nth-child(7) {
  flex-basis: 400px;
  }
  .resume-panel:nth-child(8) {
  flex-basis: 200px;
  }
  .resume-panel:nth-child(9) {
  flex-basis: 200px;
  }
  .resume-panel:nth-child(10) {
    flex-basis: 400px;
  }
  .resume-panel:nth-child(11) {
    flex-basis: 400px;
  }
  
  /* background colours */
  
  .resume-panel:nth-child(4n+1) {
  background-image:radial-gradient(circle, yellow, orange);
  }
  
  .resume-panel:nth-child(4n+2) {
  background-image:radial-gradient(circle, lightblue, deepskyblue);
  }
  
  .resume-panel:nth-child(4n+3) {
  background-image:radial-gradient(circle, palegreen, yellowgreen);
  }
  
  .resume-panel:nth-child(4n+4) {
  background-image:radial-gradient(circle, lightcoral, tomato);
  }
  
  .caption {
      background-color: rgba(0, 0, 0, 0.7);
      display: block;
    overflow: hidden;
    padding: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 300px;
      transition-property: top;
    transition-duration: 0.2s;  
    width: 100%;  
    z-index: 10;
  }
  
  a:hover .caption {
      top: 0;
    transition: all 2s;
  }
  
  a .caption h2 {
    color: orange;
    font-size: 32px;
      margin-bottom: 20px;
  }
  
  a .caption p {
    color: white;
    display: none;
    line-height: 150%;
    transition: all 0.2s;  
    width: 100%;
  }
  
  a:hover .caption p {
    display: block;
    margin-bottom: 20px;
  }
  
  </style>