import {Combobox} from "@headlessui/react";
import {Tag} from "../models/Tag.ts";
import {useState} from "react";

type TagInputDropdownProps = {
  tags: Array<Tag>;
  selectedTag: Tag | string;
  onSelectedTag: (tag: Tag) => void;
}

export const AddTagInputDropdown = ({tags, selectedTag, onSelectedTag}: TagInputDropdownProps) => {
  const [query, setQuery] = useState<string>('')
  const filteredTag =
    query === ''
      ? tags
      : tags.filter(
        (person) => person.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <Combobox
      value={selectedTag}
      onChange={onSelectedTag}
    >
      <div className="relative w-full">
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(tag: Tag) => tag.name}
          className="bg-gray-50 dark:bg-slate-900 dark:text-light border border-gray-300 dark:border-primary text-gray-900  rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
          placeholder="Tag name to be added"
        />
        <Combobox.Options
          className="absolute mt-1 max-h-24 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          {query.length > 0 && (
            <Combobox.Option
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-accent dark:bg-accent-dark text-light dark:text-primary' : 'text-gray-900'
                }`
              }
              value={{ id: null, name: query }}
            >
              Create "{query}"
            </Combobox.Option>
          )}
          {filteredTag.map((tag) => (
            <Combobox.Option
              key={tag.id}
              value={tag}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-accent dark:bg-accent-dark text-light dark:text-primary' : 'text-gray-900'
                }`
              }
            >
              {tag.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  )
}