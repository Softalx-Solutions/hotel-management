import { Header, NavBar, Main } from "./components";


const App = () => {
  return (
    <div className="h-screen bg-[#F7F8FC] flex flex-col sm:flex-row">
      <NavBar/>
      <Main/>
    </div>
  );
};

export default App;
