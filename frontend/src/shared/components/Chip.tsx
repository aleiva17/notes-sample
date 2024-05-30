import {ReactElement} from "react";

type ChipProps = {
  label: string;
}

export const Chip = ({label}: ChipProps): ReactElement => {
  return (
    <span className="bg-gray-200 dark:bg-secondary-dark dark:text-primary text-xs font-medium rounded-full px-3 py-0.5">{label}</span>
  );
};