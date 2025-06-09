import { useState } from 'react'
import bg from '../assets/destination/background-destination-desktop.jpg'
import data from '../data.json'



export default function DestinationPage() {

// logic for this component goes here
// load all the destinations into this state

const [destinations, setDestinations] = useState(data.destinations)


const [selectedDestination, setselectedDestination] = useState(destinations[0])



const handleDestination = (destination) => {
    if (destination === "Moon" ) {
        setselectedDestination(destinations[0])

    }else if (destination === "Mars" ) {
        setselectedDestination(destinations[1])
    
     } else if (destination === "Europa" ) {
        setselectedDestination(destinations[2])

      } else if (destination === "Titan" ) {
        setselectedDestination(destinations[3])


    }
}




    return (
        <>
            <div className="h-screen  bg-cover bg-center">
                <div className='absolute -z-10 inset-0'>
                    <img src={bg} className='object-cover h-full w-full' />
                </div>





                <div>
                    <h2 class="uppercase text-white tracking-widest text-lg font-serif pt-40 ml-20"> <span className="text-gray-700 font-bold">01</span> Pick your destination </h2>
                </div>


                <div className='w-full flex justify-between items-center px-32 mt-10'>
                    <div className='w-1/2'>
                        <img src={selectedDestination.images.png} alt="" className='w-2/3' />
                    </div>

                    <div className='w-1/2'>
                        <div className='w-12'>
                            <ul className='flex flex-row gap-10'>
                                <li onClick={()=> handleDestination('Moon') } className="text-gray-500 hover:border-b-2 py-2 pb-5 hover:cursor-pointer hover:border-b-white hover:text-white">MOON</li>
                                <li onClick={()=> handleDestination('Mars')}  className="text-gray-500 hover:border-b-2 py-2 pb-5 hover:cursor-pointer border-b-white hover:text-white">MARS</li>
                                <li onClick={()=> handleDestination('Europa')}  className="text-gray-500 hover:border-b-2 py-2 pb-5 hover:cursor-pointer border-b-white hover:text-white">EUROPA</li>
                                <li onClick={()=> handleDestination('Titan')}  className="text-gray-500 hover:border-b-2 py-2 pb-5 hover:cursor-pointer border-b-white hover:text-white">TITAN</li>
                            </ul>
                        </div>

                        <h1 className='text-4xl font-serif font-light mb-5 text-white'>{selectedDestination.name}</h1>
                        <p className='text-gray-400'>{selectedDestination.description}</p>

                        <div className='flex gap-20 border-t border-gray-500 pt-6 mt-10 text-white tracking-widest uppercase'>
                            <div>
                                <p className='text-gray-700 mb-5'>AVG. DISTANCE</p>
                                <p className='text-2xl'>{selectedDestination.distance}</p>
                            </div>

                            <div>
                                <p className='text-gray-700 mb-5'>EST. TRAVEL TIME</p>
                                <p className='text-2xl'>{selectedDestination.travel}</p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}   