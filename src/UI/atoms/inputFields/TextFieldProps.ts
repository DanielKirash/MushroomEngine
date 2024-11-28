export type TextFieldProps = {
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    placeholder?: string;
    error?: string;
    addClass?:string;
  };

  