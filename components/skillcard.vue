<template>
  <div class="skill-card">
      <img :src="'/img/skill/' + name + '.svg'" />
    <div class="skill-detail">
      {{ name }}
    </div>
  </div>
</template>

<style scoped>

.skill-card{
  display: flex;
  width:100%;
  margin-bottom:20%;
  flex-wrap: wrap;
  justify-content: space-around;
}

img{
  width:50%;
}

.skill-detail{
  text-align:center;
  width:100%;
}
</style>

<script>
export default {
  props: ['category', 'name'],
};
</script>
