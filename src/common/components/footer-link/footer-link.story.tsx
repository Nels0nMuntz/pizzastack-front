import { Meta, StoryFn } from '@storybook/react'
import { FooterLink } from './footer-link.component'

export default {
  title: 'Common/FooterLink',
  component: FooterLink,
  tags: ['autodocs'],
} as Meta<typeof FooterLink>;

const Template: StoryFn<typeof FooterLink> = (props) => <FooterLink {...props}/>;

export const View = Template.bind({});
View.args = {
  href: "tel:+380441234567",
  children: "0441234567",
};