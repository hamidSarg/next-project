import * as yup from "yup";
import {phoneRegex} from "@/lib";
import {useForm} from "react-hook-form";
import {FormData} from "@/forms/app/index.type";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormProvider} from 'react-hook-form';


const validationSchema = yup.object({
    fullName: yup.string().required('ابتدا نام را وارد کنید.'),
    phoneNumber: yup.string().matches(phoneRegex, 'شماره تلفن معتبر نیست').required('ابتدا شماره تلفن را وارد کنید.'),
    birthDate: yup.string().required('ابتدا تاریخ نولد را وارد کنید.'),
    email: yup.string().email('ایمیل معتبر نیست').required('ابتدا ایمیل را وارد کنید.'),
    militaryStatus: yup.string().required('وضعیت نظام وظیفه الزامی است'),
    gender: yup.string().required('جنسیت الزامی است'),
    resume: yup.mixed()
        .required('ابتدا رزومه را وارد کنید.')
        .test('fileType', 'فقط فایل‌های PDF و تصویر مجاز هستند', (value) => {
            return Array.isArray(value) && value.length > 0 && value.every((file: File) => ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type));
        })
        .test('fileSize', 'حجم فایل نباید بیشتر از 2MB باشد', (value) => {
            return Array.isArray(value) && value.length > 0 && value.every((file: File) => file.size <= 2 * 1024 * 1024);
        }),
}).required();

export const useAppForm = ()=>{
    const methods = useForm<FormData>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    return{
        methods,
        FormProvider
    }


}
