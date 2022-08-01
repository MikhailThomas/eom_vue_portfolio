<template>
<!-- laptop section -->
  <div id="about" class="about container-fluid">
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
    <div id="info" class="row">
      <!-- technical skills -->
      <div id="technical" class="col-6" >
        <h2>TECHNICAL SKILLS</h2>
        <div class="skill-bars" v-for="tech in Technical">
            <p class="d-flex justify-content-between text-center
                    text-sm-center">
              {{ tech.name }} <span>{{ tech.percent }}</span>
            </p>
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 80%" aria-valuenow="80"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          
      </div>
      <!-- /technical skills/ -->
      <!-- soft skills -->
      <div id="soft" class="col-6">
        <h2>SOFT SKILLS</h2>
        <div class="skill-bars">
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                TEAM WORK <span>90%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="skill-bars">
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                HARD WORK<span>90%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="skill-bars">
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                TRUSTING <span>100%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%" aria-valuenow="100"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="skill-bars">
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                DETERMINATION <span>90%</span>
              </p>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div class="skill-bars">
              <p class="d-flex justify-content-between text-center
                    text-sm-center">
                HUMILITY <span>0%</span>
              </p>
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0"
                  aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
      </div>
      <!-- /soft skills/ -->
    </div>
    <!-- testimonials -->
    <h2 class="py-3 pt-5">Testimonials</h2>
        <section id="main">
      <div class="frame" v-for="test in Testimonials" key="test">
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
    Testimonials() {
      return this.$store.state.Testimonials
    },
    Technical() {
      return this.$store.state.Technical
    },
  }
}
</script>
<style scoped>

h1, h2, h4, h5, h6{
  font-family: 'Bebas Neue', cursive;
  color: black;
  text-decoration: underline;
  text-decoration-color: rgb(43, 101, 168)!important;
}

h2{
  
  text-decoration: underline;
}

h3{
  font-family: 'Bebas Neue', cursive;
  color: gold;
}

#about{
  background-color: gold;
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
}

.skill-bars{
  margin: 1rem;
}

.frame {
  border: 10px solid red;
  box-shadow: 3px 3px 4px black;
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
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
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
  width: 90%;
}

.frame a:hover .caption p {
  display: block;
  margin-bottom: 20px;
}

#info{
  padding-top: 3rem;
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

