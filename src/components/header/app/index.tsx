import Button from "@components/button";


export const Header = () => {
    return (
        <div className={'flex absolute top-0 h-[100px] min-w-full p-2 items-center'}>
            <div className={'flex w-full flex-col h-full'}>
                <h1 className={'h-full font-primaryBold'}>فرم درخواست</h1>
                <h1 className={'h-full font-primary'}>ارسال روزمه برا شغل : تست ۲</h1>
            </div>
            <div className={'flex w-full h-full flex-row-reverse items-center'}>
                <Button
                    withClickEffect={true}
                    className={`flex w-[120px] min-h-[40px] border border-solid border-red-500 mb-4 items-center px-2 gap-2  justify-center rounded-[8px] `}>
                    <h1 className={`font-primary text-[#EF5033] text-regular-16-700 lg:text-regular-12-500 lg:font-primaryBold`}>
                        لغو درخواست
                    </h1>
                </Button>
            </div>
            <div className={'flex w-[99%] border-b border-b-solid absolute bottom-0  border-blue-900'}/>
        </div>
    );
}

