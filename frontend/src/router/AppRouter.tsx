import {ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import {NotesPage} from "../notebook/pages/NotesPage.tsx";
import {SettingsPage} from "../settings/pages/SettingsPage.tsx";
import {CreateNotePage} from "../notebook/pages/CreateNotePage.tsx";
import {EditNotePage} from "../notebook/pages/EditNotePage.tsx";
import {NotFoundPage} from "../public/pages/NotFoundPage.tsx";

export const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<NotesPage />} />
      <Route path="/notes/create" element={<CreateNotePage />} />
      <Route path="/notes/edit/:noteId" element={<EditNotePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};