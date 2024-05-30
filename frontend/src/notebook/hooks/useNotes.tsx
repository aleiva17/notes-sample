import {useEffect, useState} from "react";
import {Note} from "../models/Note.ts";
import {NotesService} from "../services/notes-service.ts";
import {toast} from "react-toastify";

export const useNotes = () => {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [noteToDelete, setNoteToDelete] = useState<Note | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    NotesService
      .getAll()
      .then(setNotes)
      .catch(error => toast.error(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  const toggleNoteArchive = (note: Note) => {
    const indexToUpdate = notes.indexOf(note);
    const toastId = toast.loading(
      `${note.isArchived ? "Unarchiving" : "Archiving"} note...`
    );
    NotesService
      .update(note.id, { isArchived: !note.isArchived })
      .then((updatedNote) => {

        const updatedNotes = [...notes];
        updatedNotes[indexToUpdate] = {...updatedNote};
        setNotes(updatedNotes);

        toast.update(toastId, {
          type: "success",
          render: `Note was successfully ${updatedNote.isArchived ? "archived" : "unarchived"}`,
          isLoading: false,
          autoClose: 1500
        });
      })
      .catch((error) => {
        toast.update(toastId, {
          type: "error",
          render: error.message,
          isLoading: false,
          autoClose: 1500
        });
      });
  }

  const deleteSelectedNote = (): void => {
    if (!noteToDelete) {
      return;
    }
    const indexToUpdate = notes.indexOf(noteToDelete);
    const toastId = toast.loading("Deleting note...");
    NotesService
      .delete(noteToDelete.id)
      .then(() => {
        const updatedNotes = [...notes]
        updatedNotes.splice(indexToUpdate, 1);
        setNotes(updatedNotes);
        toast.update(toastId, {
          type: "success",
          render: `Note was successfully deleted`,
          isLoading: false,
          autoClose: 1500
        });
      })
      .catch((error) => {
        toast.update(toastId, {
          type: "error",
          render: error.message,
          isLoading: false,
          autoClose: 1500
        });
      })
      .finally(() => setNoteToDelete(undefined));
  }

  return {
    notes, isLoading, noteToDelete, toggleNoteArchive, deleteSelectedNote, setNoteToDelete
  } as const;
};