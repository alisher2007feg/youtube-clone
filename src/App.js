import './App.css';
// import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Home/>
    </>
  );
}


export default App;
