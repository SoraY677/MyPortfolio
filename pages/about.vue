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
            <div class="flex-box">
                <section class="two-equally">
                <pageItemTitle :title="'趣味'" :subtitle="'hobby'"/>
                <introduceDetail :title="'ooo'" :content="'hoge'"  />
                </section>
                <section class="two-equally">
                <pageItemTitle :title="'特技'" :subtitle="'hobby'"/>
                <introduceDetail :title="'ooo'" :content="'hoge'" />
                </section>
            </div>

            <!-- 所属団体エリア -->
            <section class="introduce">
                <pageItemTitle :title="'所属団体'" :subtitle="' '"/>
                <div class="flex-box">
                    <introduceDetail class="three-equally" :title="'デジタルコンテンツ研究会'" :content="'ほげ'" />
                    <introduceDetail class="three-equally" :title="'横浜分室'" :content="'ほげ'" />
                    <introduceDetail class="three-equally" :title="'学生会'" :content="'ほげ'" />
                </div>
            </section>

            <!-- 研究室 -->
            <section>
                <pageItemTitle :title="'研究'" :subtitle="'Lab'"/>
            </section>

            <!-- アルバイト・その他 -->
            <div class="flex-box">
                <section class="two-equally">
                <pageItemTitle :title="'アルバイト'" :subtitle="'other'"/>
                <introduceDetail :title="'飲食店のキッチン'" :content="'ほげ'"/>
                </section>
                <section class="two-equally">
                <pageItemTitle :title="'その他'" :subtitle="'other'"/>
                <introduceDetail :title="'飲食店のキッチン'" :content="'ほげ'"/> 
                </section>
            </div>

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
import introduceDetail from "~/components/introducedetail"
export default {
    components:{
        pageTitle,
        pageItemTitle,
        introduceCard,
        introduceDetail
    }
}
</script>