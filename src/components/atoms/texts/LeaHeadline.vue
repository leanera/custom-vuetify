<template>
  <component :is="tagName">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LeaHeadline extends Vue {
  @Prop({
    type: Number,
    validator: value => {
      // Only accepts headline levels from h1 to h6.
      return value > 0 && value <= 6;
    }
  })
  readonly level!: number;

  /**
   * so we are able to set the tag name dynamically
   */
  get tagName(): string {
    return `h${this.level}`;
  }
}
</script>
<style lang="scss"></style>
