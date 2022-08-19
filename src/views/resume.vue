<template>
    <div id='container'>
  <h1>Education</h1>
     <hr>
     <div id="education">
  <div class='card' v-for="education in Education" :key="education">
    <div class='front'>
      <span class='name'><h2>{{ education.name }}</h2></span>
      <hr>
      <span class='job'>{{ education.role }}</span>
    </div>
    <div class='back'>
      <span>{{ education.dev }}</span>
      <p>{{ education.desc }}</p>
    </div>
  </div>
  </div>
  <h1>Work Experience</h1>
  <div id="work">
    <!-- Johannes -->
    <div class='card' v-for="experience in Experience"
    
    :key="experience">
    <div class='front'>
      <span class='name'><h2>{{ experience.name }}</h2></span>
      <hr>
      <span class='job'>{{ experience.role }}</span>
    </div>
    <div class='back'>
      <span>{{ experience.dev }}</span>
      <p>{{ experience.desc }}</p>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  computed: {
    Education() {
      return this.$store.state.Education
      },
    Experience() {
      return this.$store.state.Experience
      }
  }
}

</script>
<style scoped>
h1, h2, h3, h4, h5, h6 {
  font-family: 'Bebas Neue', cursive;
  color: black;
  text-decoration-color: rgb(43, 101, 168) !important;
}

h1{
  padding-top: 3rem;
  text-decoration: underline;
}

h2{
  text-decoration: underline;
}

p{
  color: black;
}

#container {
    width: auto;
    height: auto;
    text-align: center;
    background-color: gold;
    padding-bottom: 3rem;
}

#container > hr {
    border: none;
    width: 80%;
}
.card {
    margin: 10px;
    display: inline-block;
    position: relative;
    width: 220px;
    height: 280px;
    opacity: 0.85;
    border: hidden;
    background-color: gold;
    
}
.front,
.back {
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    -webkit-transition: -webkit-transform 300ms;
    transition: -webkit-transform 300ms;
    transition: transform 300ms;
    transition: transform 300ms, -webkit-transform 300ms;
    -webkit-transition-timing-function: linear;
            transition-timing-function: linear;
    border: solid 4px red;
    box-shadow: 2px 3px 3px 3px rgba(0, 0, 0, 0.308);
}
.front {
    transform: rotateY(0deg);
    background: linear-gradient(to bottom, white, gold, red);
    text-align: center;
    padding: 30px;
}
.back {
    background: linear-gradient(to bottom, red, gold, white);
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
    padding: 40px 15px;
    color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.card:hover .front {
    -webkit-transform: rotateY(-180deg);
            transform: rotateY(-180deg);
}
.card:hover .back {
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
}
/* styling */
.front .contact {
    height: 120px;
    width: 120px;
    border: 5px solid gold;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 10px;
}
.front .name {
    display: inline-block;
    font-size: 18px;
    color: #fff;
}
.front .job {
    color: #fff;
}
.front hr {
    border: none;
    color: #B2DBBF;
    border: 1px solid;
}
.back .icon {
    fill: currentColor;
    color: inherit;
    height: 33px;
    width: 33px;
    margin-top: 15px;
    color: white;
}
.back .icon:hover {
    cursor: pointer;
    color: #648767;
}
</style>