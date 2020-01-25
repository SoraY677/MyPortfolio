<template>
    <section class="three-equally">
        <img :src="'/img/about/hobby'+index+'.png'">
        <span>{{name}}</span>
    </section>
</template>

<style scoped>
    img{
        width:100%;
    }
</style>

<script>
export default {
    props:['index','name']
}
</script>