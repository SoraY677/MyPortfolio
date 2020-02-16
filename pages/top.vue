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
            <li
              v-for="(circleItem, circleIndex) in topJson.messageCircle"
              ref="messageItem"
              :key="circleIndex"
            >
              <div class="square-frame">
                <div class="content small-circle flex-center">
                  {{ circleItem.name }}
                </div>
              </div>
            </li>
            <li ref="messageItem0">
              <div class="square-frame">
                <div class="content small-circle flex-center">
                   circleItem.name 
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
  asyncData({ store }) {
    return {
      topJson: require(`~/assets/json/top.json`)
    };
  },
  methods: {
    spredCircle: function(itemi, movex, movey) {
      this.$refs.messageItem[itemi].style.transform =
        "translate(" + movex + "px, " + movey + "px)";
    }
  },
  mounted: function() {
    let temp = [];
    const rad = 360 / 3;
    for (let itemi = 0; itemi < 3; itemi++) {
      //移動先の座標
      let movex =
        (this.$refs.topCircle.clientWidth / 2) *
          Math.cos((rad * Math.PI * itemi) / 180) +
        (this.$refs.messageItem[itemi].clientWidth / 2) *
          Math.cos((rad * Math.PI * itemi) / 180);
      let movey =
        (this.$refs.topCircle.clientHeight / 2) *
          Math.sin((rad * Math.PI * itemi) / 180) +
        (this.$refs.messageItem[itemi].clientHeight / 2) *
          Math.sin((rad * Math.PI * itemi) / 180);
      temp.push(
        this.$refs.messageItem[itemi].animate(
          [
            { transform: "translate(0,0)" },
            { transform: "translate(" + movex + "px," + movey + "px)" }
          ],
          2000
        )
      );
      temp[itemi].addEventListener(
        "finish",
        this.spredCircle(itemi, movex, movey)
      );
    }
  }
};
</script>
