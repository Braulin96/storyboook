import React from "react";
import { Button } from "@chakra-ui/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
//import { action, actions } from "@storybook/addon-actions"

export default {
  title: "Chakra/Button",
  comment: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"], // to show the doc in our story
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone6",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};
