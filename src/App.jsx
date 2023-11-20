import AppleWatch9 from "./components/AppleWatch9";
import BottomGrid from "./components/BottomGrid";
import Iphone15Pro from "./components/Iphone15Pro";
import MacBookPro from "./components/MacBookPro";
import Navbar from "./components/Navbar";
import TradeIn from "./components/TradeIn";

const App = () => {
  return (
    <>
      <Navbar />
      <TradeIn />
      <Iphone15Pro />
      <AppleWatch9 />
      <MacBookPro />
      <BottomGrid />
    </>
  );
};

export default App;
