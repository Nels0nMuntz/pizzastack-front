import { Footer, Header } from '@components/index';
import { Menu } from '@modules/index';
import pizzaMenu from '@app/mocks/pizza.json';

export const App = () => {
  return (
    <>
      <div className="mb-12">
        <Header />
      </div>
      <div className="mx-12 mb-24">
        <Menu items={pizzaMenu} />
      </div>
      <Footer/>
    </>
  );
}
