<template>
  <div>
    <h2 class="page-item-title">{{title}}</h2>
    <span class="page-item-subtitle">{{subtitle}}</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page-item-title{
  width:fit-content;
  padding: 0 0 0 0.2em;
  border-bottom:1px solid #2e2e2e;
}

.page-item-title + span{
  padding: 0 0 0 2%;
}

</style>

<script>
export default {
    props:[
        'title',
        'subtitle'
    ]
}
</script>