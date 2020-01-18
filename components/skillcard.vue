<template>
  <div class="skill-card">
      <img :src="'/img/' + category + '/' + name + '.svg'" />
    <div class="skill-detail">
      {{ name }}
    </div>
  </div>
</template>

<style scoped>

.skill-card{
  width:100%;
  display: flex;
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
