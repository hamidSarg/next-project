

export interface MotionFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    className?: string;
    children: React.ReactNode;
}
