import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar'
import AddUser from './components/users/AddUser'
// import NotFound from './components/pages/NotFound'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';


function App() {
  return (
    <div className="App">
    <Router>

     <Navbar/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/users/add" element={<AddUser/>}/>
      <Route path="/users/edit/:id" element={<EditUser/>}/>
      <Route path="/users/:id" element={<ViewUser/>}/>



      {/* <Route path="/*" element={<NotFound/>}/> */}
        
        
    
    </Routes>
    </Router>
     
    </div>
  );
}

export default App;
