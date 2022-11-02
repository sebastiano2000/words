import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./Words.css";
import { useNavigate } from "react-router";

const Question = () => {
  // declaration
  let initialSeconds = 15;//time for question
  const Navigator = useNavigate();
  const { questions, setProgressBar, progressBar } = useContext(GlobalContext); // fetch data[questions] from context
  const [alert, setAlert] = useState(false); // alert to make questuion required 
  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState({});
  const [id, setId] = useState(1);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [btnContent, setBtnContent] = useState("Next");

  // methods
  /* get question according id */
  useEffect(() => {
    if (id <= 10) {
      let selectedQuestion = questions.find((item) => item.id === id);
      setQuestion(selectedQuestion);
      setAlert(false);
      setSeconds(initialSeconds);
      setProgressBar(progressBar + 1);
    } else {
      // questions finished
      Navigator("/questions/result");
    }
  }, [id]);


  /* make question timer */
  useEffect(() => {
    var timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
      if (seconds === 0) {
        //move to next
        goToNext();
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);


  /*
   * method:setScore
   * function:set Score for question according answer
   */
  const setScore = () => {
    questions.map((item) => {
      if (item.id === id) {
        if (answer === item.pos) {
          item.score = 10;
        } else {
          item.score = 0;
        }
        item.choose = answer ? answer : question.choose;
      }
    });
  };


  /*
   * method:goToNext
   * function:move to next question
   */
  const goToNext = () => {
    if ((answer === null || answer.trim() === "") && seconds !== 0) {
      setAlert(true);
    } else {
      setScore();
      setId(id + 1);
      if (id === 10) {
        setSeconds(-1); //clearInterval(timer);
      }
      if (id == 9) {
        //next question is the last question
        setBtnContent("Submit");
      }
    }
  };

  //return view
  return (
    <div className="questionCard">
      {alert && <p className="alert"> required! please answer the question </p>}
      <form id="myForm">
        <p>
          <span>{question.word ? question.word : "loading"}</span>
          <span>{seconds >= 0 ? seconds : 0} sec</span>
        </p>
        <input
          required
          type="radio"
          id="adjective"
          name="questionId"
          onClick={() => {
            setAnswer("adjective");
            setAlert(false);
          }}
        />
        <label htmlFor="adjective">adjective</label>
        <br />
        <input
          type="radio"
          id="adverb"
          name="questionId"
          onClick={() => {
            setAnswer("adverb");
            setAlert(false);
          }}
        />
        <label htmlFor="adverb">adverb</label>
        <br />
        <input
          type="radio"
          id="noun"
          name="questionId"
          value="noun"
          onClick={() => {
            setAnswer("noun");
            setAlert(false);
          }}
        />
        <label htmlFor="noun">noun</label>
        <br />
        <input
          type="radio"
          id="verb"
          name="questionId"
          value="verb"
          onClick={() => {
            setAnswer("verb");
            setAlert(false);
          }}
        />
        <label htmlFor="verb">verb</label>
        <br />
      </form>
      <div className="quizzPageFooter">
        <button onClick={goToNext}>{btnContent}</button>
      </div>
    </div>
  );
};

export default Question;