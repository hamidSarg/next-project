'use client'

import {useState} from "react";
import {motion} from "framer-motion";
import {Controller} from "react-hook-form";
import {FieldProps} from "@components/field/text/index.type";


export
function Field({name, control, errors, placeholder, order}: FieldProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            className="relative w-full mb-4"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0 }}
            transition={{ delay: order * 0.5, duration: 0.8, ease: 'easeOut' }}
        >
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div className="relative">
                        <input
                            {...field}
                            type="text"
                            id={name}
                            placeholder={isFocused ? '' : placeholder}
                            className={`w-full text-regular-14-400 p-4 ${isFocused || field.value ? "pt-[30px]" : ""}  h-14 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white z-10 relative font-primary`}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(field.value ? true : false)}
                        />
                        <label
                            htmlFor={name}
                            className={`absolute left-2 top-2 text-gray-700 transition-all duration-300 ease-in-out font-primary ${isFocused || field.value ? 'text-regular-12-500 !top-1 right-2' : 'text-sm'}`}
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

