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
          <div
            v-if="daysSinceLastReport === null || daysSinceLastReport > 0 || forceReportAgain"
            class="col px-0"
          >
            <div
              class="row mt-3"
              v-show="reportData.lastReport !== null && forceReportAgain === false"
            >
              <div class="col-lg-6">
                <h3 class="text-white">{{ $t('renewReport.comingBack')}}</h3>
                <p
                  class="text-white"
                >{{ $t('renewReport.daysSince', { days: daysSinceLastReport }) }}</p>
                <p class="text-white">{{ $t('renewReport.explainOther')}}</p>
                <p class="text-white">
                  {{ $t('renewReport.click')}}
                  <base-button size="sm" @click="resetData" type="info">{{ $t('renewReport.here')}}</base-button>
                  {{ $t('renewReport.ifNotYou')}}
                </p>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-lg-6">
                <p class="text-white">{{ $t('report.intro') }}</p>

                <p class="text-white">{{ $t(`faq.goalResponse`, {disease: 'Covid-19'}) }}</p>

                <h1 class="display-3 text-white">{{ $t('report.how') }}</h1>

                <div class="btn-wrapper">
                  <base-button
                    class="mb-3 mb-sm-0"
                    @click="reportData.sick = false"
                    :type="reportData.sick === false ? 'success' : 'white'"
                    icon="fa fa-heartbeat"
                  >{{ $t('report.healthy') }}</base-button>
                  <base-button
                    class="mb-3 mb-sm-0"
                    @click="reportData.sick = true"
                    :type="reportData.sick === true ? 'danger' : 'white'"
                    icon="ni ni-atom"
                  >{{ $t('report.sick') }}</base-button>
                </div>
              </div>
            </div>

            <div class="row mt-3" v-show="reportData.sick === false">
              <div class="col-lg-6">
                <h3 class="text-white">{{ $t('report.contract', { disease: disease}) }}</h3>

                <div class="btn-wrapper">
                  <base-button
                    class="mb-2"
                    @click="reportData.diagnostic = 0"
                    :type="reportData.diagnostic === 0 ? 'info' : 'white'"
                  >{{ $t('report.contractNo') }}</base-button>
                  <base-button
                    class="mb-2"
                    @click="reportData.diagnostic = 4"
                    :type="reportData.diagnostic === 4 ? 'success' : 'white'"
                  >{{ $t('report.contractedProbably') }}</base-button>
                  <base-button
                    class="mb-2"
                    @click="healthyOfficialConfirmModal = true"
                    :type="reportData.diagnostic === 5 ? 'success' : 'white'"
                  >{{ $t('report.contractedOfficial') }}</base-button>
                </div>

                <modal :show.sync="healthyOfficialConfirmModal">
                  <template slot="header">
                    <h5 class="modal-title">{{ $t('report.contractedOfficialConfirm') }}</h5>
                  </template>
                  <div>
                    <p>{{ $t('report.contractedOfficialConfirmText', { disease: disease }) }}</p>
                  </div>
                  <template slot="footer">
                    <base-button
                      type="secondary"
                      @click="reportData.diagnostic = 4; healthyOfficialConfirmModal = false;"
                    >
                      {{
                      $t('app.no') }}
                    </base-button>
                    <base-button
                      type="primary"
                      @click="reportData.diagnostic = 5; healthyOfficialConfirmModal = false;"
                    >
                      {{
                      $t('app.yes') }}
                    </base-button>
                  </template>
                </modal>
              </div>
            </div>

            <div class="row mt-3" v-show="reportData.sick === false && reportData.diagnostic === 0">
              <div class="col-lg-6">
                <p class="text-white">
                  {{ $t('report.notSick1') }}
                  <a
                    href="https://www.folkhalsomyndigheten.se/"
                  >{{ $t('report.notSick2') }}</a>
                  {{ $t('report.notSick3') }}
                </p>
              </div>
            </div>

            <div class="row mt-3" v-show="reportData.sick === true">
              <div class="col-lg-6">
                <h3 class="text-white">{{ $t('report.symptoms') }}</h3>

                <base-button
                  v-for="(symptom) in existingSymptoms"
                  :key="symptom.id"
                  class="mt-2"
                  :type="hasSymptom(symptom.id) ? 'info' : 'secondary'"
                  :icon="`fa fa-${hasSymptom(symptom.id) ? 'check-square' : 'square-o'}`"
                  @click="setSymptom(symptom.id, !hasSymptom(symptom.id))"
                >
                  <span>{{ $t(symptom.label) }}</span>
                </base-button>
              </div>
            </div>

            <div class="row mt-3" v-show="reportData.sick === true">
              <div class="col-lg-6">
                <h3 class="text-white">{{ $t('report.diagnostic') }}</h3>

                <p class="text-white">{{ $t('report.contracted', { disease: disease }) }}</p>

                <base-button
                  class="mt-2"
                  :type="reportData.diagnostic === 1 ? 'success' : 'secondary'"
                  @click="reportData.diagnostic = 1"
                >
                  <span>{{ $t('app.no') }}</span>
                </base-button>

                <base-button
                  class="mt-2"
                  :type="reportData.diagnostic === 2 ? 'info' : 'secondary'"
                  @click="reportData.diagnostic = 2"
                >
                  <span>{{ $t('report.contractedProbably') }}</span>
                </base-button>

                <base-button
                  class="mt-2"
                  :type="reportData.diagnostic === 3 ? 'warning' : 'secondary'"
                  @click="officialConfirmModal = true"
                >
                  <span>{{ $t('report.contractedOfficial') }}</span>
                </base-button>

                <modal :show.sync="officialConfirmModal">
                  <template slot="header">
                    <h5 class="modal-title">{{ $t('report.contractedOfficialConfirm') }}</h5>
                  </template>
                  <div>
                    <p>{{ $t('report.contractedOfficialConfirmText', { disease: disease }) }}</p>
                  </div>
                  <template slot="footer">
                    <base-button
                      type="secondary"
                      @click="reportData.diagnostic = 2; officialConfirmModal = false;"
                    >{{ $t('app.no') }}</base-button>
                    <base-button
                      type="primary"
                      @click="reportData.diagnostic = 3; officialConfirmModal = false;"
                    >{{ $t('app.yes') }}</base-button>
                  </template>
                </modal>
              </div>
            </div>

            <div class="row mt-3" v-show="reportData.sick !== null">
              <div class="col-lg-6">
                <h3 class="text-white">{{ $t('report.locationQuestion') }}</h3>

                <location-from-address
                  v-if="locationSelector === 'address'"
                  :location.sync="reportData.postalCode"
                  :valid.sync="validLocation"
                ></location-from-address>

                <location-from-postal-code
                  v-else
                  :location.sync="reportData.postalCode"
                  :valid.sync="validLocation"
                ></location-from-postal-code>
              </div>
            </div>

            <div class="row mt-3" v-show="reportData.sick !== null">
              <div class="col-lg-6">
                <base-button
                  @click="send"
                  :disabled="!validLocation || reportData.diagnostic === null"
                  class="mb-3 mb-sm-0"
                  type="white"
                  icon="fa fa-send"
                >
                  {{ $t('report.send') }}
                  <i v-if="sending" class="fa fa-spinner fa-pulse"></i>
                </base-button>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-lg-6">
                <p class="text-white headline">{{ $t('about.headData') }}</p>
                <p class="text-white" v-if="reportData.sick !== null">{{ $t('about.data') }}</p>
              </div>
            </div>

            <modal
              :show.sync="sendErrorModal"
              gradient="danger"
              modal-classes="modal-danger modal-dialog-centered"
            >
              <h6
                slot="header"
                class="modal-title"
                id="modal-title-notification"
              >{{ $t('report.error') }}</h6>

              <div class="py-3 text-center">
                <i class="ni ni-bell-55 ni-3x"></i>
                <h4 class="heading mt-4">{{ $t('report.errorDetails') }}</h4>
                <p>{{ sendError }}</p>
                <p>
                  Please try again. If it still occurs, please
                  <base-button size="sm" type="info" @click="githubIssue">report a problem</base-button>.
                </p>
              </div>

              <template slot="footer">
                <base-button
                  type="link"
                  text-color="white"
                  class="ml-auto"
                  @click="sendErrorModal = false"
                >{{ $t('report.errorClose') }}</base-button>
              </template>
            </modal>
          </div>

          <div v-else class="text-white">
            <h3 class="text-white">{{ $t('report.sentThanks') }}</h3>
            <p>{{ $t('report.sentComeBack') }}</p>
            <p>{{ $t('report.sentSomeoneElse') }}</p>
            <p>
              {{ $t('report.sentMistake') }}
              <base-button
                size="sm"
                @click="forceReportAgain = true"
                type="info"
              >{{ $t('report.sentMistakeClickHere') }}</base-button>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

