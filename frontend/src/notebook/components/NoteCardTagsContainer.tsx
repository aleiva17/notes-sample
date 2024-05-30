import {ReactElement} from "react";
import {Tag} from "../models/Tag.ts";
import {Chip} from "../../shared/components/Chip.tsx";

type NoteCardTagsContainer = {
  tags: Array<Tag>;
}

export const NoteCardTagsContainer = ({tags}: NoteCardTagsContainer): ReactElement => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold dark:text-light mb-1">Tags:</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => <Chip key={tag.id} label={tag.name}/>)}
      </div>
    </div>
  );
};