import {BasicEditNoteForm} from "./BasicEditNoteForm.tsx";
import {AdvanceEditNote} from "./AdvanceEditNote.tsx";


export const EditNoteMenu = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <BasicEditNoteForm />
      <AdvanceEditNote />
    </section>
  );
};