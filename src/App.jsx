import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="m-2 mx-auto w-[1280px] p-5 bg-slate-300">
      <div className="flex ">
        {/* Sidebar */}
        <div className="lg:w-2/12 fixed top-1/2 left-0 h-full ml-10">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-10/12 ml-auto">
          <Navbar />
          <div className="overflow-y-auto h-[calc(100vh-4rem)] p-2">
            <Recommended />
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
