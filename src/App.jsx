import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

function App() {
  return (
    <div className="m-2 mx-auto w-[1080px] p-5">
      <Navbar></Navbar>
      <Products></Products>
      <Recommended></Recommended>
    </div>
  );
}

export default App;
