<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/logo_alpha.png" alt="logo"> Self-report
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-8 collapse-brand">
          <img src="img/brand/logo_white_app.png" alt="logo"> Self-report
        </div>
        <div class="col-4 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>


      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">

        <li class="nav-item">
          <router-link class="nav-link" to="/">
            {{ $t('report.title') }}
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/visualize">
            {{ $t('visualize.title') }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/faq">
            {{ $t('faq.title') }}
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/about">
            {{ $t('about.title') }}
          </router-link>
        </li>

      </ul>

      <ul class="navbar-nav align-items-lg-center ml-lg-auto">

        <base-dropdown tag="li" class="nav-item" v-if="languages.length > 1">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-bold-down"></i>
            <span class="nav-link-inner--text">Language</span>
          </a>
          <a v-for="language of languages" v-bind:key="language.id" href="" class="dropdown-item"
             @click.prevent="setLocale(language.id)">{{ language.label }}</a>
        </base-dropdown>

        <li v-if="socialLinkWhatsapp" class="nav-item">
          <a class="nav-link nav-link-icon"
             :href="`https://wa.me/?text=${$t('app.footer.whatsappshare')} ${socialLinkWhatsapp}`"
             target="_blank" rel="noopener"
             data-toggle="tooltip" title="Share on WhatsApp">
            <i class="fa fa-whatsapp"></i>
            <span class="nav-link-inner--text d-lg-none">WhatsApp</span>
          </a>
        </li>

        <li v-if="socialLinkInstagram" class="nav-item">
          <a class="nav-link nav-link-icon" :href="socialLinkInstagram" target="_blank"
             rel="noopener"
             data-toggle="tooltip" title="Follow us on Instagram">
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>

        <li v-if="socialLinkFacebook" class="nav-item">
          <a class="nav-link nav-link-icon" :href="socialLinkFacebook"
             target="_blank"
             rel="noopener"
             data-toggle="tooltip" title="Like us on Facebook">
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>

        <li v-if="socialLinkGithub" class="nav-item">
          <a class="nav-link nav-link-icon" :href="socialLinkGithub"
             target="_blank" rel="noopener" data-toggle="tooltip" title="Get the data on Github">
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
      </ul>

    </base-nav>
  </header>
</template>
<script>
  import BaseNav from "@/components/BaseNav";
  import BaseDropdown from "@/components/BaseDropdown";
  import CloseButton from "@/components/CloseButton";

  export default {
    components: {
      BaseNav,
      CloseButton,
      BaseDropdown
    },
    methods: {
      setLocale: function (locale) {
        this.$i18n.locale = locale;
        localStorage.setItem('locale', locale);
      }
    }
  };
</script>
<style>
  .header-global {
    z-index: 1000;
  }

  .collapse-brand img {
    height: 24px !important;
    width: 24px !important;
  }
</style>
