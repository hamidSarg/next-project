import {FormProvider, UseFormReturn} from "react-hook-form";


export interface UseAppReturn {
    methods: UseFormReturn<FormData>;
    onSubmit: (data: FormData) => void;
    FormProvider: typeof FormProvider;
}
