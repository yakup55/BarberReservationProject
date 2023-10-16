import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Paths from "./Paths";
import { Router } from "react-router-dom";


function App() {
  return (
      <>
       <div className={`App`}>

         <Navbar />
          <main>
            <Paths />
          </main>
          
       </div>
       
      </>
        
  )
}

export default App;
