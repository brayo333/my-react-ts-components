import { Story, Meta } from "@storybook/react";

import { InputWithButton, InputWithButtonProps } from "./InputWithButton";
import { ReactComponent as SearchIcon } from '../assets/myIcons/search.svg';

export default {
  title: "Input With Button",
  component: InputWithButton,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<InputWithButtonProps> = (args) => (
  <InputWithButton {...args} />
);

export const Rounded = Template.bind({});
Rounded.args = {
  option: "rounded",
  backgroundColor: "#f5f5f6",
  btnLabel: "Search",
  hasIcon: true,
  icon: <SearchIcon />,
};
export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  option: "slightlyRounded",
  backgroundColor: "#f5f5f6",
  btnLabel: "Search",
  hasIcon: true,
  icon: <SearchIcon />,
};
export const Box = Template.bind({});
Box.args = {
  option: "box",
  backgroundColor: "#f5f5f6",
  btnLabel: "Search",
  hasIcon: true,
  icon: <SearchIcon />,
};
export const WithIconButton = Template.bind({});
WithIconButton.args = {
  option: "rounded",
  backgroundColor: "#f5f5f6",
  hasIcon: true,
  iconBtn: true,
  icon: <SearchIcon />,
};
export const Line = Template.bind({});
Line.args = {
  option: "line",
  backgroundColor: "transparent",
  btnLabel: "Search",
  hasIcon: true,
  icon: <SearchIcon />,
};