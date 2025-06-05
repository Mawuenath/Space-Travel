import ladyPic from "../assets/crew/image-anousheh-ansari.png"
import { useState } from 'react'
import data from '../data.json'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiMiniArrowSmallLeft } from "react-icons/hi2";









export default function CrewPage(){


const [currentIndex, setCurrentIndex] = useState(0)


const [crew, setCrews] = useState(data.crew)



const [selectedMember, setselectedMember] = useState(crew[currentIndex])



const handleNextImage=()=>{
if (currentIndex >= crew.length-1){
  setCurrentIndex(0)
  setselectedMember(crew[0])
} else{
  setselectedMember(crew[currentIndex + 1])
  setCurrentIndex(currentIndex + 1)
}

}


const handlePreviousImage=()=>{
if (currentIndex == 0 ){
  setCurrentIndex(crew.length-1)
  setselectedMember(crew[currentIndex + crew.length-1])
} else{
  setselectedMember(crew[currentIndex -1])
  setCurrentIndex(currentIndex -1)

}

}






    return (

    
    <>
      <div className="h-screen  bg-cover bg center">
        <div className='absolute -z-10 inset-0'>
          <img src='background-crew-desktop.jpg' className='object-cover h-full w-full' />
        </div>


        <div className="absolute z-50 mt-86 w-full justify-between flex">
              <div>
                <button onClick={handlePreviousImage}><HiMiniArrowSmallLeft /></button>
              </div>
              
              <div>
                <button  onClick={handleNextImage}><HiOutlineArrowSmRight /></button>
              </div>



            </div>

        <div className="flex gap-10 pl-30 pt-40 h-full">

        <div class="max-w-xl space-y-6 text-center lg:text-left">
            
            <h2 class="text-gray-400 font-serif text-xl tracking-wider">02 MEET YOUR CREW</h2>


            



            <h3 class="text-2xl text-gray-300 uppercase pt-20">{selectedMember.role}</h3>
            <h6 class="text-4xl font-serif uppercase text-white">{selectedMember.name}</h6>
            <p class="text-gray-300">
                Anousheh Ansari is an Iranian American engineer and co-founder of prodea
                system. Ansari was the fourth self-funded space tourist, the first self-funded
                woman to fly to ISS, and the first Iranian in space.
            </p>


            
             <div class="flex space-x-4 justify-center lg:justify-start mt-6 pt-30">
                <div onClick={()=> setselectedMember(crew[0]) } class="w-3 h-3 rounded-full bg-white cursor-pointer "></div>
                <div onClick={()=> setselectedMember(crew[1])} class="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
                <div onClick={()=> setselectedMember(crew[2]) } class="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
                <div onClick={()=> setselectedMember(crew[3]) } class="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
             </div>
            

         </div>

         <div className='w-1/2'>
            <img className="w-2/3 " src={selectedMember.images.png} alt="Anousheh Ansari" class="pl-40 h-142 object-contain"/>
          </div>
        </div>
       
    </div>
    </>
  )
}
