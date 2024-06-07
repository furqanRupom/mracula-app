import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="py-20 flex items-center justify-center">
            <motion.header className="z-50 top-0 fixed duration-500 py-1 px-12 transition-all mx-auto items-center backdrop-blur-xl w-full">
                <div className="flex items-center justify-between w-full">
                    <h3 className="text-4xl font-bold py-3 bg-gradient-to-t from-zinc-500 to-gray-800 text-transparent bg-clip-text">Mracula</h3>

                    {/* Navbar for larger devices */}
                    <nav className="hidden sm:block ">
                        <ul className="flex space-x-5 items-center text-xl">
                            <li className='text-zinc-400'>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/csv-converter" className="w-full px-6 py-3 text-lg text-zinc-400 bg-zinc-800 rounded-2xl sm:w-auto sm:mb-0">
                                    csv converter
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Navbar for smaller devices */}
                    <div className="block sm:hidden">
                        <button onClick={toggleMenu} className="text-2xl text-zinc-500">
                            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </button>
                    </div>
                </div>

                {/* Dropdown menu for smaller devices */}
                {isMenuOpen && (
                    <nav className="block sm:hidden  text-zinc-400  p-5 rounded-md backdrop-blur-lg">
                        <ul className="flex flex-col space-y-5 items-center text-xl">
                            <li>
                                <Link to="/" onClick={toggleMenu}>Home</Link>
                            </li>
                            <li>
                                <Link to="/csv-converter" className="w-full px-6 py-3 text-lg text-zinc-400 bg-zinc-800 rounded-2xl sm:w-auto sm:mb-0" onClick={toggleMenu}>
                                    csv converter
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </motion.header>
            <div className="w-full h-[0.01rem] bg-zinc-900"></div>
        </div>
    );
};

export default Navbar;
