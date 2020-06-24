<template>
  <v-btn
    rounded
    depressed
    :block="block"
    color="#76FF03"
    class="lea-font-caption text-uppercase"
    height="54"
    type="submit"
    @click="click"
    :loading="syncedLoading"
  >
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Emit, Prop, PropSync, Vue } from "vue-property-decorator";
@Component
export default class LeaButton extends Vue {
  @Prop({ type: String }) readonly text!: string;
  @Prop({ type: Boolean }) readonly block!: boolean;
  @PropSync("loading", { type: Boolean, default: false })
  syncedLoading!: boolean;

  @Emit()
  private click(e: any) {
    return e;
  }
}
</script>

<style lang="scss">
@import "@/sass/lea.fonts";

.lea-font-caption span {
  font-family: "MuseoModerno-Bold", cursive;
  font-size: 14px !important;
}
</style>
