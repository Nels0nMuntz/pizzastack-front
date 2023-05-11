import { Meta, StoryFn } from '@storybook/react'
import { Header } from './header.component'

export default {
  title: 'Common/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header/>

export const View = Template.bind({});