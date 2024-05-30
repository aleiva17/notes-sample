import {ReactElement} from "react";
import {Spinner} from "../Spinner.tsx";

type LoadingMessageProps = {
  message: string;
  spinnerSize?: number;
}

export const LoadingMessage = ({message, spinnerSize = 64}: LoadingMessageProps): ReactElement => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Spinner size={spinnerSize}/>
      <p className="text-lg dark:text-light font-bold">{message}</p>
    </div>
  );
};