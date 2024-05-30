import {ReactElement} from "react";
import {BaseLayout} from "../../shared/layouts/BaseLayout.tsx";
import {useNotes} from "../hooks/useNotes.tsx";
import {NotesContainer} from "../components/NotesContainer.tsx";
import {LoadingMessage} from "../../shared/components/messages/LoadingMessage.tsx";
import {ConfirmActionDialog} from "../../shared/components/ConfirmActionDialog.tsx";
import {Link} from "react-router-dom";

export const NotesPage = (): ReactElement => {
  const {notes, isLoading, noteToDelete, toggleNoteArchive, setNoteToDelete, deleteSelectedNote} = useNotes();

  return (
    <BaseLayout>
      <div className="flex justify-center p-6">
        <ConfirmActionDialog
          title="Remove note"
          description={
            noteToDelete
              ? `Are you sure you want to delete '${noteToDelete.title}' note?`
              : "Closing dialog."
          }
          isOpen={noteToDelete !== undefined}
          onClose={() => setNoteToDelete(undefined)}
          onCancel={() => setNoteToDelete(undefined)}
          onConfirm={deleteSelectedNote}
        />
        <main className="max-w-screen-lg w-full">
          <div className="flex justify-between">
            <h1 className="text-secondary dark:text-secondary-dark font-bold text-3xl mb-6">My notes</h1>
            <Link
              to="/notes/create"
              className="
                flex justify-center items-center font-medium
                bg-primary dark:bg-primary-dark rounded-lg drop-shadow-md
                text-light hover:text-[#15F5BA] dark:text-dark dark:hover:hover:text-accent-dark
                h-fit w-fit py-2 pl-4 px-3 gap-1
              "
            >
              Create
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="inline w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>
            </Link>
          </div>
          {
            isLoading
              ? <LoadingMessage message="Loading your amazing notes..."/>
              : <NotesContainer notes={notes} onNoteArchiveToggle={toggleNoteArchive} onNoteDeletion={setNoteToDelete} />
          }
        </main>
      </div>
    </BaseLayout>
  );
};