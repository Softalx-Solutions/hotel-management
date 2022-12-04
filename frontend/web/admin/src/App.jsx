import { Header, NavBar, Main } from "./components";


const App = () => {
  return (
    <div className="h-screen bg-[#F7F8FC] grid grid-cols-1 sm:grid-cols-12">
      <NavBar/>
      <Main/>
    </div>
  );
};

export default App;
