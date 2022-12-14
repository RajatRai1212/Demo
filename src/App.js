import SearchBar from "./Components/SearchBar/SearchBar";
import SideBar from "./Components/SideBar/SideBar";
import Dashboard from "./screens/Dashboard";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

 function App() {
  return (
    <div className="App">
    <SearchBar/>
    <Dashboard/>
    
    </div>
  );
}

export default App;
