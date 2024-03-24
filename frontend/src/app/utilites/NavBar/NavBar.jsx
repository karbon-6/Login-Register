import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'

function NavBar(){
    const Links = [
        {name: 'One', Link: '/home'},
        {name: 'Two', Link: '/Two'},
        {name: 'Three', Link: '/Three'},
        {name: 'Four', Link: '/Four'},
        {name: 'Five', Link: '/Five'},
    ]

    const [open, setOpen] = useState(false)
    // const navigate = useNavigate()

    function handleItemClick(){
        if(open){
            setOpen(false)
        }
    }

    return (
        <div className="relative py-0">
            <div className="md:flex md:items-center justify-between bg-[#d1fae5] py-5 md:px-10 px-4 z-10">
                <div className="flex items-center w-full">
                    <motion.div
                    className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 md:mr-4"
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:0.5}}
                    />
                </div>

                <motion.div
                onClick={()=> setOpen(!open)}
                className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                whileHover={{scale:1.1}}
                whileTap={{scale: 0.9}}
                transition={{duration: 0.2}}
                >
                    <ion-icon name={open ? 'close': 'menu'}></ion-icon>
                </motion.div>

                <motion.ul
                className={`${open ? 'block': 'hidden'} md:flex md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0 bg-[#d1fae5] md:static right-0 md:w-auto md:pr-0 pr-4 md:space-y-0 space-y-4 transition-all duration-500 ease-in`}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{delay: 0.1, staggerChildren: 0.1}}
                >
                    <motion.li
                    key={-1}
                    whileHover={{scale: 1.05, originX: 0}}
                    whileTap={{scale: 0.95}}
                    >
                        <button className="text-gray-800 hover:text-gray-400">
                        </button>
                    </motion.li>

                    {Links.map((link, index) => (
                        <motion.li
                        key={index}
                        whileHover={{scale: 1.05, originX: 0}}
                        whileTap={{ scale: 0.95}}
                        >
                            <Link
                            to={link.Link}
                            className="text-gray-800 hover:text-gray-400"
                            onClick={()=> {
                                // navigate(link.Link)
                                handleItemClick()
                            }}
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    )
}

export default NavBar