import './App.css';
import logo from './logo.png'
import ImageSR from './ImageSR.js'
import AboutUs from './AboutUs.js'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import FileUpload from './FileUpload';

function App() {
    return (
    <Router>
      <div className="App">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
              <img src={logo} style={{height: "50px"}}/>
              <span class="ml-3 text-xl">DLSR - Deep Learning Super Resolution</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-red-90" href="/about-us">About Us</a>
            </nav>
          </div>
          <div class="flex justify-center">
            <FileUpload/>
          </div>
        </header>

        <Routes>
          <Route exact path='/' element={< ImageSR />}></Route>
          <Route exact path='/about-us' element={< AboutUs />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;