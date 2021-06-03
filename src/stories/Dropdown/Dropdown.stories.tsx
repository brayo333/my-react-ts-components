import { Story, Meta } from "@storybook/react";

import { Dropdown, DropdownProps } from "./Dropdown";
import { ReactComponent as SearchIcon } from '../assets/myIcons/search.svg';

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args} />
);

export const Rounded = Template.bind({});
Rounded.args = {
  option:"rounded",
};
export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  option:"slightlyRounded",
};
export const Box = Template.bind({});
Box.args = {
  option:"box",
};
export const Line = Template.bind({});
Line.args = {
  option:"line",
};