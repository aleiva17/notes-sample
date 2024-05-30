import {useEffect, useState} from "react";
import {Note} from "../models/Note.ts";
import {NotesService} from "../services/notes-service.ts";

export const useNote = (noteId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [note, setNote] = useState<Note | undefined>(undefined);
  const [error, setError ] = useState<string | undefined>();

  useEffect(() => {
    setIsLoading(true);
    NotesService
      .getById(noteId)
      .then(setNote)
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [noteId]);

  return {
    note,
    error,
    isLoading,
  } as const;
}