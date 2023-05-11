interface MenuItemProps {
  imagePath: string;
  title: string;
  ingredients: string;
  weight: number;
  price: number;
}



export const MenuItem: React.FC<MenuItemProps> = ({ imagePath, title, ingredients, weight, price }) => {
  return (
    <div className='w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden'>
      <div className='relative'>
        <img className='w-full h-[15rem] object-cover' src={imagePath} alt="product" />
        <span className='absolute bottom-1.5 right-2.5 block px-2 py-0.5 text-sm text-white bg-gray-900/50 rounded-[2rem]'>{weight} г.</span>
      </div>
      <div className="p-8">
        <h2 className='mb-2 text-xl font-medium'>{title}</h2>
        <p className='mb-8'>{ingredients}</p>
        <div className='text-xl font-medium'>{price} грн</div>
      </div>
    </div>
  )
}