import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { ReactComponent as SearchIcon } from '../assets/myIcons/search.svg';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} />
);

export const Rounded = Template.bind({});
Rounded.args = {
  option: "rounded",
  label: "Rounded",
};

export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  option: "slightlyRounded",
  label: "Slightly Rounded",
};

export const Box = Template.bind({});
Box.args = {
  option: "box",
  label: "Box",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  option: "rounded",
  hasIcon: true,
  icon: <SearchIcon />,
  label: "Search",
};

export const IconButton = Template.bind({});
IconButton.args = {
  option: "circle",
  hasIcon: true,
  iconBtn: true,
  icon: <SearchIcon />,
};