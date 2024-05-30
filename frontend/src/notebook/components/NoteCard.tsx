import {Note} from "../models/Note.ts";
import {NoteCardActionsMenu} from "./NoteCardActionsMenu.tsx";
import {NoteCardTagsContainer} from "./NoteCardTagsContainer.tsx";

type NoteCardProps = {
  note: Note;
  onToggleArchive: () => void;
  onNoteDeletion: () => void;
}

export const NoteCard = ({note, onToggleArchive, onNoteDeletion}: NoteCardProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] bg-white dark:bg-slate-800 rounded-xl drop-shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-primary text-xl font-bold dark:text-primary-dark mb-1">{note.title}</h2>
        <p className="dark:text-light">{note.content}</p>
      </div>
      {
        note.tags.length !== 0 && <NoteCardTagsContainer tags={note.tags}/>
      }
      <NoteCardActionsMenu
        note={note}
        onToggleArchive={onToggleArchive}
        onDeletion={onNoteDeletion}
      />
    </div>
  );
};