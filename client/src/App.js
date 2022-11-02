import React, {useEffect,useContext} from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import "./App.css";
import Questions from "./pages/questions/Questions";
import {Route,Routes} from 'react-router-dom';
import Words from "./components/words/Words";
import ProgressBar from "./components/progress/ProgressBar";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  /**
   * getWords method in global context connect with back to get questions array
   */
  const {getWords} = useContext(GlobalContext);

  useEffect(() => {
    getWords();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/questions' element={<Questions/>}>
            <Route path='newquestions' element={<Words />}/>
            <Route path='result' element={<ProgressBar />}/>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;