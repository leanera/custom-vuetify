import { addDecorator, storiesOf } from "@storybook/vue";
// @ts-ignore
import GafiText from "@/components/atoms/texts/LeaText.vue";

storiesOf("Atoms/Texts/RegularText", module).add("default", () => ({
  components: { GafiText },
  template: "<gafi-text>Example text</gafi-text>"
}));
