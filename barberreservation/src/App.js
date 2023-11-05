import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/scrolToTop/ScrollToTop";


import Paths from "./Paths";

function App() {
  return (
    <>
      <div className={`App`}>
        <Navbar />
        <ScrollToTop></ScrollToTop>
        <main>
          <Paths />
        </main>
      </div>
    </>
  );
}

export default App;
