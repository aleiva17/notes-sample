// I'd prefer to use axios, but I will try to keep it
// with the less amount of dependencies
import {Note} from "../models/Note.ts";
import {UpdateNoteRequest} from "../models/UpdateNoteRequest.ts";
import {CreateNoteRequest} from "../models/CreateNoteRequest.ts";

export class NotesService {
  static readonly baseURL: string = import.meta.env.VITE_API_ENDPOINT;

  static async getAll(): Promise<Array<Note>> {
    let response: Response;

    try {
      response = await fetch(`${NotesService.baseURL}/notes`);
    } catch (err) {
      throw new Error(
        "Oops! It seems that the server is down for maintenance. Please try again later"
      );
    }

    if (!response.ok) {
      throw new Error(
        "There was a problem with the server when retrieving the notes. Please try again."
      );
    }

    return await response.json();
  }

  static async getById(id: string): Promise<Note> {
    let response: Response;

    try {
      response = await fetch(`${NotesService.baseURL}/notes/${id}`);
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

  static async create(payload: CreateNoteRequest): Promise<Note> {
    let response: Response;

    try {
      response = await fetch(`${NotesService.baseURL}/notes`, {
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
      throw new Error(
        "There was a problem with the server when creating the note. Please try again."
      );
    }

    return await response.json();
  }

  static async update(noteId: string, payload: UpdateNoteRequest): Promise<Note> {
    let response: Response;

    try {
      response = await fetch(`${NotesService.baseURL}/notes/${noteId}`, {
        method: 'PATCH',
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
      throw new Error(
        "There was a problem with the server when updating the note. Please try again."
      );
    }

    return await response.json();
  }

  static async delete(noteId: string): Promise<Note> {
    let response: Response;

    try {
      response = await fetch(`${NotesService.baseURL}/notes/${noteId}`, {
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