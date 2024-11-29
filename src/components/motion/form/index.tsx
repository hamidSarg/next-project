
import { motion } from 'framer-motion';
import {MotionFormProps} from "@components/motion/form/index.type";




export const MotionForm = ({ onSubmit, className, children }: MotionFormProps)=>{


    return (
        <motion.form
            onSubmit={onSubmit}
            className="bg-transparent p-2 pt-6 flex w-full flex-col absolute top-[100px]"
        >
            {children}
        </motion.form>
    )
}
