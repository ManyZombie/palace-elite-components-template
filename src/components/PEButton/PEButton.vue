<template>
  <button class="pe-button" :class="classes" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

@Component
export default class PEButton extends Vue {
  @Prop({ required: true, default: 'Button' })
  label!: string;

  @Prop({ required: true, type: String, default: false })
  disabled!: boolean;

  @Prop({ required: true, type: String, default: false })
  outlined!: boolean;

  // eslint-disable-next-line class-methods-use-this
  @Emit()
  click(e: Event) : Event{
    return e;
  }

  get classes(): string[] {
    const array: string[] = [];
    array.push(
      this.$props.outlined ? 'pe-button--outlined' : 'pe-button--solid'
    );
    if (this.$props.disabled) array.push('pe-button--disabled');
    return array;
  }
}
</script>

<style lang="scss">
.pe-button {
  @apply inline-block
    px-6
    py-2.5
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    transition
    duration-150
    ease-in-out;

  &--solid {
    @apply bg-blue-600
      text-white
      hover:bg-blue-700
      focus:bg-blue-700
      focus:outline-none
      focus:ring-0
      active:bg-blue-800
      disabled:bg-black
      disabled:bg-opacity-10
      disabled:text-black
      disabled:text-opacity-25;
  }

  &--outlined {
    @apply border
      border-current
      text-blue-600
  hover:bg-blue-600
      hover:bg-opacity-5
      focus:outline-none
      focus:ring-0
      disabled:text-black
      disabled:text-opacity-25;
  }
}
</style>
