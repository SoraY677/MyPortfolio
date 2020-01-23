<template>
    <section id="about-page">
        <pageTitle :title="'About'"/>
        <div id="page-content-area">
            <section>
            <!-- 自己紹介セクション -->
            <pageItemTitle :title="'自己紹介'" :subtitle="'introduce'"/>
            <introduceCard/>
            </section>
            <!-- 趣味・特技エリア -->
            <section>
                 <pageItemTitle :title="'趣味・特技'" :subtitle="'hobby'"/>
            </section>

            <!-- 所属団体エリア -->
            <section>
                <section>
                    <pageItemTitle :title="'所属団体'" :subtitle="' '"/>
                </section>
            </section>

            <!-- 研究室 -->
            <section>
                <pageItemTitle :title="'研究'" :subtitle="'Lab'"/>
            </section>

            <!-- アルバイト・その他 -->
            <section>
                <pageItemTitle :title="'その他'" :subtitle="'other'"/>
            </section>

            <!--経歴 -->
            <section>
                <pageItemTitle :title="'経歴'" :subtitle="'carrer'"/>
            </section>
        </div>
    </section>
</template>

<script>
import pageTitle from "~/components/pagetitle"
import pageItemTitle from "~/components/pageitemtitle"
import introduceCard from "~/components/introducecard"
export default {
    components:{
        pageTitle,
        pageItemTitle,
        introduceCard
    }
}
</script>