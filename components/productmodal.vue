<template>
    <div class="product-modal">
        <section class="modal-window">
            <div class="thumbnail">
            <img :src="'/img/product/' + name + '.png'">
            </div>
            <h3>{{name}}</h3>
            <p>{{description}}</p>
            <a>{{link}}</a>
            <button v-on:click="requestCloseModal">消す</button>
        </section>
    </div>
</template>

<style scoped>

    .product-modal{
        position:absolute;
        display: flex;
        top:0;
        left:0;
        width:100%;
        height:100%;
        justify-content: center;
        align-items: center;
        z-index: 99;
        background-color:rgba(0, 0, 0, 0.3)
    }

    .modal-window{
        animation: test 0.3s linear 0s 1 alternate;
        z-index:100;
        background-color:#FFFFFF;
        width:74%;
        border-radius:20px;
        padding:3%
    }

    img{
        height:100%;
        width:100%;
    }

    .thumbnail{
        max-height:80vh;
        overflow: hidden;
    }

    @keyframes test{
        0%{
            opacity: 0;
            width:40%;
            overflow: hidden;
        }
        100%{
            opacity:1;
            width:74%;
        }
    }


</style>

<script>
export default {
    props:['name','skill','description','link'],
    methods:{
        requestCloseModal: function(){
            this.$emit('closeModalRequest')
        }
    }
}
</script>