import Modal from "@/components/Modal.vue";
import newGithubIssueUrl from "new-github-issue-url";
import LocationFromPostalCode from "./LocationEditors/LocationFromPostalCode";
import LocationFromAddress from "./LocationEditors/LocationFromAddress";

export default {
  name: "report",
  components: {
    LocationFromAddress,
    LocationFromPostalCode,
    Modal
  },
  async mounted() {
    const reportData = localStorage.getItem("report-data");
    if (reportData !== null) {
      this.reportData = JSON.parse(reportData);
    }

    if (this.reportData.sessionId === null) {
      this.reportData.sessionId = uuidv4();
      localStorage.setItem("session-id", this.sessionId);
    }

    if (this.reportData.diagnostic !== null) {
      this.reportData.diagnostic = +this.reportData.diagnostic;
    }

    if (this.reportData.lastReport !== null) {
      this.reportData.lastReport = Date.parse(this.reportData.lastReport);
    }
  },
  data() {
    return {
      disease: "Covid-19",
      existingSymptoms: [
        { id: "fever", label: "report.symptomFever" },
        { id: "cough", label: "report.symptomCough" },
        { id: "vomit", label: "report.symptomVomit" },
        { id: "dyspnea", label: "report.symptomDyspnea" },
        { id: "weakness", label: "report.symptomWeakness" },
        { id: "headache", label: "report.symptomHeadache" },
        { id: "cold", label: "report.symptomCold" },
        { id: "diarrhoea", label: "report.symptomDiarrhoea" },
        { id: "taste_smell", label: "report.symptomTasteSmell" },
        { id: "others", label: "report.symptomOthers" }
      ],
      officialConfirmModal: false,
      healthyOfficialConfirmModal: false,
      sendErrorModal: false,
      sendError: "",
      forceReportAgain: false,

      locationSelector: process.env.VUE_APP_REPORT_LOCATION_SELECTOR,
      validLocation: false,

      reportData: {
        sessionId: null,
        sick: null,
        symptoms: [],
        diagnostic: null,
        postalCode: null,
        lastReport: null
      },
      sending: false

      /*
       * 0 = not sick
       * 1 = sick without Covid
       * 2 = sick probably with Covid
       * 3 = sick with Covid confirmed
       * 4 = recovered (Covid guess)
       * 5 = recovered (Covid official)
       */
    };
  },
  computed: {
    daysSinceLastReport: function() {
      if (this.reportData.lastReport === null) {
        return null;
      }

      return Math.round(
        Math.abs(
          (this.reportData.lastReport - new Date()) / (24 * 60 * 60 * 1000)
        )
      );
    }
  },
  methods: {
    send: async function(event) {
      this.sending = true;

      this.reportData.symptoms = this.reportData.symptoms.filter(s => s !== "");

      let symptoms = [];
      switch (this.reportData.diagnostic) {
        case 1:
        case 2:
        case 3:
          symptoms = this.reportData.symptoms;
      }

      try {
        this.reportData.lastReport = new Date();

        await this.$recaptchaLoaded();

        // Execute reCAPTCHA with action "report".
        // const token = await this.$recaptcha('report');

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const response = await fetch(process.env.VUE_APP_API_ENDPOINT_REPORT, {
          method: "POST",
          headers,
          mode: "cors",
          cache: "default",
          body: JSON.stringify({
            token: "fake",
            locator: this.reportData.postalCode,
            sessionId: this.reportData.sessionId,
            symptoms: symptoms,
            diagnostic: this.reportData.diagnostic,
            timestamp: this.reportData.lastReport,
            appVersion: process.env.VERSION
          })
        });

        if (!response.ok) {
          throw new Error("could not report");
        }

        localStorage.setItem("report-data", JSON.stringify(this.reportData));
        this.forceReportAgain = false;

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      } catch (error) {
        this.sendError = error;
        this.sendErrorModal = true;
      } finally {
        this.sending = false;
      }
    },
    hasSymptom: function(symptom) {
      return this.reportData.symptoms.includes(symptom);
    },
    setSymptom: function(symptom, enabled) {
      if (enabled) {
        if (!this.reportData.symptoms.includes(symptom)) {
          this.reportData.symptoms.push(symptom);
        }
      } else {
        if (this.reportData.symptoms.includes(symptom)) {
          this.reportData.symptoms = this.reportData.symptoms.filter(
            s => s !== symptom
          );
        }
      }
    },
    resetData: function() {
      this.reportData = {
        sessionId: null,
        sick: null,
        symptoms: [],
        diagnostic: null,
        postalCode: "",
        lastReport: null
      };
    },
    githubIssue: async function() {
      const url = newGithubIssueUrl({
        user: process.env.VUE_APP_GITHUB_REPO_OWNER,
        repo: process.env.VUE_APP_GITHUB_REPO_NAME,
        title: "Error when sending from the front-end",
        body: `The error is:\n> ${this.sendError}\n\n---\nAuto-generated from the front-end`
      });

      await open(url);
    }
  }
};
</script>

<style scoped>
.headline {
  font-weight: bold;
}
</style>
