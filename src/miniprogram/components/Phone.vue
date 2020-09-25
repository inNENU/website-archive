<template>
  <div v-if="header" class="phone-header" v-text="header" />
  <div class="phone-wrapper">
    <Phone class="phone-icon" />
    <div class="number" v-text="num" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Phone from "../assets/phone.svg";

export default defineComponent({
  components: { Phone },
  props: {
    header: { type: String, default: "" },
    // Telephone Number
    num: { type: [String, Number], required: true },
  },
});
</script>

<style lang="scss">
.phone-header {
  max-width: var(--max-width);
  min-height: 36px;
  margin: 0 var(--horizontal-margin);
  padding: 12px 15px 4px 15px;

  color: var(--text-color);
  text-align: left;
  font-size: 19px;
  font-weight: 500;

  .grey & {
    padding: 21px 15px 5px 15px;
    color: var(--dark-grey);
    font-size: 13px;
    font-weight: 400;
  }
}

.phone-wrapper {
  display: flex;

  max-width: var(--max-width);
  margin: 2px var(--horizontal-margin);
  padding: 0 15px;
  background-color: var(--block-bgcolor);
  border-radius: 8px;

  color: var(--text-color);
  line-height: 2.5;
  align-items: center;
  overflow: hidden;

  .phone-icon {
    width: 24px;
    height: 24px;
    margin-right: 15px;
  }

  .number {
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    flex: 1 1 auto;
  }
}
</style>
