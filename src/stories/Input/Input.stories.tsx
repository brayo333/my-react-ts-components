import { Story, Meta } from "@storybook/react";

import { Input, InputProps } from "./Input";
import { ReactComponent as UserIcon } from '../assets/myIcons/user.svg';

export default {
  title: "Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Input {...args} />
);

export const Rounded = Template.bind({});
Rounded.args = {
  type: "text",
  option: "rounded",
  backgroundColor: "#f5f5f6",
};
export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  type: "text",
  option: "slightlyRounded",
  backgroundColor: "#f5f5f6",
};
export const Box = Template.bind({});
Box.args = {
  type: "text",
  option: "box",
  backgroundColor: "#f5f5f6",
};
export const Line = Template.bind({});
Line.args = {
  type: "text",
  option: "line",
  backgroundColor: "transparent",
};
export const SlightlyRoundedBorder = Template.bind({});
SlightlyRoundedBorder.args = {
  type: "text",
  option: "slightlyRounded",
  border: "1px solid #000000",
  backgroundColor: "transparent",
  placeholder: "Jeeeeeeffffff"
};