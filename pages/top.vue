<template>
  <div class="top flex-center">
    <div class="bg-block" ref="isPhysicsballArea"></div>
    <div class="top-message">
      <div class="square-frame">
        <div class="content big-circle flex-center" ref="topCircle">
          <p>
            <span>Yamaguchi</span>
            <span>Sora</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-block {
  width: 100%;
  height: 100%;
  position: absolute;
}
.top {
  position: relative;
  height: 90vh;
  overflow: hidden;
}

.top-message {
  width: 40%;
}

.big-circle {
  border-radius: 50%;
  padding: 20%;
  background-color: aliceblue;
  z-index: 10;
}

.small-circle {
  border-radius: 50%;
  padding: 12%;
  background-color: aliceblue;
}

.content > p > span {
  display: block;
  width: 100%;
}

.content > ul {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul > li {
  position: absolute;
  width: 35%;
  z-index: 1;
}

@media screen and (max-width: 740px) {
  .top-message {
    top: 50%;
    left: 50%;
    min-width: 240px;
    font-size: 2em;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
