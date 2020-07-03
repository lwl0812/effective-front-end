<template>
  <div v-highlightjs>
    <div :class="[lang]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighlightCode',
  props: {
    lang: {
      type: String,
      default: 'javascript',
    },
  },
};
</script>

<style></style>
