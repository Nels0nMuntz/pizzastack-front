import { Meta, StoryFn } from '@storybook/react'
import { MenuItem } from './menu-item.component';
import img from '@app/assets/barbecue.jpeg';

const values = {
  imagePath: img,
  title: 'Піца Мангеттен',
  ingredients: '(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
  weight: 555,
  price: 215,
};

export default {
  title: 'Menu/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (props) => <MenuItem {...props}/>

export const View = Template.bind({});
View.args = values;