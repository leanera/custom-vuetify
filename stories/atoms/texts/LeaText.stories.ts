import { addDecorator, storiesOf } from "@storybook/vue";
// @ts-ignore
import LeaText from "@/components/atoms/texts/LeaText.vue";

storiesOf("Atoms/Texts/RegularText", module).add("default", () => ({
  components: { LeaText },
  template: "<lea-text>Example text</lea-text>"
}));
