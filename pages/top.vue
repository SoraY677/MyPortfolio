<template>
  <div class="top flex-center">
    <div class="top-message">
      <div class="square-frame">
        <div class="content big-circle flex-center" ref="topCircle">
          <p>
            <span>Yamaguchi</span>
            <span>Sora</span>
          </p>
        </div>
        <div class="content">
          <ul class="intro-circle">
            <li ref="messageItem1">
              <div class="square-frame">
                <div class="content small-circle flex-center">
                  test1
                </div>
              </div>
            </li>
            <li ref="messageItem2">
              <div class="square-frame">
                <div class="content small-circle flex-center">
                  test2
                </div>
              </div>
            </li>
            <li ref="messageItem3">
              <div class="square-frame">
                <div class="content small-circle flex-center">
                  test3
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

<script>
export default {
  methods:{
    spredCircle :function(itemi){
      this.$refs["messageItem" + itemi].style.transform =
           "translate(100px, 100px)";
    }
  },
  mounted: function() {
    let temp = []
    for (let itemi = 1; itemi <= 3; itemi++) {
      temp.push(this.$refs["messageItem" + itemi].animate(
        [
          { transform: "translate(0,0)" },
          { transform: "translate(100px,100px)" }
        ],
        1000
      )
      );
      console.log(this.$refs["messageItem" + itemi])
      temp[itemi-1].addEventListener("finish", this.spredCircle(itemi));
    }
  }
};
</script>
