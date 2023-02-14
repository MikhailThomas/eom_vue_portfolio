
<template>
<article class="comic" type="button">
      <div class="panel" v-for="modal in Modal" :key="modal">
        <img id="mimgLink" href="javascript:void(0);" :src="modal.link" alt="" >
        <p class="text top-left">{{ modal.name }}</p>
        <p class="text bottom-right">{{ modal.extra }}</p>
    </div>
</article>

<!-- Modal popup box -->
<div v-for="modal in Modal" :key="modal">
<div :id="modal.target" class="mpopup" >
    <!-- Modal content -->
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">×</span>
            <span>{{ modal.name }}</span>
        </div>
        <div class="modal-body">
            <span>{{ modal.para }}</span>
            <img :src="modal.link">
        </div>
        <div class="modal-footer">
            <button type="button" href="modal.netlify" target="_blank">Netlify</button>
            <button type="button" href="modal.github" target="_blank">github</button>
        </div>
    </div>
</div>
</div>
</template>

  <script>
    
  export default{
    computed: {
      Modal() {
        return this.$store.state.Modal
        },
  },
  mounted(){
  // Select modal
  var mpopup = document.getElementById('target');

// Select trigger link
var mpLink = document.getElementById("mimgLink");

// Select close action element
var close = document.getElementsByClassName("close")[0];

// forloop

// Within the forloop
// Open modal once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
    console.log('clicked')
};

// Close modal once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
}}}
  </script>

  <style scoped>
#mimgLink{
    width: 300px;
}

.mpopup {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.modal-content {
    position: relative;
    background-color: #fff;
    margin: auto;
    padding: 0;
    width: 450px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    border-radius: 0.3rem;
}
.modal-header {
    padding: 2px 12px;
    background-color: #ffffff;
    color: #333;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
}
.modal-header h2{
    font-size: 1.25rem;
    margin-top: 14px;
    margin-bottom: 14px;
}
.modal-body {
    padding: 2px 12px;
}
.modal-footer {
    padding: 1rem;
    background-color: #ffffff;
    color: #333;
    border-top: 1px solid #e9ecef;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    text-align: right;
}

.close {
    color: #888;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover, .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

/* add animation effects */
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}
</style>