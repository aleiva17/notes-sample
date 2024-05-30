import {ReactElement} from "react";
import {BaseLayout} from "../../shared/layouts/BaseLayout.tsx";
import {Link, useLocation} from "react-router-dom";

export const NotFoundPage = (): ReactElement => {
  const location = useLocation();

  return (
    <BaseLayout>
      <main className="flex flex-col justify-center items-center p-6">
        <img
          src="/404.webp"
          alt="Girl holding a sign with a 404 error message"
          className="h-auto w-56 md:w-64 lg:w-72"
        />
        <div className="text-center dark:text-light pb-8">
          <p className="text-4xl font-bold text-secondary dark:text-secondary-dark py-3">
            Oops!
          </p>
          <p className="mt-2 mb-1"> You didn't break the internet, but we can't find what you are looking for.</p>
          <p className="text-sm">
            <span className="font-semibold text-accent dark:text-accent-dark">{location.pathname}</span> doesn't exist
          </p>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full bg-secondary dark:bg-secondary-dark w-fit text-light dark:text-primary px-4 py-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
          </svg>
          Go back to home
        </Link>
      </main>
    </BaseLayout>
  );
};