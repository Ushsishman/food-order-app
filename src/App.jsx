import Header from "./layouts/Header";
import Box from "./components/Box/Box";
import FoodsContainer from "./components/FoodsContainer/FoodsContainer";
{
  /* LAYOUT AND REST OF THE APP */
}
function App() {
  return (
    <div>
      <div className="min-h-screen w-full bg-[#262526] flex flex-col items-center">
        <Header />
        <Box />
        <FoodsContainer />
      </div>
    </div>
  );
}

export default App;
