import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Hello, HelloProps } from '../lib/Hello/Hello';

export default {
  title: 'Example/Hello',
  component: Hello,
} as Meta;

const Template: Story<HelloProps> = (args) => <Hello {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Pink = Template.bind({});
Pink.args = {
  color: 'pink',
};
