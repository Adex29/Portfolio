import React from 'react';

function Header() {
    const navItems = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/aboutme", label: "About" },
        { href: "/contactme", label: "Contact" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 flex justify-between">    
            <div className="navbar-start">
                <div className="dropdown dropdown-hover md:hidden"> 
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems.map((item) => (
                            <li key={item.href}><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>


                <a href="/" className="btn btn-ghost normal-case text-xl hidden sm:flex">Jay-ar Baniqued</a>
                <a href="/" className="btn btn-ghost normal-case text-lg sm:hidden flex">JB</a>

            </div>

            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item) => (
                        <li key={item.href}><a href={item.href}>{item.label}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;