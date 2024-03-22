import { TicketCard } from "./TicketCard";
import tick1 from '../assets/tick1.jpg'
import tick2 from '../assets/tick2.jpg'
import tick3 from '../assets/tick3.jpg'


export function Collection() {

    const tickets = [{
        img: tick1,
        title: "Las Vegas Aviators",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        city: "Las Vegas Ballpark, Las Vegas, Nevada",
        collectionType: "Take Flight Collection",
    }, {
        img: tick2,
        title: "Sacramento River Cats",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        city: "Sutter Health Park, Sacramento, California",
        collectionType: "Orange Collection",
    }, {
        img: tick3,
        title: "Las Vegas Aviators",
        date: "OCT 15",
        day: "SUN",
        time: "4:30 PM",
        city: "Las Vegas Ballpark, Las Vegas, Nevada",
        collectionType: "Take Flight Collection",
    },]

    return (
        <div className="dark:bg-gradient-to-r dark:from-[#18282A] dark:via-[#18282A] dark:to-[#221A2C] 
        bg-gradient-to-r from-[#F9F8FF] via-[#F9F8FF] to-[#F3F9FF] 
        flex flex-col items-center gap-10   p-10">
            <span className="font-bold text-3xl md:text-5xl leading-10 dark:text-white text-black text-center">Collection Spotlight</span>
            <span className=" font-normal text-sm dark:text-white text-black  text-center leading-6 md:w-[400px] lg:w-[917px]">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</span>


            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className="border-2 hidden lg:block w-[36px] h-[49px] border-[#2C9CF0] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2C9CF0" className="w-[30px] h-[49px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </div>

                {tickets.map((ticket, index) => (
                    <TicketCard key={index} img={ticket.img} title={ticket.title} day={ticket.day} date={ticket.date} time={ticket.time} city={ticket.city} collectionType={ticket.collectionType} />
                ))}

                <div className="border-2 hidden lg:block  w-[36px] h-[49px] border-[#2C9CF0]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2C9CF0" className="w-[30px] h-[49px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>

        </div>
    )
}