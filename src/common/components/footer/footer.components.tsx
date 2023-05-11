import { FooterLink } from "../footer-link/footer-link.component";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-12 pb-8">
      <div className="px-12">
        <h3 className="mb-4 uppercase font-bold text-sm text-zinc-500">Contacts</h3>
        <ul>
          <li>
            <FooterLink href="tel:+380441234567">0441234567</FooterLink>
          </li>
          <li>
            <FooterLink href="mailto:info@pizzastack.app">info@pizzastack.app</FooterLink>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-zinc-500" />
      <div className="px-12">
        <span className="text-xl font-semibold text-white">🍕 PizzaStack</span>
      </div>
    </footer>
  )
};