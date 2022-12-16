import Dashboard from "./screens/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Discover} from './screens/Discover';
import Applications from "./screens/Applications";
import Documents from "./screens/Documents";
import Users from "./screens/Users";
import pages from "./screens/pages"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
      <Route path="/" element ={<Dashboard/>}/>
      <Route path="/Applications" element={<Applications/>}/>
      <Route path="/Discover" element={<Discover/>}/>
      <Route path="/pages" element={<pages/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/Documents" element={<Documents/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;