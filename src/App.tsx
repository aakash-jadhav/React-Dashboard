import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Featured from "./components/Featured";
import Activity from "./components/Activity";
import Table from "./components/Table";
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
          <div className="min-h-[500px] sm:col-span-8 rounded-lg shadow ">
            <Featured />
            <Activity />
            <Table />
          </div>
          <div className="min-h-[500px] sm:col-span-4 rounded-lg shadow ">
            <Profit />
            <Goals />
            <Feedback />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
