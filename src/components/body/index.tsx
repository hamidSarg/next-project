'use client'
import {useApp} from "@hooks/app";
import {MotionForm} from "@components/motion/form";
import {motion} from "framer-motion";
import {rowVariants} from "@components/motion";
import {Field} from "@components/field/text";
import {DatePickerField} from "@components/field/datePicker";
import {SelectField} from "@components/field/select";
import {DropzoneField} from "@components/field/dropzone";
import Button from "@components/button";


export function Body() {

    const service = useApp();

    return (
        <service.FormProvider {...service.methods}>
            <MotionForm onSubmit={service.methods.handleSubmit(service.onSubmit)} className="bg-transparent p-2 pt-6 flex w-full flex-col absolute top-[100px]">
                <motion.div className="flex gap-2" initial="hidden" animate="visible" variants={rowVariants} custom={0}>
                    <Field
                        name="fullName"
                        control={service.methods.control}
                        errors={service.methods.formState.errors}
                        placeholder="نام و نام خانوادگی"
                        order={1}
                    />
                    <Field
                        name="phoneNumber"
                        control={service.methods.control}
                        errors={service.methods.formState.errors}
                        placeholder="شماره تلفن"
                        order={2}
                    />
                </motion.div>

                <motion.div className="flex gap-2" initial="hidden" animate="visible" variants={rowVariants} custom={2}>
                    <DatePickerField
                        name="birthDate"
                        control={service.methods.control}
                        errors={service.methods.formState.errors}
                        placeholder="تاریخ تولد"
                        order={3}
                    />
                    <Field
                        name="email"
                        control={service.methods.control}
                        errors={service.methods.formState.errors}
                        placeholder="ایمیل"
                        order={4}
                    />
                </motion.div>

                <motion.div className="flex gap-2" initial="hidden" animate="visible" variants={rowVariants} custom={4}>
                    <SelectField
                        name="militaryStatus"
                        control={service.methods.control}
                        errors={service.methods.formState.errors}
                        placeholder="وضعیت نظام وظیفه"
                        options={['مشمول', 'معاف', 'پایان خدمت']}
                        order={5}
                    />
                    <SelectField
                        name="gender"
                        control={service.methods.control}
                        errors={service.methods.formState.errors}
                        placeholder="جنسیت"
                        options={['آقا', 'خانم']}
                        order={6}
                    />
                </motion.div>

                <motion.div className="flex gap-2" initial="hidden" animate="visible" variants={rowVariants} custom={6}>
                    <DropzoneField
                        name="resume"
                        errors={service.methods.formState.errors}
                        placeholder="رزومه"
                        order={7}
                    />
                </motion.div>

                <motion.div
                    className="w-full py-2 flex justify-start flex-row-reverse"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 3.5, duration: 0.8, ease: 'easeOut'}}
                >
                    <Button
                        withClickEffect={true}
                        className={`max-w-[100px] w-full py-2 bg-blue-500 text-white rounded-md font-primary text-regular-14-400`}>
                        ثبت رزومه
                    </Button>
                </motion.div>
            </MotionForm>

        </service.FormProvider>
    );
}
