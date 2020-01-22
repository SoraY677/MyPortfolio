<template>
  <section>
    <pageTitle :title="'Contact'" />
    <form>
      <section>
      <h2>あなたの名前</h2>
      <textarea name=""></textarea>
      </section>
      <section>
      <h2>あなたの連絡先</h2>
      <textarea></textarea>
      </section>
      <section>
      <h2>連絡内容</h2>
      <textarea></textarea>
      <button>送信する</button>
      </section>
    </form>
  </section>
</template>

<script>
import pageTitle from "~/components/pagetitle";
export default {
  components: {
    pageTitle
  }
};
</script>
