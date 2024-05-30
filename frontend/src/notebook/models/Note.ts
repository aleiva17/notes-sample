import {Tag} from "./Tag.ts";

export interface Note {
  id: string;
  title: string;
  content: string;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  tags: Array<Tag>;
}