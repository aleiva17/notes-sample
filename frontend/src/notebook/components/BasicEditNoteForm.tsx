import {ReactElement, useContext} from "react";
import {useBasicEditNoteForm} from "../hooks/useBasicEditNoteForm.tsx";
import {EditNoteContext} from "../context/EditNoteContext.tsx";

export const BasicEditNoteForm = (): ReactElement => {
  const {note} = useContext(EditNoteContext);
  const {title, content, isLoading, onTitleChange, onContentChange, onSubmit} = useBasicEditNoteForm({note: note});

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white dark:bg-slate-800 dark:text-light rounded-2xl drop-shadow-md max-w-screen-sm w-full mx-auto p-6"
    >
      <h2 className="text-secondary dark:text-secondary-dark font-bold text-3xl mb-6">
        Update your note
      </h2>

      <label
        htmlFor="note-title"
        className="block mb-1 font-medium"
      >
        Title:
      </label>
      <input
        id="note-title"
        type="text"
        value={title}
        onChange={onTitleChange}
        className="bg-gray-50 dark:bg-slate-900 dark:text-light border border-gray-300 dark:border-primary text-gray-900  rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
        placeholder="Title for your note"
      />
      <p className="text-end">{64 - title.length}/64</p>

      <label
        htmlFor="note-content"
        className="block mb-1 font-medium"
      >
        Content:
      </label>
      <textarea
        id="note-content"
        value={content}
        onChange={onContentChange}
        rows={4}
        className="bg-gray-50 dark:bg-slate-900 dark:text-light border border-gray-300 dark:border-primary text-gray-900 rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 mb-6"
        placeholder="Here starts your amazing note"
      />
      <button
        disabled={isLoading}
        className="
          flex justify-center
          font-semibold text-light dark:text-primary
          bg-accent hover:bg-accent/80 dark:bg-accent-dark dark:hover:bg-accent-dark/90
          drop-shadow-sm rounded-lg py-2 px-4 w-full"
      >
        {isLoading ? "Updating note..." : "Update"}
      </button>
    </form>
  );
};