import { storiesOf } from "@storybook/vue";
// @ts-ignore
import LeaHeadline from "@/components/atoms/texts/LeaHeadline.vue";

storiesOf("Atoms/Texts/Headline", module)
  .add("headline-1 normal", () => ({
    components: { LeaHeadline },
    template:
      '<lea-headline :level="1" class="gf-font-h1">Example headline H1</lea-headline>'
  }))
  .add("headline-1 bold", () => ({
    components: { LeaHeadline },
    template:
      '<lea-headline :level="1" class="gf-font-h1--bold">Example headline H1</lea-headline>'
  }))
  .add("headline-1 capital", () => ({
    components: { LeaHeadline },
    template:
      '<lea-headline :level="1" class="gf-font-h1--upper">Example headline H1</lea-headline>'
  }))
  .add("headline-2 regular", () => ({
    components: { LeaHeadline },
    template:
      '<lea-headline :level="2" class="gf-font-h2">Example headline H1</lea-headline>'
  }))
  .add("headline-2 bold", () => ({
    components: { LeaHeadline },
    template:
      '<lea-headline :level="2" class="gf-font-h2--bold">Example headline H1</lea-headline>'
  }))
  .add("headline-2 capital", () => ({
    components: { LeaHeadline },
    template:
      '<lea-headline :level="2" class="gf-font-h2--upper">Example headline H1</lea-headline>'
  }));
