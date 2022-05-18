import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Admin from './Pages/Admin';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          {/* <Route exact path="/" element={<Learning_Page />} /> */}
          <Route exact path="/admin" element={<Admin/>} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
