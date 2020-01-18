<template>
    <section id="about-page" class="inner">
        <pageTitle :title="'About'"/>
        <div id="page-content-area">

            <!-- 自己紹介セクション -->
            <section>
                <pageItemTitle :title="'自己紹介'" :subtitle="'introduce'"/>

            </section>

            <!-- 趣味・特技エリア -->
            <div>
                <section>
                </section>
                <section>
                </section>
            </div>

            <!-- 所属団体エリア -->
            <div>
            </div>

            <!-- 研究室 -->

            <!-- アルバイト・その他 -->
        </div>
    </section>
</template>

<script>
import pageTitle from "~/components/pageTitle"
import pageItemTitle from "~/components/pageitemtitle"
export default {
    components:{
        pageTitle,
        pageItemTitle
    }
}
</script>