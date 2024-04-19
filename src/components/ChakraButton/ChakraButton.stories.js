import React from "react";
import { Button } from '@chakra-ui/react'
//import { action, actions } from "@storybook/addon-actions"


export default {
    title: 'Chakra/Button',
    comment: Button,
    argTypes: {
        onClick: {action: 'clicked'}
    },
    tags: ['autodocs'], // to show the doc in our story
}

const Template = args => <Button {...args}/>

export const Success = Template.bind({})
Success.args ={
    variantColor: 'green',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args ={
    variantColor: 'red',
    children: 'Danger'
}


