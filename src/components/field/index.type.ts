import { Control, FieldErrors } from 'react-hook-form';


export interface ControllableFieldProps {
    control: Control<any>;
}

export interface BaseFieldProps {
    name: string;
    errors: FieldErrors;
    placeholder: string;
    order: number;
}
