import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from "react-toastify";
import {Note} from "../models/Note.ts";
import {NotesService} from "../services/notes-service.ts";

type useEditNoteFormProps = {
  note: Note;
}

export const useBasicEditNoteForm = ({note}: useEditNoteFormProps) => {
  const [title, setTitle] = useState<string>(note.title || "");
  const [content, setContent] = useState<string>(note.content || "");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length > 64) {
      return;
    }
    setTitle(e.target.value);
  }

  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (title.length == 0 || content.length == 0) {
      toast.error("You must complete all the fields.");
      return;
    }

    if (title.length > 64) {
      toast.error("The title must not exceed 64 characters.");
      return;
    }

    const toastId = toast.loading("Updating note...");
    setIsLoading(true);
    NotesService
      .update(note.id, {title: title, content: content})
      .then(() => {
        toast.update(toastId, {
          type: "success",
          render: "Note updated successfully",
          isLoading: false,
          autoClose: 1500
        });
      })
      .catch((error: Error) => {
        toast.update(toastId, {
          type: "success",
          render: error.message,
          isLoading: false,
          autoClose: 1500
        });
      })
      .finally(() => setIsLoading(false));
  }

  return {
    title, content, isLoading, onTitleChange, onContentChange, onSubmit
  } as const;
}