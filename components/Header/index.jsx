"use client";
import React, {useState, useEffect} from "react";

import Image from "next/image";
import Link from "../Lines";
import { usePathname } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

export default function Header(){
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);

    const pathUrl = usePathname();

    const handleStickyMenu = () => {
        if(window.scrollY >= 80){
            setStickyMenu(true)
        }else{
            setStickyMenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleStickyMenu)
    });

    return (
        <header className={`fixed left-0 top-0 w-full z-99999 py-7 ${stickyMenu ? "bg-white dark:bg-black shadow !py-4 transition duration-100" : "" }`}>
            <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex justify-between items-center relative">
                <a href="/">
                    The SJ Development
                </a>
            </div>
        </header>
    )
}