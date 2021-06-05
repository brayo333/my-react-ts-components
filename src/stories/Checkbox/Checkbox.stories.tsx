import { Story, Meta } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <Checkbox {...args} />
);

export const Circle = Template.bind({});
Circle.args = {
  option: "circle",
};

export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  option: "slightlyRounded",
};

export const Box = Template.bind({});
Box.args = {
  option: "box",
};