import {ReactElement} from "react";
import {BaseLayout} from "../../shared/layouts/BaseLayout.tsx";
import {SettingsMenu} from "../components/SettingsMenu.tsx";

export const SettingsPage = (): ReactElement => {
  return (
    <BaseLayout>
      <main className="flex justify-center items-center p-6">
        <SettingsMenu />
      </main>
    </BaseLayout>
  );
};