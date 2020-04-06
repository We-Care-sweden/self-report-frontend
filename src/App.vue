<template>
  <div id="app">
    <div class="banner">
      <base-alert v-if="error !== null" type="success" :dismissible="true" style="width:60vw">
        <h6>
          Join
          <strong>3.6K</strong> who self-reported their COVID status and help fighting against the new Coronavirus in Sweden.
        </h6>
        <h6>
          Thank you for visiting covidmap.se. We are in the test phase and appreciate your comments and suggestions. Please write
          <a
            class="link"
            href="https://docs.google.com/spreadsheets/d/1SDwzJai4Uq0D0nfZbeGlzw_Z2uenvETPaVKssPPgq_M/edit?usp=sharing"
          >HERE</a>
        </h6>
      </base-alert>
    </div>
    <router-view name="header"></router-view>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view />
      </fade-transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>

<style>
.grecaptcha-badge {
  visibility: hidden;
}
.banner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  width: 100%;
  color: white;
  top: 85px;
}
.link {
  color: blue;
  font-weight: bolder;
}
.link:hover {
  color: steelblue;
}
h6 {
  text-align: justify;
}
</style>
