import {Controller, useFormContext} from "react-hook-form";
import {useDropzone} from "react-dropzone";
import {motion} from "framer-motion";
import {DropsZoneFieldProps} from "@components/field/dropzone/index.type";


export function DropzoneField({ name, errors, placeholder, order }: DropsZoneFieldProps) {
    const { setValue, watch } = useFormContext();
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
            'application/pdf': []
        },
        onDrop: (acceptedFiles) => {
            const filteredFiles = acceptedFiles.filter(file => file.size <= 2 * 1024 * 1024); // 2MB size limit
            setValue(name, filteredFiles);
        }
    });

    const files = watch(name);

    return (
        <motion.div
            className="relative w-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: order * 0.5, duration: 0.8, ease: 'easeOut' }}
        >
            <p className={'font-primary text-regular-14-400 py-2'}>{placeholder}</p>
            <Controller
                name={name}
                render={({ field }) => (
                    <div {...getRootProps()}
                         className="flex items-center justify-center min-h-[200px] border-dashed border-2 border-gray-300 p-4 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white relative font-primary">
                        <input {...getInputProps()} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                            <g transform="translate(120, 50)">
                                <rect x="0" y="0" width="60" height="40" rx="5" ry="5" fill="#e0e0e0"/>
                                <path d="M10 10 L50 10 L50 30 L10 30 Z" fill="#bdbdbd"/>
                                <circle cx="30" cy="25" r="5" fill="#9e9e9e"/>
                            </g>
                            <text className={'font-primary text-regular-14-400'} x="50%" y="130" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16"
                                  fill="#333">
                                انتخاب فایل یا رها کردن فایل در این قسمت
                            </text>
                            <text className={'font-primary text-regular-14-400'} x="50%" y="150" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12"
                                  fill="#777">
                                یک فایل انتخاب کنید تا حداکثر 2MB حجم
                            </text>
                        </svg>
                    </div>
                )}
            />
            {files && files.length > 0 && (
                <motion.div
                    className="mt-4 p-4 border border-gray-300 rounded-md flex items-center justify-between !bg-white gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {files[0].type.startsWith('image/') && (
                        <img src={URL.createObjectURL(files[0])} alt="Preview" className="w-16 h-16 object-cover mr-4 rounded-[4px]"/>
                    )}
                    <div className="flex-1">
                        <p className="font-primary text-regular-14-400">{files[0].name}</p>
                        <p className="text-gray-500 font-primary text-regular-14-400">{(files[0].size / 1024).toFixed(2)} KB</p>
                    </div>
                    <button
                        type="button"
                        className="text-gray-500"
                        onClick={() => setValue(name, [])}
                    >
                        <svg className="w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5 15.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                        </svg>
                    </button>
                </motion.div>
            )}
            {errors[name] && (
                <div className="flex items-center text-red-500 text-regular-12-500 mt-1 font-primary">
                    <svg className="ml-2 w-4 h-4 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path
                            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-15h-2v6h2V7zm0 8h-2v2h2v-2z"/>
                    </svg>
                    <p>{String(errors[name]?.message)}</p>
                </div>
            )}
        </motion.div>
    );
}
