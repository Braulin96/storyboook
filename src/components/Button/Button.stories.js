import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  //title is mandatory and should be unique:
  title: "Form/Button",
  component: Button, //our component imported
  //to pass all the component with the same args children:
  args: {
    children: "Button",
  },
  //to pass decorators to all our stories:
  decorators: [(story) => <Center>{story()}</Center>],
};

//in this components we are using decorators (components that wrap a stories)
export const Primary = () => (
  //   <Center>
  //     <Button variant="primary">Primary</Button>
  //   </Center>
  <Button variant="primary">Primary</Button>
);
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

//creating a template:

const Template = (args) => <Button {...args} />;

// uma função que renderiza o componente <Button> com os props que forem passados para ela.
export const PrimaryA = Template.bind({});

//Estamos definindo os argumentos (props) específicos para o componente PrimaryA
PrimaryA.args = {
  variant: "primary",
  //   children: "Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  //   children: "Secondary Args",
};

export const LongPrimaryA = Template.bind({});
//you can extend the props from others stories, in this case from PrimaryA stories
LongPrimaryA.args = {
  ...PrimaryA.args,
  // children: 'Long Primary'
};
