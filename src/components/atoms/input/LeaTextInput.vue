<template>
  <v-text-field
    filled
    :type="type"
    :label="label"
    :model="model"
    :data-vv-as="label"
    :v-validate="validation"
    :data-vv-scope="validationScope"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";

@Component
export default class LeaTextInput extends Vue {
  @Prop({ type: String }) readonly label!: string;
  @Prop({ type: String, default: "text" }) readonly type!: string;
  @Prop({ type: String }) readonly validation!: string;
  @Prop({ type: String }) readonly validationScope!: string;
  @Model("change", { type: String }) readonly model!: string;
}
</script>

<style lang="scss"></style>
