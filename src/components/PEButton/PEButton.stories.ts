import PEButton from './PEButton.vue';
import { Meta, StoryFn } from '@storybook/vue';

export default {
  title: 'Atomic/PEButton',
  component: PEButton,
  argTypes: {
    label: {
      control: 'text',
    },
    color: {
      options: ['primary', 'link', 'info', 'success', undefined],
      control: { type: 'select' },
    },
  },
} as Meta<typeof PEButton>;

const Template: StoryFn<typeof PEButton> = (args, { argTypes }) => ({
  components: { PEButton },
  props: Object.keys(argTypes),
  template: '<PEButton v-bind="$props" />',
});

export const Solid = Template.bind({});
Solid.args = {
  label: 'Button',
  outlined: false,
  disabled: false,
} as typeof Template['args'];

export const Oulined = Template.bind({});
Oulined.args = {
  label: 'Button',
  outlined: true,
  disabled: false,
} as typeof Template['args'];
