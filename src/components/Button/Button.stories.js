import React from "react";
import Button from "./Button";

export default {
    //title is mandatory and should be unique:
    title: 'Button',
    component: Button, //our component imported
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>