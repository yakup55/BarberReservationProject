import Navbar from "./Components/Navbar/Navbar";

import SimpleSnacbar from "./Components/snacbar/SimpleSnacbar";

import Paths from "./Paths";

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
  );
}

export default App;
