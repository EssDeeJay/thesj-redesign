import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeToggler(){
    const {theme, setTheme} = useTheme();

    return(
        <button aria-label="theme-toggler"
                onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-gray-2 dark:bg-dark-bg flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white mr-1.5 absolute lg:static right-17 font-bold"
        >
            <Image src="/images/icons/icon-moon.svg"
                   alt="dark-logo"
                   width={21}
                   height={21}
                   className="dark:hidden"
            />
            <Image src="/images/icons/icon-sun.svg"
                    alt="light-logo"
                    width={21}
                    height={21}
                    className="hidden dark:block"
            />
        </button>
    )
}