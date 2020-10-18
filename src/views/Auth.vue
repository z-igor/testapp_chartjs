<template>
  <div class="page-container">
    <Title cover="LeadHit" />
    <md-content class="content-container">
      <form class="md-layout submit-form" @submit.prevent="onSubmitForm">
        <md-card
          class="submit-form__card md-layout-item md-size-50 md-small-size-100"
        >
          <md-card-content>
            <md-field :class="{ 'md-invalid': form.errorEquil }">
              <label>Введите id сайта</label>
              <md-input name="site-id" v-model.trim="form.siteId" />
              <span class="md-error" v-show="form.errorEquil"
                >id сайта должен содержать 24 символа</span
              >
            </md-field>
          </md-card-content>
          <md-card-actions>
            <md-button
              type="submit"
              class="md-primary"
              :disabled="!form.siteId.length"
              >Войти</md-button
            >
          </md-card-actions>
        </md-card>
      </form>
    </md-content>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import { getAuthData } from "@/api";

export default {
  name: "auth",
  data: () => ({
    form: {
      siteId: "",
      errorEquil: null,
      invalid: null
    }
  }),
  computed: {},
  watch: {
    "form.siteId": function(val) {
      this.form.errorEquil = false;
    }
  },
  methods: {
    isEquilsTo(length = 24) {
      return this.form.siteId.length === length;
    },
    async onSubmitForm() {
      let data = null;

      /* удалить как наладится соединение
      this.$router.push("/analitics");
      */

      this.form.errorEquil = !this.isEquilsTo();

      if (!this.form.errorEquil) {
        data = await getAuthData(this.form.siteId);
        if (data.ok) {
          this.$router.push("/analitics");
        }
      }
    }
  },
  components: {
    Title
  }
};
</script>
