<template>
    <div  id="home" class="home">
      <div id="landing" class="mx-auto d-flex justify-content-center align-items-center vh-100">
        <span>MIKHAIL THOMAS</span>
      </div>
    </div>
  </template>
  <script>

  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
  
  #landing{
    height: auto;
    min-height: 100vh;
   background-image: url("../assets/background.webp");
   background-color: #cccccc;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   background-attachment: fixed;
  }
  
  body{
    font-family: 'Montserrat', sans-serif;
  }
  
  span {
    transition: all 0.5s;
    -webkit-text-stroke: 4px rgb(255, 0, 0);
    font-variation-settings: "wght" 900, "ital" 1;
    font-size: 15rem;
    text-align: center;
    color: transparent;
    font-family: "Meta", sans-serif;
    text-shadow: 10px 10px 0px #07bccc,
      15px 15px 0px #e601c0,
      20px 20px 0px #e9019a,
      25px 25px 0px #f40468,
      45px 45px 10px #482896;
    cursor: pointer;
  }
  
  span:hover {
    font-variation-settings: "wght" 100, "ital" 0;
    text-shadow: none;
  }
  
  @media all and (max-width: 1136px ) {
    span {
    font-size: 13rem;
  }
  }
  @media all and (max-width: 1048px ) {
    span {
    font-size: 11rem;
  }
  }
  @media all and (max-width: 910px ) {
    span {
    font-size: 9rem;
  }
  }
  @media all and (max-width: 862px ) {
    span {
      -webkit-text-stroke: 3px rgb(255, 0, 0);
    font-size: 7rem;
     text-shadow: 5px 5px 0px #07bccc,
      6px 6px 0px #e601c0,
      8.5px 8.5px 0px #e9019a,
      11px 11px 0px #f40468,
      21px 21px 8.5px #482896;
  }
  }
  @media all and (max-width: 608px ) {
    span {
      -webkit-text-stroke: 2px rgb(255, 0, 0);
    font-size: 5rem;
     text-shadow: 3px 3px 0px #07bccc,
      4px 4px 0px #e601c0,
      6.5px 6.5px 0px #e9019a,
      9px 9px 0px #f40468,
      19px 19px 6.4px #482896;
  }
  }
  @media all and (max-width: 480px ) {
    span {
      -webkit-text-stroke: 2px rgb(255, 0, 0);
    font-size: 4rem;
    text-shadow: 3px 3px 0px #07bccc,
      4px 4px 0px #e601c0,
      6.5px 6.5px 0px #e9019a,
      9px 9px 0px #f40468,
      19px 19px 6.4px #482896;
  }
  }
  @media all and (max-width: 405px ) {
    span {
      -webkit-text-stroke: 1.5px rgb(255, 0, 0);
    font-size: 3rem;
    text-shadow: 2px 2px 0px #07bccc,
      4px 4px 0px #e601c0,
      6.5px 6.5px 0px #e9019a,
      19px 19px 6.4px #482896;
  }
  }
  </style>