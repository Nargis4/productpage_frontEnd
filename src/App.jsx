//component starts from captal letter haere App is a component
import Herosection from "./Components/hero";
import Navigation from "./Components/Navigation";
import "./App.css";

const App = () => {
  return(
    <div>
 <Navigation />
 <Herosection/>
 </div>
 );
};

export default App;