<template>
    <div class="button">Shake</div>
</template>
<script>

</script>
<style scoped>
.button {
  margin: 100px auto;
  width: 120px;
  height: 45px;
  background: #2c3dcf;
  text-align: center;
  line-height: 45px;
  border-radius: 36px;
  color: #fff;
  cursor: pointer;
}

.button:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
