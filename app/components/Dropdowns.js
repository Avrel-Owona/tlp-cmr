import React, {useState} from 'react';
import {ActiveLink} from "./Links";
import {DropdownsItems} from "../utils/navItems";

const Dropdowns = () => {
    const [dropdown, setDropdown] = useState(true)

    return (
        <div className='w-64 absolute top-48 z-40 right-10'>
            <ul className={dropdown ? 'bg-white flex flex-col' : 'hidden'}  onClick={()=>setDropdown(!dropdown)}>
                {DropdownsItems.map((item)=> {
                    return (
                        <ActiveLink activeClassName="font-semibold text-orange-600" href={item.pathname}>
                            <li
                                onClick={()=>setDropdown(false)}
                                key={item.id}ls
                                className='cursor-pointer font-sans py-3 text-sm hover:bg-gray-100 px-5'>
                                {item.title}
                            </li>
                        </ActiveLink>
                    )
                })}
            </ul>
        </div>
    );
};

export default Dropdowns;