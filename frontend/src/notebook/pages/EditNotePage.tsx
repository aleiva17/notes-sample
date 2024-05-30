import {BaseLayout} from "../../shared/layouts/BaseLayout.tsx";
import {useParams} from "react-router-dom";
import {GoBackLink} from "../../shared/components/GoBackLink.tsx";
import {useNote} from "../hooks/useNote.tsx";
import {ErrorMessage} from "../../shared/components/messages/ErrorMessage.tsx";
import {LoadingMessage} from "../../shared/components/messages/LoadingMessage.tsx";
import {EditNoteMenu} from "../components/EditNoteMenu.tsx";
import {EditNoteContextProvider} from "../context/EditNoteContext.tsx";

export const EditNotePage = () => {
  const noteId = useParams().noteId!;
  const { isLoading, note, error } = useNote(noteId);

  return (
    <BaseLayout>
      <div className="flex justify-center p-6">
        <main className="max-w-screen-lg w-full">
          <h1 className="text-secondary dark:text-secondary-dark font-bold text-3xl mb-6">Edit a note</h1>
          <GoBackLink destination="/" />
          {isLoading && <LoadingMessage message="Loading your amazing note..." />}
          {error && <ErrorMessage message={error} />}
          {note && 
            <EditNoteContextProvider defaultNote={note} >
              <EditNoteMenu />
            </EditNoteContextProvider>
          }
        </main>
      </div>
    </BaseLayout>
  );
}