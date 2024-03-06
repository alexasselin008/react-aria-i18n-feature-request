import {Button} from '../src/Button';

import type {Meta} from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => <Button {...args}>Press me</Button>;

Example.args = {
  onPress: () => alert('Hello world!')
};


export const Pending = (args: any) => <Button {...args}>Press me</Button>;

Pending.args = {
  ...Example.args,
  isPending: true,
};
