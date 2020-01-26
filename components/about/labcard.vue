<template>
    <section>
        <h3>{{labname}}</h3>
        <div>
        <span>担当教員：{{teacher}}</span>
        <span>主な研究内容：{{labthema}}</span>
        </div>
        <span>私の研究テーマ{{mythema}}</span>
        <p v-for="el in content" :key="el.id">{{el}}</p>
        <alink v-for="(value,key) in link" :key="value.id" :linkname="key" :linkpath="value" />
    </section>
</template>

<style scoped>
    section{
        padding:2em;
        border:1px solid #778899;
        width:80%;
        margin:0 auto;
    }
    span{
        display: block;
    }
</style>

<script>
import alink from "~/components/link"
export default {
    props:['labname','teacher','labthema','mythema','content','link'],
    components:{
        alink
    }    
}
</script>