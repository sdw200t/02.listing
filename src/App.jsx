import Listing from "./components/Listing/Listing";
import etsy from "./data/etsy.json";
import "./css/main.css";
import "./App.css";

function App() {
  return <Listing items={etsy} />
}

export default App;