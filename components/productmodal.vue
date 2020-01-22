<template>
    <section class="product-modal">
        <img src="#">
        <h3>hogehoge</h3>
        <p>hogehogeの説明~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
        <a>linkだほげ</a>
        <button v-on:click="requestCloseModal">消す</button>
    </section>
</template>

<style scoped>
    .product-modal{
        position:absolute;
        top:0;
        left:0;
    }
</style>

<script>
export default {
    methods:{
        requestCloseModal: function(){
            this.$emit('closeModalRequest')
        }
    }
}
</script>