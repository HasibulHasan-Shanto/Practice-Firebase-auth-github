import { NavLink } from "react-router";


const Header = () => {
    return (
        <div className="bg-red-500 p-5">
            <div className="max-w-355 mx-auto">
                <ul className="flex gap-4">
                    <li>
                        <NavLink
                        to='/'
                         className='text-white font-bold'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to='/login'
                         className='text-white font-bold'>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;