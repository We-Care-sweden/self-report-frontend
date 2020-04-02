<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col text-white">
            <h1 class="display-3 text-white">{{ $t('about.title') }}</h1>
            <p><span class="headline">{{ $t('about.headWho') }}</span> {{ $t('about.who') }}</p>
            <p><span class="headline">{{ $t('about.headNeedYou') }}</span> {{ $t('about.needYou') }}</p>
            <p><span class="headline">{{ $t('about.headData') }}</span> {{ $t('about.data') }}</p>
            <p><span class="headline">{{ $t('about.headDataUpdate') }}</span> {{ $t('about.dataUpdate') }}</p>
            <p><span class="headline">{{ $t('about.headPublicData') }}</span> {{ $t('about.publicData') }}</p>
            <p><span class="headline">{{ $t('about.headDataCare') }}</span> {{ $t('about.dataCare') }}</p>
            <p><span class="headline">{{ $t('about.headImprovement') }}</span> {{ $t('about.improvement') }}</p>
            <p><span class="headline">{{ $t('about.supportHeader') }}</span> {{ $t('about.support') }} <a
              href="mailto:covidmap.sweden@gmail.com" target="_blank"
            >covidmap.sweden@gmail.com</a>.</p>
            <p>{{ $t('about.source1') }} <a
              href="https://github.com/ch-covid-19" target="_blank"
            >{{$t('about.link')}}</a>{{ $t('about.source2') }} </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'about',
    components: {},
  }

</script>

<style scoped>
  .headline {
    font-size: 1.1em;
    font-weight: bolder;
  }
</style>
