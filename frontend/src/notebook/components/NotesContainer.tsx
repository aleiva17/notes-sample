import {ChangeEvent, ReactElement, useState} from "react";
import {NoteCard} from "./NoteCard.tsx";
import {Note} from "../models/Note.ts";

type NotesContainerProps = {
  notes: Array<Note>;
  onNoteArchiveToggle: (note: Note) => void;
  onNoteDeletion: (note: Note) => void;
}

export const NotesContainer = ({notes, onNoteArchiveToggle, onNoteDeletion}: NotesContainerProps): ReactElement => {
  const [showArchive, setShowArchive] = useState(false);
  const [filterTag, setFilterTag] = useState<string>("");
  const displayableNotes =
    notes.filter((note: Note) => {
      if (note.isArchived !== showArchive) return false;
      if (filterTag.length === 0) return true;
      return note.tags.some(tag => tag.name.startsWith(filterTag));
    });

  const onFilterTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterTag(e.target.value.toLowerCase());
  }

  return (
    <>
      <div className="font-semibold mb-4">
        <span>Showing ({displayableNotes.length}): </span>
        <button
          className={`${!showArchive && "text-accent dark:text-accent-dark"}`}
          onClick={() => setShowArchive(false)}
        >
          Active
        </button>
        <span> | </span>
        <button
          className={`${showArchive && "text-accent dark:text-accent-dark"}`}
          onClick={() => setShowArchive(true)}
        >
          Archived
        </button>
      </div>
      <div className="mb-6">
        <span className="font-semibold mr-2">Filter by tag name:</span>
        <input
          onChange={onFilterTagChange}
          className="inline bg-gray-50 text-sm dark:bg-slate-900 dark:text-light border border-gray-300 dark:border-gray-800 text-gray-900 rounded-lg p-2.5"
          value={filterTag}
          type="text"
          placeholder="Enter a tag name"
        />
      </div>
      {
        displayableNotes.length === 0
          ?
          <p className="font-medium">
            It seems that you do not have any notes registered as {showArchive ? "archived" : "active"}
            {
              filterTag.length === 0
                ? "."
                : ` with tag name starting with '${filterTag}'`
            }
          </p>
          : <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              displayableNotes.map(note =>
                <NoteCard
                  key={note.id}
                  note={note}
                  onToggleArchive={() => onNoteArchiveToggle(note)}
                  onNoteDeletion={() => onNoteDeletion(note)}
                />
              )
            }
          </div>
      }
    </>
  );
};