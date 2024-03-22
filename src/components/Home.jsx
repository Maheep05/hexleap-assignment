import img from '../assets/athelete.jpg'
import { PlayerCard } from './PlayerCard'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import { AdCard } from './AdCard'
import ad from '../assets/ad.jpg'
import { Button } from './Button'
import { Collection } from './Collection'

export function Home() {

    const players = [
        { img: img, title: "Sacramento River Cats", events: "48", sport: "BasketBall" },
        { img: img2, title: "Las Vegas Aviators", events: "28", sport: "Baseball" },
        { img: img3, title: "New jersey devils", events: "15", sport: "Ice Hockey" },
        { img: img4, title: "Las Vegas Aviators", events: "28", sport: "Baseball" },
    ];

    const advertisement = [
        {
            img: ad,
            title: "Advertisement title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }
    ]

    return (

        <div>

            <div className="px-10 py-5 md:px-40 md:py-20 flex flex-col gap-10 ">
                <div className='flex flex-col gap-2'>
                    <span className="text-2xl font-bold font-poppins text-black dark:text-white">Sports</span>
                    <span className=" w-20 border-b-2 h-1  dark:border-[#738FFF] border-[#738FFF]"></span>
                </div>


                <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-8 justify-center'>
                    {players.map((player, index) => (
                        <PlayerCard key={index} img={player.img} title={player.title} events={player.events} sport={player.sport} />
                    ))}
                    {advertisement.map((adv, index) => (
                        <AdCard key={index} img={adv.img} title={adv.title} text={adv.text} />
                    ))}

                </div>

                <div className='flex justify-center'>
                    <Button text={"See More"} />
                </div>

                
                <Collection/>
                
            </div>
        </div>
    )
}