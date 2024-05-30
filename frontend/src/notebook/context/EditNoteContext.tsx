import {createContext, ReactElement, useEffect, useState} from "react";
import {Note} from "../models/Note.ts";
import {Tag} from "../models/Tag.ts";
import {TagsService} from "../services/tags-service.ts";
import {toast} from "react-toastify";

type EditNoteContextProviderProps = {
  children: ReactElement | ReactElement[];
  defaultNote: Note;
}

type EditNoteContextType = {
  note: Note;
  tags: Array<Tag>;
  updateNote: (note: Note) => void;
}

export const EditNoteContext = createContext<EditNoteContextType>({} as EditNoteContextType);

export const EditNoteContextProvider = ({children, defaultNote}: EditNoteContextProviderProps) => {
  const [note, setNote] = useState<Note>(defaultNote);
  const [tags, setTags] = useState<Array<Tag>>([]);

  useEffect(() => {
    TagsService
      .getAll()
      .then(setTags)
      .catch(error => toast.error(error.message))
  }, []);

  const updateNote = (newNote: Note): void => {
    setNote({
      ...newNote,
      tags: newNote.tags.map(tag => ({...tag}))
    });
  }

  return (
    <EditNoteContext.Provider value={{
      note: note,
      tags: tags,
      updateNote: updateNote
    }}>
      {children}
    </EditNoteContext.Provider>
  );
};