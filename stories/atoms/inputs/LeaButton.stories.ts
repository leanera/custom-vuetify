import { storiesOf } from "@storybook/vue";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// @ts-ignore
import LeaButton from "@/components/atoms/input/LeaButton.vue";

const methods = {
  click: action("click")
};

storiesOf("Atoms/Inputs/Button", module).add("default", () => ({
  components: { LeaButton },
  props: {
    loading: {
      default: boolean("Loading", false)
    },
    text: {
      default: text("Text", "Hallo Welt")
    }
  },
  template: '<lea-button :text="text" :loading="loading" @click="click"/>',
  methods
}));
