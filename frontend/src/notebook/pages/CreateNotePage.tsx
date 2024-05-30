import {ReactElement} from "react";
import {BaseLayout} from "../../shared/layouts/BaseLayout.tsx";
import {GoBackLink} from "../../shared/components/GoBackLink.tsx";
import {CreateNoteForm} from "../components/CreateNoteForm.tsx";

export const CreateNotePage = (): ReactElement => {
  return (
    <BaseLayout>
      <div className="flex justify-center p-6">
        <main className="max-w-screen-lg w-full">
          <h1 className="text-secondary dark:text-secondary-dark font-bold text-3xl mb-6">Create a note</h1>
          <GoBackLink destination="/" />
          <CreateNoteForm />
        </main>
      </div>
    </BaseLayout>
  );
};