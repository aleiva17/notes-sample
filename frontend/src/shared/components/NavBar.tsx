import {ReactElement} from "react";
import {Link} from "react-router-dom";

// Normally, in bigger projects we will have an array of objects (e.g.
// { url: string, label: string }) so we can render this list dynamically
export const NavBar = (): ReactElement => {
  return (
    <nav className="font-medium">
      <ul className="flex justify-center items-center gap-x-4">
        <li>
          <Link to="/" className="hover:text-accent dark:hover:text-accent-dark duration-300">Notes</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:text-accent dark:hover:text-accent-dark duration-300">Settings</Link>
        </li>
      </ul>
    </nav>
  )
}