import {FormData} from "@/forms/app/index.type";
import {useAppForm} from "@/forms/app";



export const useApp = () => {

    const appForm = useAppForm()
    const onSubmit = (data: FormData) => {
        console.log('HERE YOU GO! ALL VALIDATIONS PASSED' , data);
    };

    return {
        methods:appForm.methods,
        onSubmit,
        FormProvider:appForm.FormProvider
    }
}
