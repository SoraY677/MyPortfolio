<template>
  <section>
    <firstTitle
      title="Contact"
      subtitle="依頼や気になったことなどお待ちしております。"
    />
    <contactForm class="top-middle-space" />
  </section>
</template>

<script>
import firstTitle from "~/components/firstTitle";
import contactForm from "~/components/contactForm";
export default {
  components: {
    firstTitle,
    contactForm
  }
};
</script>

<style>
</style>