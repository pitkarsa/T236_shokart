import './App.css' 
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  return (
    <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row mt-2">
          <div className="col-2">
            <ul>
              <li><a href="">All</a></li>
              <li><a href="">Beauty</a></li>
              <li><a href="">Fragrances</a></li>
              <li><a href="">Furniture</a></li>
            </ul>      
          </div>
          <div className="col-10">
           {/* static rendering
            <Home />  */}
            <Outlet />
          </div>
        </div>
        <div className="row" style={{ backgroundColor:"#650259", height:"100px" }}></div>
    </div>
  )
}
export default App