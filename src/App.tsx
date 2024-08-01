import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Featured from "./components/Featured";
import Activity from "./components/Activity";
import Tables from "./components/Table";
import Profit from "./components/Profit";
import Goals from "./components/Goals";
import Feedback from "./components/Feedback";
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="ml-20 my-5  ">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <div className="grid sm:grid-cols-12 gap-4 mt-5 mr-5">
          <div className=" sm:col-span-8 rounded-lg shadow ">
            <Featured />
          </div>
          <div className=" sm:col-span-4 rounded-lg shadow ">
            <Profit />
          </div>
        </div>

        <div className="grid sm:grid-cols-12 gap-4  mr-5">
          <div className=" sm:col-span-8 rounded-lg shadow  ">
            <Activity />
          </div>
          <div className=" sm:col-span-4 rounded-lg shadow  ">
            <Goals />
          </div>
        </div>

        <div className="grid sm:grid-cols-12 gap-4  mr-5">
          <div className=" sm:col-span-8 rounded-lg shadow ">
            <Tables />
          </div>
          <div className=" sm:col-span-4 rounded-lg shadow ">
            <Feedback />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
