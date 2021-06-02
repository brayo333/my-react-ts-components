import { Story, Meta } from "@storybook/react";

import { InputField, InputFieldProps } from "./Input";
import { ReactComponent as SearchIcon } from '../assets/myIcons/search.svg';

export default {
  title: "Input Field",
  component: InputField,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<InputFieldProps> = (args) => (
  <InputField {...args} />
);

export const Rounded = Template.bind({});
Rounded.args = {
  type: "rounded",
  btnLabel: "Search",
  hasIcon: true,
  icon: <SearchIcon />,
};
export const SlightlyRounded = Template.bind({});
SlightlyRounded.args = {
  type: "slightlyRounded",
  btnLabel: "Search",
  hasIcon: true,
  icon: <SearchIcon />,
};
export const Box = Template.bind({});
Box.args = {
  type: "box",
  btnLabel: "Search",
  hasIcon: true,
  icon: <SearchIcon />,
};
export const WithIconButton = Template.bind({});
WithIconButton.args = {
  type: "circle",
  hasIcon: true,
  iconBtn: true,
  icon: <SearchIcon />,
};