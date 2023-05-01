import { Meta, StoryFn } from '@storybook/react'
import { App } from '../App';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/App',
  component: App,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof App>;

const Template: StoryFn<typeof App> = () => <App/>

export const Primary = Template.bind({});