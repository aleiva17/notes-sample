import {ReactElement} from "react";
import {Chip} from "../../shared/components/Chip.tsx";
import {AddTagInputDropdown} from "./AddTagInputDropdown.tsx";
import {ConfirmActionDialog} from "../../shared/components/ConfirmActionDialog.tsx";
import {useAdvanceEditNote} from "../hooks/useAdvanceEditNote.tsx";


export const AdvanceEditNote = (): ReactElement => {
  const {note, tags, tagToRemove, selectedTag, setSelectedTag, setTagToRemove, onTagAdd, onTagRemoved} = useAdvanceEditNote();

  return (
    <div
      className="bg-white dark:bg-slate-800 dark:text-light rounded-2xl drop-shadow-md max-w-screen-sm w-full mx-auto p-6"
    >
      <ConfirmActionDialog
        isOpen={tagToRemove !== undefined}
        onClose={() => setTagToRemove(undefined)}
        onCancel={() => setTagToRemove(undefined)}
        onConfirm={onTagRemoved}
        title="Remove tag"
        description={
          tagToRemove
            ? `Are you sure you want to remove '${tagToRemove.name}' tag?`
            : "Closing dialog."
        }
      />
      <h2 className="text-secondary dark:text-secondary-dark font-bold text-3xl">
        Edit note tags:
      </h2>
      <p className="mt-2 mb-6">
        {
          note.tags.length === 0
            ? "The current note does not yet contain any tags."
            : "To remove a note, just click in the chip and confirm your action."
        }
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {
          note.tags.map(tag =>
            <button onClick={() => setTagToRemove(tag)}>
              <Chip key={tag.id} label={tag.name}/>
            </button>
          )
        }
      </div>
      <div className="grid grid-cols-[1fr_auto] place-items-center gap-3">
        <AddTagInputDropdown
          tags={tags}
          selectedTag={selectedTag}
          onSelectedTag={setSelectedTag}
        />
        <button
          onClick={onTagAdd}
          className="
            flex justify-center items-center
            font-semibold text-light dark:text-primary
            bg-accent hover:bg-accent/80 dark:bg-accent-dark dark:hover:bg-accent-dark/90
            drop-shadow-sm rounded-lg  px-4 h-full w-full
          "
        >
          Add tag
        </button>
      </div>
    </div>
  );
};