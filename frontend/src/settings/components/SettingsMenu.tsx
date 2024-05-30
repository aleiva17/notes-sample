import {ReactElement, useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";
import {Link} from "react-router-dom";

export const SettingsMenu = (): ReactElement => {
  const {setTheme} = useContext(ThemeContext);

  return (
    <section className="bg-white dark:bg-slate-800 dark:text-light max-w-screen-sm rounded-2xl drop-shadow-md w-full p-6">
      <h1 className="text-secondary dark:text-secondary-dark font-bold text-3xl">Settings:</h1>
      <p className="mt-2">
        Our app is highly customizable! In case you are looking for more customization options, do not hesitate to
        write us on our social networks about it.
      </p>
      <div className="my-6">
        <div className="flex items-center gap-8">
          <p className="text-lg font-semibold">Change app theme:</p>
          <div className="font-semibold space-x-4">
            <button
              className="hover:text-accent dark:hover:text-accent-dark"
              onClick={() => setTheme("light")}
            >
              Light
            </button>
            <button
              className="hover:text-accent dark:hover:text-accent-dark"
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <Link
          to="/"
          className="flex hover:text-accent dark:hover:text-accent-dark justify-center items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/>
          </svg>
          Go back to notes
        </Link>
        <p className="text-sm font-medium text-gray-400 dark:text-gray-500 text-end">version 1.0</p>
      </div>
    </section>
  );
};