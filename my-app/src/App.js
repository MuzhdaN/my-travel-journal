import "./index.css"
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";


function App() {

//  Fetching data
  const cards = data.map((item) => {
    return ( <Card item={item} key={item.title} /> )})

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;