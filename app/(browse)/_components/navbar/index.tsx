
import { Logo } from "./logo";
import { Search } from "./search";
import { Actions } from "./actions";
import { Meet } from "./meeting";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-30 z-[49] bg-[#252731] 
        px-2 py-2 lg:px-4 flex justify-between items-center shadow-sm" >
            <Logo />
            <Search />
            <Meet />
            <Actions />
        </nav>
    );
};