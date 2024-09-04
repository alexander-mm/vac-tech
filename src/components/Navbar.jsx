import { useState } from "react"
import logo from '../../src/assets/logo-vartech.svg'
import close from '../../src/assets/close.svg'
import menu from '../../src/assets/menu.svg'

const Navbar = ({ activeSection })  => {

    const [toggle, setToggle] = useState(false)

    const navLinks = [
        {
          id: "home",
          label: "HOME",
        },
        {
          id: "pumps",
          label: "VACUUM PUMPS",
        },
        {
          id: "aboutus",
          label: "ABOUT US",
        },
        {
          id: "contact",
          label: "CONTACT",
        },
      ];
      
    return (
        <nav className="w-full py-2 flex flex-row items-center fixed bg-black items center border-b border-y-gray-500 z-50">
            <div className="ml-8">
                <img src={logo} className="w-12" alt="logo"/>
            </div>
            <ul className="w-full list-none hidden sm:flex justify-end flex-row font-toxic">
                {navLinks.map(({id, label}) => (
                    <li key={id} className="cursor-pointer text-white text-sm mx-6">
                        <a href={`#${id}`} className={`${activeSection === id ? "text-blue-500 font-bold" : "text-white"}`}>
                            {label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="z-50 sm:hidden flex flex-1 justify-end items-center text-black font-toxic text-sm">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain mr-4"
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-4 bg-black text-white absolute top-[65px] right-0 min-w-[140px] border-l border-b border-gray-500`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map(({id, label}) => (
                            <li key={id} className={`py-2`}>
                                <a href={`#${id}`} onClick={(e) => { setToggle((prev) => !prev)}} className={`${activeSection === id ? "text-blue-500 font-bold" : "text-white"}`}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar