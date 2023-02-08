<template>
    <!-- laptop section -->
      <div id="about" class="about">
        <div class="Heading">
  <h1>ABOUT ME</h1>
</div>
        <!-- images -->
        <section id="main">
          <div class="frame" v-for="me in Me" :key="me">
              <a href="#">
                <span class="caption">
                    <h3>{{ me.name }}</h3>
                <p class="desc">{{ me.desc }}</p>
                </span>
              <img :src="me.img">
            </a>
          </div>
        </section>
        <!-- /Images/ -->
        <!-- Icons -->
        <div id="info">
        <div v-for="icons in Icons" :key="icons">
          <img :src="icons.img">
        </div>
      </div>
          <!-- Icon -->
        <!-- testimonials -->
        <div class="Heading">
  <h1>TESTIMONIALS</h1>
</div>
            <section id="testimonials">
          <div class="testimonials-frame" v-for="test in Testimonials" :key="test">
              <a href="#">
                <span class="caption">
                    <h3>{{ test.name }}</h3>
                <p class="desc">{{ test.desc }}</p>
                </span>
              <img :src="test.img">
            </a>
          </div>
        </section>
        <!-- /testimonials/ -->
      </div>
    </template>
    <script>
    export default {
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
  padding-top: 3rem;
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
    
    h3{
      font-family: 'Bebas Neue', cursive;
      font-weight: 600;
      color: gold;
    }
    
    #about{
      background-color: #f7d413;
      padding-bottom: 3rem;
      padding-top: 3rem;
    }

    #main {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5rem;
        margin: auto 10px auto;
        padding-bottom: 3rem;
    }
    
    #testimonials {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5rem;
        margin: auto 10px auto;
    }
    
    .frame {
      box-shadow: 15px 15px 0px black;
      height: 400px;
         overflow: hidden;
      position: relative;
      width: 300px;
    }
    
    .frame a {
      display: block;
        height: 100%;
      width: 100%;
    }
    
    .frame img {
      display: block;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 0;
    }
    
    .frame a .caption {
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
    
    .frame a:hover .caption {
        top: 0;
      transition: all 2s;
    }
    
    .frame a .caption h2 {
      color: orange;
      font-size: 32px;
        margin-bottom: 20px;
    }
    
    .frame a .caption p {
      color: white;
      display: none;
      line-height: 150%;
      transition: all 0.2s;  
    }
    
    .frame a:hover .caption p {
      display: block;
      margin-bottom: 20px;
    }

    /* testimonials */
    .testimonials-frame {
      border:10px solid black ;
      height: 400px;
         overflow: hidden;
      position: relative;
      width: 300px;
    }
    
    .testimonials-frame a {
      display: block;
        height: 100%;
      width: 100%;
    }
    
    .testimonials-frame img {
      display: block;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 0;
    }
    
    .testimonials-frame a .caption {
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
    
    .testimonials-frame a:hover .caption {
        top: 0;
      transition: all 2s;
    }
    
    .testimonials-frame a .caption h2 {
      color: orange;
      font-size: 32px;
        margin-bottom: 20px;
    }
    
    .testimonials-frame a .caption p {
      color: white;
      display: none;
      line-height: 150%;
      transition: all 0.2s;  
    }
    
    .testimonials-frame a:hover .caption p {
      display: block;
      margin-bottom: 20px;
    }

    #info{
      padding-top: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      justify-content: center;
      flex-wrap: wrap;
      background: linear-gradient(rgba(0, 0, 0, 0.46), rgba(1, 1, 1, 0)), url(https://static.vecteezy.com/system/resources/previews/000/241/296/original/beautiful-colorful-comic-book-background-illustration-vector.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
    
    #info img{
      height: 20rem;
      width: 20rem;
    }
    .progress{
      height: 20px;
      background-color: grey;
      box-shadow: 3px 3px 4px black;
    }
    
    .progress-bar{
      background-color: red;
    }
    
    </style>