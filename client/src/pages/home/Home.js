import React,{ useContext } from "react";
import "./Home.css";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {
  // declaration
  const Navigator = useNavigate();
  const {getWords} = useContext(GlobalContext);
  /**
   * method:handleTakeQuizz
   * function:start a new quizz
   */
  const handleTakeQuizz = async () => {
    getWords();
    Navigator('/questions/newquestions');
  }
  return (
    <div className="homePage">
      <h2>Word Categorizing Quizz</h2>
      <p>
        In English language, words can be categorized according to their
        syntactic functions, which is known as "Part of Speech". Examples of
        part of speech: (noun, verb, adjective, ...)
      </p>
      <div className="cardFooter">
        <button onClick={handleTakeQuizz}>Take a Quizz</button>
      </div>
    </div>
  );
};

export default Home;