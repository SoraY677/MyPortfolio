<template>
  <main>
    <top class="section-pattern" />
    <about class="section-pattern" />
    <tech class="section-pattern" />
    <product class="section-pattern" />
    <contact class="section-pattern" />
    <footer>
      © 2020 Sora Yamaguchi All Rights Reserved
    </footer>
  </main>
</template>

<script>
import top from "~/pages/top";
import about from "~/pages/about";
import tech from "~/pages/tech";
import product from "~/pages/product";
import contact from "~/pages/contact";

export default {
  components: {
    top,
    about,
    tech,
    product,
    contact
  }
};
</script>

<style>
main {
  padding-top: 50px;
  background-color: #f5f5f5;
}

.section-pattern,
footer {
  position: relative;
  padding: 15vw 10% 10% 10%;
}

.section-pattern:first-child {
  padding-top: 0;
}

.section-pattern:before {
  content: "";
  position: absolute;
  display: block;
  z-index: 1;
  top: 100%;
  left: 50%;
  width: 8vw;
  height: 8vw;
  transform: translate(-50%, -50%) rotate(45deg);
}

.section-pattern:nth-child(2n + 1),
.section-pattern:nth-child(2n + 1):before {
  background-color: #f5f5f5;
}

.section-pattern:nth-child(2n),
.section-pattern:nth-child(2n):before {
  background-color: #a1d8e2;
}

footer {
  padding-bottom: 2em;
  font-size: 1.4rem;
  text-align: center;
}

@media screen and (max-width: 640px) {
  .section-pattern {
    padding-right: 7%;
    padding-left: 7%;
  }

  footer {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 480px) {
  .section-pattern {
    padding-right: 4%;
    padding-left: 4%;
  }
}
</style>
