import { useState } from 'react'
import data from "../data.json"

export default function TechnologyPage () {



  const [technologies, setTechnologies] = useState(data.technology)

const [selectedTechnology, setselectedTechnology] = useState(technologies[0])

    return (
        <>   
     <div className="h-screen bg-cover bg center ">
        <div className='absolute -z-10 inset-0'>
          <img src='background-technology-desktop.jpg' className='object-cover h-full w-full' />
        </div>
        

           

         {/* nav was here */}
         

         

        {/* <!-- left section --> */}
         <div class="max-w-2xl space-y-8 text-center lg:text-left pt-50 pl-30">
            <h2> <span className="text-gray-400 font-serif text-xl tracking-wider pr-5">03</span>SPACE LAUNCH 101</h2>
          </div>

          <div className='pl-30 flex gap-20 object-contain'>

                {/* <!-- Vertical step buttons --> */}
                 <div className="flex lg:flex-col text-center space-x-4 lg:space-x-0 lg:space-y-4 pt-30">
                    <div onClick={()=> setselectedTechnology(technologies[0]) } className="pt-3 justify-center w-12 h-12 rounded-full border-2 border-gray-700 hover:bg-white hover:text-black text-white font-bold hover:cursor-pointer">1</div>
                    <div onClick={()=> setselectedTechnology(technologies[1]) } className="pt-3 justify-center w-12 h-12 rounded-full border-2 border-gray-700 hover:bg-white hover:text-black text-white font-bold hover:cursor-pointer">2</div>
                    <div onClick={()=> setselectedTechnology(technologies[2]) } className="pt-3 justify-center w-12 h-12 rounded-full border-2 border-gray-700 hover:bg-white hover:text-black text-white font-bold hover:cursor-pointer">3</div>
                 </div>

                 {/* <!-- Text content --> */}
                  <div className='w-1/2 pt-30'>
                    <p class="uppercase text-gray-400 tracking-wide text-sm">The Terminology...</p>
                    <h1 class="text-5xl text-white font-serif uppercase my-2">{selectedTechnology.name}</h1>
                    <p class="text-gray-500 leading-relaxed">{selectedTechnology.description}</p>
                 </div>
            
         

         {/* <!-- right section --> */}
          <div class="w-1/2">
            <img src={selectedTechnology.images.portrait} alt="Launch Vehicle" className="h-120 object-contain rounded-lg"/>
          </div>

          </div>


      </div>
    

        </>
    )
}