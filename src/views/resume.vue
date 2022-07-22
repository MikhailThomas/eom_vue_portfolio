<template>
    <div id='container'>
  <h1>Education</h1>
     <hr>
     <div id="education">
  <div class='card'>
    <div class='front'>
      <span class='name'><h2>Plumstead High School</h2></span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Subjects:</span>
      <p>English, Afrikaans, Maths Literacy, History
      Geography, Business Studies, Life Orientation</p>
    </div>
  </div>
  <!-- healing -->
  <div class='card'>
    <div class='front'>
      <span class='name'><h2>Healing Hands Academy</h2></span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skill:</span>
      <p>Holistic Massage and nutrition</p>
    </div>
  </div>
  <!-- LCA -->
  <div class='card'>
    <div class='front'>
      <span class='name'><h2>Life Choices Academy</h2></span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>HTML, CSS, Javascript.</p>
    </div>
  </div>
  <!-- Sunlands -->
  <div class='card'>
    <div class='front'>
      <span class='name'><h2>Sunlands Primary</h2></span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Subjects:</span>
      <p>English, Afrikaans, Maths, Natural Science, Geography, Sports Skills, Art</p>
    </div>
  </div>
  <!-- Estrategie -->
  <div class='card'>
    <div class='front'>
      <span class='name'><h2>Estrategia BJJSA</h2></span>
      <hr>
      <span class='job'> - Student - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>Brazilian Jiu Jitsu, Self Defence, Jiu Jitsu Education</p>
    </div>
  </div>
  <!-- upholstery -->
  <div class='card'>
    <div class='front'>
      <span class='name'><h2>Johannes Curtaining</h2></span>
      <hr>
      <span class='job'> - Worker - </span>
    </div>
    <div class='back'>
      <span>Skills:</span>
      <p>Upholstery, Courier</p>
    </div>
  </div>
  <!-- work -->
  </div>
  <h1>Work Experience</h1>
  <div id="work">
    <!-- Johannes -->
    <div class='card'>
    <div class='front'>
      <span class='name'><h2>Web Development</h2></span>
      <hr>
      <span class='job'> - Aspiring Web Developer - </span>
    </div>
    <div class='back'>
      <span>Job</span>
      <p>Web development using HTML, CSS, Javascript.</p>
    </div>
  </div>
    <!-- Massage -->
    <div class='card'>
    <div class='front'>
      <span class='name'><h2>Massage Therapy</h2></span>
      <hr>
      <span class='job'> - Free Lancer - </span>
    </div>
    <div class='back'>
      <span>Job:</span>
      <p>Healing people mentaly, physically and spiritualy through means of touch.</p>
    </div>
  </div>
    <!-- coach -->
    <div class='card'>
    <div class='front'>
      <span class='name'><h2>Junior's Coach</h2></span>
      <hr>
      <span class='job'> - Junior's Coach - </span>
    </div>
    <div class='back'>
      <span>Job:</span>
      <p>Teaching kids various techniques as well as life lessons and dicipline</p>
    </div>
  </div>
    <!-- LCA -->
    <div class='card'>
    <div class='front'>
      <span class='name'><h2>Upholstery/ courier</h2></span>
      <hr>
      <span class='job'> - Junior Upholstery - </span>
    </div>
    <div class='back'>
      <span>Job:</span>
      <p>Building furniture, delivering to customers and assisting where needed</p>
    </div>
  </div>
    <!-- Cliffe Dekker Hofmeyr -->
    <div class='card'>
    <div class='front'>
      <span class='name'><h2>Cliffe Dekker Hofmeyr</h2></span>
      <hr>
      <span class='job'> - Job Shadow - </span>
    </div>
    <div class='back'>
      <span>Job:</span>
      <p>Shadowing lawyers</p>
    </div>
  </div>
    <!-- Job Shadow -->
    <div class='card'>
    <div class='front'>
      <span class='name'><h2>Eve Travel Agency</h2></span>
      <hr>
      <span class='job'> - Job Shadow - </span>
    </div>
    <div class='back'>
      <span>Job:</span>
      <p>Shadowing travel agents</p>
    </div>
  </div>
  </div>
  </div>
</template>
<script>

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