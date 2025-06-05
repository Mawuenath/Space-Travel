import {Link} from 'react-router-dom'

function NavBar() {

    return(
         <nav class="absolute top-0 left-0 w-full flex items-center justify-between py-6 z-50">
            

            <img src="logo.svg" alt="logo" class="pl-5" />

            <div className="absolute top-16.5 left-30 w-[45%] h-[2px] bg-gray-700 z-50"></div>

            <div className=" w-1/2 backdrop-blur-sm bg-white/10 px-10  text-sm flex gap-20 text-gray-300 pl-20">

            <ul className="flex gap-10 ">
                <li className="text-white text-sm py-8 hover:border-b-2">
                    <Link to="/">00 HOME</Link></li>

                <li className="text-white text-sm py-8 hover:border-b-2">
                    <Link to="/Destination"> 01 DESTINATION </Link></li>

                <li className="text-white text-sm py-8 hover:border-b-2">
                    <Link to="/Crew">02 CREW </Link></li>

                <li className="text-white text-sm py-8 hover:border-b-2">
                    <Link to="/Technology"> 03 TECHNOLOGY</Link></li>
            </ul>

            </div>
           
         </nav>
    )
}



export default NavBar;





