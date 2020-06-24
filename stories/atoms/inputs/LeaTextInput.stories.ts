import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
// @ts-ignore
import LeaTextInput from "@/components/atoms/input/LeaTextInput.vue";

storiesOf("Atoms/Inputs/TextInput", module)
  .add("default", () => ({
    components: { LeaTextInput },
    props: {
      label: {
        default: text("label", "Inputfield")
      }
    },
    template: '<lea-text-input :label="label"/>'
  }))
  .add("filled", () => ({
    components: { LeaTextInput },
    props: {
      label: {
        default: text("label", "Inputfield")
      },
      value: {
        default: text("value", "Example text input")
      }
    },
    template: '<lea-text-input :label="label" :value="value"/>'
  }));
