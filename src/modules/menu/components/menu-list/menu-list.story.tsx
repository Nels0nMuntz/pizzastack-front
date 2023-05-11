import { Meta, StoryFn } from '@storybook/react'
import { MenuList } from './menu-list.component';
import pizzaMenu from '@app/mocks/pizza.json';

export default {
  title: 'Menu/MenuList',
  component: MenuList,
  tags: ['autodocs'],
} as Meta<typeof MenuList>;

const Template: StoryFn<typeof MenuList> = (props) => <MenuList {...props} />

export const View = Template.bind({});
View.args = {
  items: pizzaMenu,
};