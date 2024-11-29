'use client'
import {useState} from "react";
import {motion} from "framer-motion";
import {Controller} from "react-hook-form";
import {SelectFieldProps} from "@components/field/select/index.type";


export function SelectField({ name, control, errors, placeholder, options, order }: SelectFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
                    <div className="relative">
                        <input
                            {...field}
                            type="text"
                            id={name}
                            value={inputValue}
                            placeholder={isFocused ? '' : placeholder}
                            className={`w-full text-regular-14-400 p-4 h-14 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white relative font-primary ${isFocused || field.value ? 'pt-[30px]' : ''}`}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <label
                            htmlFor={name}
                            className={`absolute right-2 top-2 text-gray-500 transition-all duration-300 ease-in-out font-primary ${isFocused || field.value ? 'text-sm !top-2 right-2' : 'text-sm hidden'}`}
                        >
                            {placeholder}
                        </label>
                        {isFocused && (
                            <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 z-10">
                                {options.map(option => (
                                    <div
                                        key={option}
                                        className="p-2 cursor-pointer hover:bg-gray-200 font-primary"
                                        onMouseDown={() => {
                                            setInputValue(option);
                                            field.onChange(option);
                                            setIsFocused(false);
                                        }}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
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
