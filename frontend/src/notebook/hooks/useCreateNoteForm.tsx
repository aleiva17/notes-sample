import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {toast} from "react-toastify";
import {NotesService} from "../services/notes-service.ts";
import {Note} from "../models/Note.ts";

export const useCreateNoteForm = () => {
  const [title, setTitle] = useState<string>("");
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [lastCreatedNote, setLastCreatedNote] = useState<Note | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 64) {
      return;
    }
    setTitle(e.target.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (title.length == 0 || !contentRef.current || contentRef.current.value.length == 0) {
      toast.error("You must complete all the fields.");
      return;
    }

    if (title.length > 64) {
      toast.error("The title must not exceed 64 characters.");
      return;
    }

    const toastId = toast.loading("Creating note...");
    setIsLoading(true);

    NotesService
      .create({title: title, content: contentRef.current.value})
      .then(newNote => {
        setLastCreatedNote(newNote);
        toast.update(toastId, {
          type: "success",
          render: "Note created successfully",
          isLoading: false,
          autoClose: 1500
        });
        setTitle("");
        contentRef.current!.value = "";
      })
      .catch((error: Error) => {
        toast.update(toastId, {
          type: "error",
          render: error.message,
          isLoading: false,
          autoClose: 1500
        });
      })
      .finally(() => setIsLoading(false));
  }

  return {
    title, lastCreatedNote, contentRef, isLoading, onSubmit, onTitleChange,
  } as const;
}