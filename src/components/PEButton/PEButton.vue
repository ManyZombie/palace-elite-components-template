<template>
  <button class="p-button" :class="classes" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'PEButton',
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props) {
    const classes = computed(() => {
      const classes: string[] = [];
      // props.color && classes.push(`is-${props.color}`);
      classes.push(props.outlined ? 'p-button--outlined' : 'p-button--solid');
      props.disabled && classes.push('p-button--disabled');
      return classes;
    });

    return { classes };
  },
});
</script>

<style lang="scss">
.p-button {
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
}

.p-button--solid {
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

.p-button--outlined {
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
</style>
