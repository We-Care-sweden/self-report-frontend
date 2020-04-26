<template>
  <div>

    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default">
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row my-3" v-show="currentQuestion==0">
              <div class="col-lg-6">
                <h1 class="display-3 text-white">{{ $t('report.start.header') }}</h1>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                               @click="currentQuestion += 1"
                               type="success"
                  >
                    {{ $t('report.start.button-new-report') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                               @click="provideTokenModal = true"
                               type="info"
                  >
                    {{ $t('report.start.button-update-report') }}
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row my-3" v-show="currentQuestion==1">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 1/8</h1>
                <p>
                  {{ $t('report.question-1.question') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="report.temp = 'low'"
                    :type="report.temp === 'low' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-1.option-1') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.temp = 'mid'"
                    :type="report.temp === 'mid' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-1.option-2') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.temp = 'high'"
                    :type="report.temp === 'high' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-1.option-3') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    v-show="report.temp != null"
                    @click="currentQuestion += 1"
                    type="success"
                  >
                    {{ $t('report.next') }} &rarr;
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row my-3" v-show="currentQuestion==2">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 2/8</h1>
                <p>
                  {{ $t('report.question-2.question') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="report.cough = 'no'"
                    :type="report.cough === 'no' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-2.option-1') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.cough = 'sometimes'"
                    :type="report.cough === 'sometimes' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-2.option-2') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.cough = 'often'"
                    :type="report.cough === 'often' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-2.option-3') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.cough = 'continuous'"
                    :type="report.cough === 'continuous' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-2.option-4') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                  v-show="report.cough != null"
                    @click="currentQuestion += 1"
                    type="success"
                  >
                    {{ $t('report.next') }} &rarr;
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row my-3" v-show="currentQuestion==3">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 3/8</h1>
                <p>
                  {{ $t('report.question-3.question') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="report.breathless = 'no'"
                    :type="report.breathless === 'no' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-3.option-1') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.breathless = 'sometimes'"
                    :type="report.breathless === 'sometimes' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-3.option-2') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.breathless = 'often'"
                    :type="report.breathless === 'often' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-3.option-3') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.breathless = 'continuous'"
                    :type="report.breathless === 'continuous' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-3.option-4') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    v-show="report.breathless != null"
                    @click="currentQuestion += 1"
                    type="success"
                  >
                    {{ $t('report.next') }} &rarr;
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row my-3" v-show="currentQuestion==4">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 4/8</h1>
                <p>
                  {{ $t('report.question-4.question') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="report.energy = 'normal'"
                    :type="report.energy === 'normal' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-4.option-1') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.energy = 'tired'"
                    :type="report.energy === 'tired' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-4.option-2') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.energy = 'in_bed_sometimes'"
                    :type="report.energy === 'in_bed_sometimes' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-4.option-3') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="report.energy = 'in_bed_often'"
                    :type="report.energy === 'in_bed_often' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-4.option-4') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.energy = 'in_bed_always'"
                    :type="report.energy === 'in_bed_always' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-4.option-5') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    v-show="report.energy != null"
                    @click="currentQuestion += 1"
                    type="success"
                  >
                    {{ $t('report.next') }} &rarr;
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row my-3" v-show="currentQuestion==5">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 5/8</h1>
                <p>
                  {{ $t('report.question-5.question') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="report.exposure = 'no'"
                    :type="report.exposure === 'no' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-5.option-1') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.exposure = 'yes'"
                    :type="report.exposure === 'yes' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-5.option-2') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.exposure = 'unsure'"
                    :type="report.exposure === 'unsure' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-5.option-3') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    v-show="report.exposure != null"
                    @click="currentQuestion += 1"
                    type="success"
                  >
                    {{ $t('report.next') }} &rarr;
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row my-3" v-show="currentQuestion==6">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 6/8</h1>
                <p>
                  {{ $t('report.question-6.question') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="resetComorbid"
                    :type="report.has_comorbid === false ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-1') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('respiratory')"
                    :type="report.comorbid.respiratory === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-2') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('neurological')"
                    :type="report.comorbid.neurological === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-3') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('diabetes')"
                    :type="report.comorbid.diabetes === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-4') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('cancer')"
                    :type="report.comorbid.cancer === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-5') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('pulmonary')"
                    :type="report.comorbid.pulmonary === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-6') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('renal')"
                    :type="report.comorbid.renal === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-7') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('cardiovascular')"
                    :type="report.comorbid.cardiovascular === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-8') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="setComorbid('hypertension')"
                    :type="report.comorbid.hypertension === true ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-6.option-9') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    v-show="report.has_comorbid != null"
                    @click="currentQuestion += 1"
                    type="success"
                  >
                    {{ $t('report.next') }} &rarr;
                  </base-button>
                </div>
              </div>
            </div>
            
            <div class="row my-3" v-show="currentQuestion==7">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 7/8</h1>
                <p>
                  {{ $t('report.question-7.question') }}
                </p>
                <p class="help">
                  {{ $t('report.question-7.help') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="report.compromised_immune = 'no'"
                    :type="report.compromised_immune === 'no' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-7.option-1') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.compromised_immune = 'yes'"
                    :type="report.compromised_immune === 'yes' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-7.option-2') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    v-show="report.compromised_immune != null"
                    @click="currentQuestion += 1"
                    type="success"
                  >
                    {{ $t('report.next') }} &rarr;
                  </base-button>
                </div>
              </div>
            </div>

            <div class="row my-3" v-show="currentQuestion==8">
              <div class="col-lg-8">
                <h1 class="display-3 text-white">{{ $t('report.question') }} 8/8</h1>
                <p>
                  {{ $t('report.question-8.question') }}
                </p>

                <div class="btn-wrapper">
                  <base-button class="my-2 my-sm-2"
                    @click="report.age = 'low'"
                    :type="report.age === 'low' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-8.option-1') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="report.age = 'lower_mid'"
                    :type="report.age === 'lower_mid' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-8.option-2') }}
                  </base-button><br>
                  <base-button class="my-2 my-sm-2"
                    @click="report.age = 'upper_mid'"
                    :type="report.age === 'upper_mid' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-8.option-3') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    @click="report.age = 'high'"
                    :type="report.age === 'high' ? 'dark' : 'white'"
                  >
                    {{ $t('report.question-8.option-4') }}
                  </base-button>
                </div>

                <div class="btn-wrapper my-3">
                  <base-button class="my-2 my-sm-2"
                    @click="currentQuestion -= 1"
                    type="white"
                  >
                    &larr; {{ $t('report.back') }}
                  </base-button>
                  <base-button class="my-2 my-sm-2"
                    v-show="report.age != null"
                    @click="currentQuestion += 0"
                    type="success"
                  >
                    {{ $t('report.submit') }}
                  </base-button>
                </div>
              </div>
            </div>



            <modal :show.sync="provideTokenModal">
              <template slot="header">
                <h2 class="modal-title">{{ $t('report.provideTokenModal.header') }}</h2>
              </template>
              <div>
                <p>{{ $t('report.provideTokenModal.text') }}</p>
                <input v-model="token">
              </div>
              <template slot="footer">
                <base-button type="primary"
                              @click="provideTokenModal = false; currentQuestion += 1">{{
                  $t('report.submit') }}
                </base-button>
              </template>
            </modal>

              </div>
            </div>
      </section>
    </div>

  </div>
</template>

<script>
  import {v4 as uuidv4} from 'uuid';

  import Modal from '@/components/Modal.vue';
  import newGithubIssueUrl from 'new-github-issue-url';
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


      const reportData = localStorage.getItem('report-data');
      if (reportData !== null) {
        this.reportData = JSON.parse(reportData);
      }

      if (this.reportData.sessionId === null) {
        this.reportData.sessionId = uuidv4();
        localStorage.setItem('session-id', this.sessionId);
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
        disease: 'Covid-19',
        
        provideTokenModal: false,
        currentQuestion: 0,
        token: null,
        report: {
          postal_code: null,
          temp: null,
          cough: null,
          breathless: null,
          energy: null,
          exposure: null,
          has_comorbid: null,
          comorbid: {
              hypertension: false,
              cardiovascular: false,
              pulmonary: false,
              cancer: false,
              diabetes: false,
              renal: false,
              neurological: false,
              respiratory: false
          },
          compromised_immune: null,
          age: null
        },


        existingSymptoms: [
          {id: 'fever', label: 'report.symptomFever'},
          {id: 'cough', label: 'report.symptomCough'},
          {id: 'vomit', label: 'report.symptomVomit'},
          {id: 'dyspnea', label: 'report.symptomDyspnea'},
          {id: 'weakness', label: 'report.symptomWeakness'},
          {id: 'headache', label: 'report.symptomHeadache'},
          {id: 'cold', label: 'report.symptomCold'},
          {id: 'diarrhoea', label: 'report.symptomDiarrhoea'},
          {id: 'taste_smell', label: 'report.symptomTasteSmell'},
          {id: 'others', label: 'report.symptomOthers'},
        ],
        officialConfirmModal: false,
        healthyOfficialConfirmModal: false,
        sendErrorModal: false,
        sendError: '',
        forceReportAgain: false,

        locationSelector: process.env.VUE_APP_REPORT_LOCATION_SELECTOR,
        validLocation: false,

        reportData: {
          sessionId: null,
          sick: null,
          symptoms: [],
          diagnostic: null,
          postalCode: null,
          lastReport: null,
        },
        sending: false,

        /*
        * 0 = not sick
        * 1 = sick without Covid
        * 2 = sick probably with Covid
        * 3 = sick with Covid confirmed
        * 4 = recovered (Covid guess)
        * 5 = recovered (Covid official)
        */
      }
    },
    computed: {
      daysSinceLastReport: function () {

        if (this.reportData.lastReport === null) {
          return null;
        }

        return Math.round(Math.abs((this.reportData.lastReport - new Date()) / (24 * 60 * 60 * 1000)));
      },
    },
    methods: {

      resetComorbid: function () {
        this.report.comorbid = {
          hypertension: false,
          cardiovascular: false,
          pulmonary: false,
          cancer: false,
          diabetes: false,
          renal: false,
          neurological: false,
          respiratory: false
        }
        this.report.has_comorbid = false
      },

      setComorbid: function (clickedComorbid) {
        let comorbid = this.report.comorbid
        if (clickedComorbid == 'respiratory') {
          comorbid = this.report.comorbid.respiratory
        } else if (clickedComorbid == 'neurological') {
          comorbid = this.report.comorbid.neurological
        } else if (clickedComorbid == 'diabetes') {
          comorbid = this.report.comorbid.diabetes
        } else if (clickedComorbid == 'cancer') {
          comorbid = this.report.comorbid.cancer
        } else if (clickedComorbid == 'pulmonary') {
          comorbid = this.report.comorbid.pulmonary
        } else if (clickedComorbid == 'renal') {
          comorbid = this.report.comorbid.renal
        } else if (clickedComorbid == 'cardiovascular') {
          comorbid = this.report.comorbid.cardiovascular
        } else if (clickedComorbid == 'hypertension') {
          comorbid = this.report.comorbid.hypertension
        }

        if (comorbid == true) {
          comorbid = false
          this.$set(this.report.comorbid, clickedComorbid, true)
        } else if (comorbid == false){
          comorbid = true
          this.$set(this.report.comorbid, clickedComorbid, true)
          this.report.has_comorbid = true
        }
      },

      send: async function (event) {

        this.sending = true;

        this.reportData.symptoms = this.reportData.symptoms.filter(s => s !== '');

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
          const token = await this.$recaptcha('report');

          const headers = new Headers();
          headers.append("Content-Type", "application/json");

          const response = await fetch(process.env.VUE_APP_API_ENDPOINT_REPORT, {
            method: 'POST',
            headers,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
              token: token,
              locator: this.reportData.postalCode,
              sessionId: this.reportData.sessionId,
              symptoms: symptoms,
              diagnostic: this.reportData.diagnostic,
              timestamp: this.reportData.lastReport,
              appVersion: process.env.VERSION,
            }),
          });

          if (!response.ok) {
            throw new Error('could not report');
          }

          localStorage.setItem('report-data', JSON.stringify(this.reportData));
          this.forceReportAgain = false;

          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

        } catch (error) {
          this.sendError = error;
          this.sendErrorModal = true;
        } finally {
          this.sending = false;
        }
      },
      hasSymptom: function (symptom) {
        return this.reportData.symptoms.includes(symptom);
      },
      setSymptom: function (symptom, enabled) {
        if (enabled) {
          if (!this.reportData.symptoms.includes(symptom)) {
            this.reportData.symptoms.push(symptom);
          }
        } else {
          if (this.reportData.symptoms.includes(symptom)) {
            this.reportData.symptoms = this.reportData.symptoms.filter(s => s !== symptom);
          }
        }
      },
      resetData: function () {
        this.reportData = {
          sessionId: null,
          sick: null,
          symptoms: [],
          diagnostic: null,
          postalCode: '',
          lastReport: null,
        }
      },
      githubIssue: async function () {
        const url = newGithubIssueUrl({
          user: process.env.VUE_APP_GITHUB_REPO_OWNER,
          repo: process.env.VUE_APP_GITHUB_REPO_NAME,
          title: 'Error when sending from the front-end',
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
