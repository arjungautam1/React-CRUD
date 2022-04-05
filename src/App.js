import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import ViewUser from "./components/users/ViewUser";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/adduser' element={<AddUser />} />
          <Route exact path='/edituser/:id' element={<EditUser />} />
          <Route exact path={"/view/:id"} element={<ViewUser/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
