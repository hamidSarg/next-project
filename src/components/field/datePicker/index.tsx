'use client'
import {useRef, useState} from "react";
import {motion} from "framer-motion";
import {Controller} from "react-hook-form";
import DatePicker, { DatePickerRef } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {DatePickerFieldProps} from "@components/field/datePicker/index.type";
import 'react-multi-date-picker/styles/colors/teal.css';
import 'react-multi-date-picker/styles/colors/teal.css';

export function DatePickerField({ name, control, errors, placeholder, order }: DatePickerFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const datePickerRef = useRef<DatePickerRef | any>(null);

    return (
        <motion.div
            className="relative w-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: order * 0.5, duration: 0.8, ease: 'easeOut' }}
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(!!field.value)}
                        className="relative flex w-full ">
                        <DatePicker
                            {...field}
                            ref={datePickerRef}
                            calendar={persian}
                            locale={persian_fa}
                            format="YYYY/MM/DD"
                            placeholder={placeholder}
                            inputClass={` ${isFocused || field.value ? 'pt-[30px]' : ''} flex text-regular-14-400 w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-primary`}
                            className={"flex w-full !border-none"}
                            containerClassName="flex min-w-full h-14 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white z-10 relative"
                            style={{ width: '100%', height: '56px', backgroundColor: 'white' }}
                            containerStyle={{ backgroundColor: 'white' }}
                        />
                        <label
                            htmlFor={name}
                            className={`absolute right-2 top-2 text-gray-700 transition-all duration-300 ease-in-out font-primary ${isFocused || field.value ? 'text-regular-12-500 top-0 right-[24px] z-10' : 'text-sm z-10 hidden'}`}
                        >
                            {placeholder}
                        </label>
                    </div>
                )}
            />
            {errors[name] && (
                <div className="flex items-center text-red-500 text-regular-12-500 mt-1 font-primary">
                    <svg className="ml-2 w-4 h-4 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-15h-2v6h2V7zm0 8h-2v2h2v-2z"/>
                    </svg>
                    <p>{String(errors[name]?.message)}</p>
                </div>
            )}
        </motion.div>
    );
}
