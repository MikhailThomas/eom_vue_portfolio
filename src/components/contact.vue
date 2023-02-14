<template>
    <div id="form">
      <div class="container">
      <h1 id="header">= Get in touch =</h1>
    </div>
    <div class="form-box">
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
                  <button type="submit" class="btn btn-lg">CONTACT US</button>
                  </div>   
              </form>
            </div>
              <div id="links">
                <div v-for="cont in Contact" :key="cont">
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

#header{
    color: rgb(255, 255, 255);
    font-size: 7rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
}
.form-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #form{
    background-color: #f7d413;
      font-family: 'Bebas Neue', cursive;
      padding-bottom: 3rem;
  }
  #contact{
      border: 8px dashed black;
      padding: 3rem;
      width: 60%;
      background: linear-gradient(rgba(0, 0, 0, 0.433), rgba(0, 0, 0, 0.404)),url(https://i.postimg.cc/Vkc2XVLn/pexels-erik-mclean-7524996.jpg);
  }
  input, textarea{
    color: white;
    background-color: black;
  }
  #links{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
  i{
    color: black;
      border: 6px solid white;
      box-sizing: border-box;
      background-color: white;
      padding: 20px;
  }
  i:hover{
    color: white;
      border: 6px solid white;
      box-sizing: border-box;
      box-shadow: rgb(29, 29, 29) -4px 7px 1px 5px;
      background-color: black;
  }
  button{
      background-color: black;
      color: white;
  }
  button:hover{
      background-color: white;
      color: black;
  }
  @media only screen and (max-width:500px) {
  
      #header {
          font-size: clamp(2.25rem, 10vw, 7.5rem);
          font-size: 3rem;
      }
      #contact{
        border: 8px dashed black;
        padding: 1rem;
        width: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.433), rgba(0, 0, 0, 0.404)),url(https://i.postimg.cc/Vkc2XVLn/pexels-erik-mclean-7524996.jpg);
    }
  }
  </style>