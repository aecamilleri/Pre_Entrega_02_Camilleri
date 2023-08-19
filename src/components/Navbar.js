import { NavLink } from "react-router-dom"
import CartWidget from './CartWidget';

function Navbar() {
    return (
    <nav class="flex gap-4">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <nav class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <NavLink to="/category-species" className="nav-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Category Species
                    </NavLink>
                    <NavLink to="/item/:id" className="nav-link block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">item-id</NavLink>
                    <CartWidget itemCount={5} />
                </nav>
            </div>
        </div>
    </nav>
    )
}

export default Navbar