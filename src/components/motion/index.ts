

export const rowVariants = {
    hidden: {opacity: 0, y: 20},
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {delay: index * 0.5, duration: 0.8, ease: 'easeOut'},
    }),
};
