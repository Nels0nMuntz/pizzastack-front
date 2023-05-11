import { Meta, StoryFn } from '@storybook/react'
import { Footer } from './footer.components'

export default {
  title: 'Common/Footer',
  component: Footer,
  tags: ['autodocs'],
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => <Footer/>

export const View = Template.bind({});