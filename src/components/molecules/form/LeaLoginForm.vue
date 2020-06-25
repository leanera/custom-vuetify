<template>
  <v-form class="lea-login-form">
    <lea-text-input
      type="email"
      label="Email Adresse"
      :model="email"
      validation="'required|email'"
      :validation-scope="validationScope"
    >
    </lea-text-input>
    <lea-button
      :loading="loading"
      text="Sign in"
      :block="true"
      class="mt-10"
    ></lea-button>
  </v-form>
</template>

<script lang="ts">
import LeaButton from "@/components/atoms/input/LeaButton.vue";
import LeaTextInput from "@/components/atoms/input/LeaTextInput.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    LeaTextInput,
    LeaButton
  }
})
export default class LeaLoginForm extends Vue {
  private validationScope = "login-form";
  private email = "";
  private loading = false;
}
</script>

<style lang="scss">
@import "@/sass/lea.fonts";

.lea-login-form {
  max-width: 377px;
}
</style>
