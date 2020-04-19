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
            <h1 class="display-3 text-white">{{ $t('team.title') }}</h1>

            <p>{{ $t(`team.description`) }}</p>
            <h3 class="text-white">{{ $t(`team.design`) }}</h3>
            <p>
              <a href="https://www.linkedin.com/in/aniajohansson/">Ania Johansson</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/lotta-gergils-aston/">Lotta Gergils Aston</a>
            </p>
            <h3 class="text-white">{{ $t(`team.development`) }}</h3>
            <p>
              <a href="https://www.linkedin.com/in/mehr30na/">Alireza Mehrsina</a>
            </p>
            <p>
              <a href="https://ashwin.info.tm/">Ashwin Vishnu Mohanan</a>
            </p>
            <p>Marcus Thorström</p>
            <h3 class="text-white">{{ $t(`team.business`) }}</h3>
            <p>
              <a href="http://www.linkedin.com/in/vanriesen">Alexander van Riesen</a>
            </p>
            <h3 class="text-white">{{ $t(`team.datascience`) }}</h3>
            <p>
              <a href="https://www.linkedin.com/in/sina-molavipour/">Sina Molavipour</a>
              <span>,&nbsp;Ph.D. Student of KTH Royal Institute of Technology</span>
            </p>
            <p>
              <a href="https://www.kth.se/profile/hshokri">Hossein S. Ghadikolaei</a>
              <span>,&nbsp;Research Scientist, KTH Royal Institute of Technology and EPFL, Lausanne</span>
            </p>
            <h3 class="text-white">{{ $t(`team.advisory`) }}</h3>
            <p>
              <a href="https://staff.ki.se/people/hasabo">Hassan Abolhassani</a>
              <span>,&nbsp;MD, Researcher in Clinical Immunology, Karolinska Institutet</span>
            </p>
            <p>
              <a href="https://www.miun.se/en/personnel/helenhanstock/">Helen Hanstock</a>
              <span>,&nbsp;Senior Lecturer, Department of Health Sciences, Mid Sweden University</span>
            </p>
            <h3 class="text-white">{{ $t(`team.communication`) }}</h3>
            <p>
              <a href="https://www.linkedin.com/mwlite/in/rickard-omfors-3788aa13">Rickard Omfors</a>
            </p>
           

            <!-- <h3 class="text-white">{{ $t(`faq.goalQuestion`, {disease: 'Covid-19'}) }}</h3>
            <p>{{ $t(`faq.goalResponse`, {disease: 'Covid-19'}) }}</p>

            <h3 class="text-white">{{ $t(`faq.othersQuestion`, {disease: 'Covid-19'}) }}</h3>
            <p>{{ $t(`faq.othersResponse`, {disease: 'Covid-19'}) }}</p>-->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "team",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
a {
  color: white !important;
  text-decoration: underline;
}
</style>
