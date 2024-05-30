import {Tag} from "../models/Tag.ts";

export class TagsService {
  static readonly baseURL: string = import.meta.env.VITE_API_ENDPOINT;

  static async getAll(): Promise<Array<Tag>> {
    let response: Response;

    try {
      response = await fetch(`${TagsService.baseURL}/tags`);
    } catch (err) {
      throw new Error(
        "Oops! It seems that the server is down for maintenance. Please try again later"
      );
    }

    if (!response.ok) {
      throw new Error(
        "There was a problem with the server when retrieving the tags. Please try again."
      );
    }

    return await response.json();
  }
}