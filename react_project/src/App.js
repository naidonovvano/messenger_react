import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './elements/About';
import Create from './elements/Create';
import Error from './elements/Error';
import Footer from './elements/Footer';
import Header from './elements/Header';
import Main from './elements/Main';
import Note from './elements/Note';

const App = () => {
  return (
    <div className="main">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route exact path="*" element={<Error />}></Route>
            <Route exact path="/note/" element={<Note />}></Route>
            <Route exact path="/note/:noteURL" element={<Note />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;