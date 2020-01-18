<template>
    <section class="product-card">
        <div class="product-thumbnail">
            <img :src="'/img/product/'+name+'.png'">
        </div>
        <div class="product-detail">
            {{name}}
        </div>
    </section>
</template>

<style scoped>
section.product-card{
    width:100%;
    height:50vh;
    border-radius: 10px;
    overflow: hidden;
}

section.product-card:hover .product-thumbnail img{
    transform: scale(1.2);
}
.product-thumbnail{
    height:42%;
    width:100%;
    overflow:hidden;
}

img{
    width:100%;
    height:100%;
    transition-duration: .3s;
}

</style>

<script>
export default {
    props:['name','language','experience','level','desription']
}
</script>
