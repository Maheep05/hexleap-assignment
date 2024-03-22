export function AdCard({ img, title, text }) {
    return (
        <div className="h-[511px] w-[237px] shadow-xl bg-white dark:bg-[#3B3E47]">
            <div className="flex flex-col gap-2 items-center justify-center p-2">
                <div className="relative">
                    <img src={img} alt="" className="w-[217px] h-[218px] object-cover" />
                    <span className="absolute top-0 right-0 w-[47px] bg-black h-[27px] text-white text-xs text-center items-center">Ad</span>
                </div>
                <span className="text-black dark:text-white font-large text-xl">{title}</span>
                <span className=" w-[187.14px] text-start leading-4  font-normal h-[171px] text-xs dark:text-[#DFDFDF] text-[#525965]">{text}</span>
            </div>
        </div>
    )
}