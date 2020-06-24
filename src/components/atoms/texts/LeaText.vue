<template>
  <p>
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LeaText extends Vue {}
</script>
