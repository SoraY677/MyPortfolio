<template>
  <div class="self-intro">
    <div class="icon-frame square">
      <div>
        <img :src="imgpath" class="intro-icon" />
      </div>
    </div>
    <div class="description-container">
      <div class="description">
        <h2>
          <p class="title">{{ name }}</p>
          <p class="titlesub">{{ nameSub }}</p>
        </h2>
        <div class="detail">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgpath: String,
    name: String,
    nameSub: String,
    description: String
  }
};
</script>

<style>
.self-intro {
  display: flex;
  width: 100%;
}

/* アイコン画像 */
.self-intro > .icon-frame {
  width: 40%;
  margin: 1%;
  border-radius: 50%;
  overflow: hidden;
}

img.intro-icon {
  width: 100%;
  height: 100%;
}

/*説明文 */
.self-intro > .description-container {
  width: 60%;
  padding: 2% 2% 0 2%;
}

.self-intro > .description-container > .description {
  position: relative;
  z-index: 1;
  height: 90%;
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
  padding: 1rem;
}

.self-intro > .description-container > .description::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 0;
  width: 3vw;
  height: 3vw;
  background-color: #fff;
  transform: translate(-50%, -50%) rotate(45deg);
}

.self-intro > .description-container > .description > h2 {
  height:5rem;
}

.self-intro > .description-container > .description > h2 > .title {
  font-size: 2rem;
}

.self-intro > .description-container > .description > h2 > .titlesub {
  font-size: 1.8rem;
  border-bottom: 1px solid #2e2e2e;
}

.self-intro > .description-container > .description > .detail {
  height:8rem;
  margin-top: 0.9em;
  overflow: auto;
}
</style>
