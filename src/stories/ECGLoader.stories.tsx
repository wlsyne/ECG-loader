import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ECGLoaderProps, ECGLoader } from '../lib/Loader/index';

export default {
  title: 'Example/ECGLoader',
  component: ECGLoader,
} as Meta;

const Template: Story<ECGLoaderProps> = (args) => <ECGLoader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const CssMode = Template.bind({});
CssMode.args = {};

export const SVGMode = Template.bind({});
SVGMode.args = {
  renderMode: 'svg',
};
