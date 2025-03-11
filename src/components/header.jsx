import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";

function Header() {
    return (
        <header className="sticky top-0 z-50 shadow-md py-4 px-4 bg-white ">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="src/assets/private-key.png" alt="Logo" className="h-10 w-10" />
                        <span className="text-lg font-semibold text-gray-700 dark:text-grey-900">
                            SecureID
                        </span>
                    </Link>
                </div>

                
            </nav>
        </header>
    );
}

export default Header;
