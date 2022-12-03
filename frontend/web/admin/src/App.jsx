import { Header, NavBar, Main } from "./components";


const App = () => {
  return (
    <div className="h-screen bg-[#F7F8FC] grid grid-cols-4">
      <NavBar/>
      <Main/>
    </div>
  );
};

export default App;
