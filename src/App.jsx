// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Destination from './pages/Destination'
// import Crew from './pages/Crew'
// import Technology from './pages/Home'
// import NavBar from './components/NavBar'

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import DestinationPage from "./Pages/DestinationPage";
import CrewPage from "./Pages/CrewPage";
import TechnologyPage from "./Pages/TechnologyPage";






function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />  

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />


       


      </Routes>
    </BrowserRouter>
  )
}

export default App;
