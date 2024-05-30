import {useContext, useState} from "react";
import {EditNoteContext} from "../context/EditNoteContext.tsx";
import {Tag} from "../models/Tag.ts";
import {toast} from "react-toastify";
import {NoteTagsService} from "../services/note-tags-service.ts";

export const useAdvanceEditNote = () => {
  const {note, tags, updateNote} = useContext(EditNoteContext);
  const [selectedTag, setSelectedTag] = useState<Tag | string>("");
  const [tagToRemove, setTagToRemove] = useState<Tag | undefined>(undefined);

  const onTagAdd = () => {
    const toastId = toast.loading('Adding tag to your note...');
    NoteTagsService
      .addTagToNote(note.id, {
        name: typeof(selectedTag) === "string"
          ? selectedTag
          : selectedTag.name
      })
      .then((updatedNote) => {
        updateNote(updatedNote);
        toast.update(toastId, {
          type: "success",
          render: "Tag added to note successfully",
          isLoading: false,
          autoClose: 1500
        })
      })
      .catch((error: Error) => {
        toast.update(toastId, {
          type: "error",
          render: error.message,
          isLoading: false,
          autoClose: 1500
        })
      })
      .finally(() => setSelectedTag(""));
  }

  const onTagRemoved = (): void => {
    const toastId = toast.loading('Removing tag from your note...');
    NoteTagsService
      .removeTagFromNote(note.id, tagToRemove!.id)
      .then((updatedNote) => {
        updateNote(updatedNote);
        toast.update(toastId, {
          type: "success",
          render: "Tag removed from note successfully",
          isLoading: false,
          autoClose: 1500
        })
      })
      .catch((error: Error) => {
        toast.update(toastId, {
          type: "error",
          render: error.message,
          isLoading: false,
          autoClose: 1500
        })
      })
      .finally(() => setTagToRemove(undefined));
  }

  return {
    note,
    tags,
    selectedTag,
    tagToRemove,
    onTagAdd,
    onTagRemoved,
    setTagToRemove,
    setSelectedTag,
  } as const;
}