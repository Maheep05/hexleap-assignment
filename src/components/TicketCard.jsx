export function TicketCard({ img, title, date, day, time, city, collectionType }) {
    return (
        <div className="w-[220px] md:h-[624px] md:w-[257px] shadow-xl dark:bg-[#3B3E47] bg-white">
            <div className="flex flex-col gap-2 items-center justify-center p-2 relative overflow-hidden">
                <img src={img} alt="" className="w-[226.1px] h-[401.25px] my-2 object-cover" />


    
                
                    <span className=" w-[211px] border-b-2 h-[0.96px] border-dashed border-[#818A97]"></span>
                    <span className=" absolute -right-[12px] bottom-[166px] w-[20px] dark:bg-[#18282A] bg-[#F3F9FF] rounded-full h-[20px] bg-transparent"></span>
                    <span className=" absolute -left-[12px] bottom-[166px] w-[20px] dark:bg-[#18282a] bg-[#F3F9FF] rounded-full h-[20px] bg-transparent"></span>
             
            


                <div className="flex flex-col justify-center items-center gap-4">
                    <span className="text-black dark:text-white text-center font-medium">{title}</span>
                    <span className="text-black dark:text-white font-normal text-sm">{date} | {day} | {time}</span>
                    <span className="text-[#DFDFDF] text-center font-normal text-sm w-[213px] h-[31px]">{city}</span>

                    <div className="p-2 flex justify-center items-center  w-[213px] h-[36px] bg-black">
                        <span className="text-[#FFFFFF] font-medium text-xs">{collectionType}</span>
                    </div>
                </div>




            </div>

        </div>
    )
}