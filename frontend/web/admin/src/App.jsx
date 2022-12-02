import { Header, SideBar } from "./components";

const App = () => {
  return (
    <div className="h-screen bg-white">
      <Header />
      <div className="grid grid-cols-12">
        <SideBar />
        <main className="bg-red-600 col-span-10">main</main>
      </div>
    </div>
  );
};

export default App;
