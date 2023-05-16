import React from "react";
import type { Meta, StoryFn } from "@storybook/react";

import Button from "./button";

const buttonMeta: Meta<typeof Button> = {
  title: 'Ch4 Button',
  component: Button
}

export default buttonMeta
type Story = StoryFn<typeof Button>;

export const Playground: Story = (args) => (
  <Button {...args}>Playground</Button>
)

const Template: Story = (args) => (
  <Button {...args}></Button>
)

export const Default = Template.bind({})
Default.args = {
  children: ' Default Button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'Large'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'Small'
}

export const ButtonWithTypes: Story = () => (
  <>
    <Button btnType="primary">Primary</Button>
    <Button style={{ marginLeft: '12px' }} btnType="danger">Danger</Button>
    <Button style={{ marginLeft: '12px' }} btnType="default">Default</Button>
    <Button style={{ marginLeft: '12px' }} btnType="link">Link</Button>
  </>
)

ButtonWithTypes.storyName = 'Different Types Button'
