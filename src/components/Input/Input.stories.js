import React from "react";
import Input from "./Input";

export default {
    //title is mandatory and should be unique:
    title: 'Form/Input',
    component: Input, //our component imported
}

export const PrimaryInput = () => <Input variant='primary' placeholder="Type your name"/>
export const SecondaryInput = () => <Input variant='secondary'/>
export const SuccessInput = () => <Input variant='success'/>
export const DangerInput = () => <Input variant='danger'/>

//Primary.storyName = 'Small' to change the name displayed in storybook without change the import name