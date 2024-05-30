import {ReactElement} from "react";
import {Link} from "react-router-dom";
import {NavBar} from "./NavBar.tsx";
import {ThemeSwitcher} from "../../settings/components/ThemeSwitcher.tsx";

export const Header = (): ReactElement => {
  return (
    <header className="flex justify-between md:justify-around items-center p-6">
      <Link to="/" className="flex justify-center items-center hover:scale-95 duration-300 space-x-2">
        <img className="h-10 lg:h-16 w-auto" src="/logo.webp" alt="Easy Notes logo"/>
        <strong className="hidden md:inline text-2xl lg:text-4xl font-bold">Easy Notes</strong>
      </Link>
      <div className="flex items-center gap-3">
        <NavBar />
        <ThemeSwitcher />
      </div>
    </header>
  );
};