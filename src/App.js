import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import NotFound from './components/NotFound';
import Service from './components/Service';
import IndexService from './components/IndexService.js';
import Development from './components/Development';
import Consult from './components/Consult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="list">
          <ul>
            <li><Link to="/">Page 1</Link></li>
            <li><Link to="page1/123">Page 4</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
            <li><Link to="Service">Tech Service</Link></li>
            <li><Link to="NotFound">Sab Dhundla hai</Link></li>

          </ul>
        </div>


         
        <Routes>
          <Route exact path="/" element={<Page1 />} />
          <Route exact path="/page1" element={<Page1 />} />
          <Route exact path="/page1/:id" element={<Page4 />} />
          <Route exact path="/page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />


          <Route path="service/*" element={<Service/>}>
            <Route index Component={IndexService} />
            <Route path="development" Component={Development} />
            <Route path="consult" Component={Consult} />
          </Route>

        

         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <div>Footer</div>
    </div>
  );
}

export default App;