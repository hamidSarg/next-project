import {BaseFieldProps, ControllableFieldProps} from "@components/field/index.type";


export interface SelectFieldProps extends BaseFieldProps , ControllableFieldProps {
    options: string[];
}
