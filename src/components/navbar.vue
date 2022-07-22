<template>
    <nav id="navbar" class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <img id="logo" src="../assets/logo.png" alt="">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <img id="nav-button" class="" src="../assets/navbar-button.jpg" alt="">
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><h2>HOME</h2></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"><h2>ABOUT</h2></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects"><h2>PROJECTS</h2></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume"><h2>RESUME</h2></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact"><h2>CONTACT</h2></a>
        </li>
      </ul>
    </div>
    </div>
</nav>
</template>
<script>
export default {
   
};
</script>

<style scoped>
h1, h2, h3, h4, h5, h6{
  font-family: 'Bebas Neue', cursive;
  color: black;
  text-decoration: underline;
  text-decoration-color: rgb(43, 101, 168);
}
a :hover{
  background-color: rgb(43, 101, 168);
  color: white;
  transition: 1.1s;
  border-radius: 8px;
}
#navbar{
   background-color: gold;
   border-bottom: solid whitesmoke;
}
#logo{
    width: 100px;
    height: 100px;
}
#nav-button{
    height: 80px;
    width: 80px;
   animation: shake .5s linear infinite;
}
@keyframes shake {
  0%{
    transform: rotateZ(10deg);
  }
  50%{
    transform: rotateZ(-10deg);
    transform: scale(1.2);
  }
  
}

button{
    border: hidden;
}
</style>