import {Note} from "../models/Note.ts";
import {AddTagToNoteRequest} from "../models/AddTagToNoteRequest.ts";

export class NoteTagsService {
  static readonly baseURL: string = import.meta.env.VITE_API_ENDPOINT;

  static async addTagToNote(noteId: string, payload: AddTagToNoteRequest): Promise<Note> {
    let response: Response;

    try {
      response = await fetch(`${NoteTagsService.baseURL}/notes/${noteId}/tags`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      throw new Error(
        "Oops! It seems that the server is down for maintenance. Please try again later"
      );
    }

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    return await response.json();
  }

  static async removeTagFromNote(noteId: string, tagId: string): Promise<Note> {
    let response: Response;

    try {
      response = await fetch(`${NoteTagsService.baseURL}/notes/${noteId}/tags/${tagId}`, {
        method: 'DELETE'
      });
    } catch (err) {
      throw new Error(
        "Oops! It seems that the server is down for maintenance. Please try again later"
      );
    }

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    return await response.json();
  }
}