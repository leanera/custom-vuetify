import { storiesOf } from "@storybook/vue";

// @ts-ignore
import LeaLoginForm from "@/components/molecules/form/LeaLoginForm.vue";

storiesOf("Molecules/Forms/LoginForm", module).add("default", () => ({
  components: { LeaLoginForm },
  template: "<lea-login-form/>"
}));
