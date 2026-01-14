import { useState } from "react";
import { BurgerMenuIcon } from "../assets/icons";
import { NavigationMenu } from "./UI/NavigationMenu";
import { textColor } from "../utils/types/variables.ts";

interface HeaderProps {
    title: string;
}

export const Header = ({title}: HeaderProps) => {
    console.log(textColor)
    const [isNavigationOpen, setIsNavigationOpen] = useState(false)
    return (
        <header className="relative w-full flex items-center justify-between p-4">
            <p className="text-2xl font-semibold">{title}</p>
            <button onClick={
                () => setIsNavigationOpen(true)
            }>
                <BurgerMenuIcon width={32} height={32} color={textColor}/>
            </button>
            {isNavigationOpen && (
                <NavigationMenu onClose={() => setIsNavigationOpen(false)} />
            )}
        </header>
    )
}