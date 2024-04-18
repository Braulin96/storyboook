import React from "react";
import Input from "./Input";

export default {
    //title is mandatory and should be unique:
    title: 'Input',
    component: Input, //our component imported
}

export const Primary = () => <Input variant='primary'/>
export const Secondary = () => <Input variant='secondary'/>
export const Success = () => <Input variant='success'/>
export const Danger = () => <Input variant='danger'/>