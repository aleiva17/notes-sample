import {ReactElement} from "react";
import {Header} from "../components/Header.tsx";
import {Footer} from "../components/Footer.tsx";

type BaseLayoutProps = {
  children: ReactElement;
}

export const BaseLayout = ({children}: BaseLayoutProps): ReactElement => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] bg-light text-primary dark:bg-dark dark:text-light min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};