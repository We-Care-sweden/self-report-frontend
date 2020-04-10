<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <div class="wrapper">
        <base-alert v-if="error !== null" type="success" :dismissible="true" class="banner">
          <div class="row">
            <h6>
              {{$t('app.alert.sub1')}}
              <strong>{{recordCounts !== 0 ? recordCounts:'' }}</strong>
              {{$t('app.alert.sub2')}}
            </h6>
            <h6>
              {{$t('app.alert.sub3')}}
              <a
                class="link"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfijMdXb7L_-I0yNyyf-y2xGsKBAPRR-k71yk-Obls67GdKdQ/viewform?usp=sf_link"
                target="_blank"
              >HERE</a>
            </h6>
          </div>
        </base-alert>
      </div>
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
  data() {
    return {
      recordCounts: 0
    };
  },
  components: {
    FadeTransition
  },
  mounted() {
    this.getRecordCount().then();
  },
  methods: {
    getRecordCount: function() {
      return fetch(process.env.VUE_APP_API_COUNT_REPORT)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.recordCounts = data.count;
          }
        });
    }
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
.wrapper {
  position: absolute;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15vw;
}
.banner {
  z-index: 1;
  text-align: justify;
}
</style>
