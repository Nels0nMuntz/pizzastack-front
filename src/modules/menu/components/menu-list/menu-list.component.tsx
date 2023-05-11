import { MenuItem } from '../menu-item/menu-item.component';
import img from '@app/assets/barbecue.jpeg';
import { Pizza } from "../../types/pizza";


interface MenuListProps {
  items: Pizza[];
}

export const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {items.map(({ image, ...rest }) => (
        <MenuItem {...rest} imagePath={img} key={rest.id}/>
      ))}
    </div>
  )
};
