export function PlayerCard({ img, title, events, sport }) {
    return (
        <div className="h-[511px] w-[237px] shadow-xl dark:bg-[#3B3E47] bg-white">
            <div className="flex flex-col gap-2 items-center justify-center p-2">
                <img src={img} alt="" className="w-[385px] h-[385px] object-cover"/>
                <span className="text-black dark:text-white font-medium">{title}</span>
                <div className="p-2 flex justify-around gap-4 w-[217px] h-[54px] bg-[#F7F7F8] dark:bg-[#292B32]">
                    <div className="flex flex-col gap-1">
                        <span className="text-[#DFDFDF] font-normal text-xs">Total Events</span>
                        <span className="text-sm dark:text-white text-black">{events} Events</span>
                    </div>
                    <div className="flex flex-col gap-1">
                    <span className="text-black dark:text-[#DFDFDF] font-normal text-xs">Sport</span>
                        <span className=" text-sm dark:text-white text-black">{sport}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}