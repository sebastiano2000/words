import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router";
import "./Questions.css";

const Questions = () => {
  // declaration
  const { progressBar, questions } = useContext(GlobalContext);
  const Navigator = useNavigate();
  /**
   * if refresh case and there is no data redirect to home page
   */
  useEffect(() => {
    if (window.location.pathname === "/questions" || questions.length === 0) {
      Navigator("/");
    }
  }, []);

  return (
    <div className="questionsPage">
      <div className="questionsPageHeader">
        <h2>Word Categorizing Quizz</h2>
        <p>{progressBar > 10 ? 10 : progressBar + 1}/10</p>
      </div>
      <progress id="file" value={progressBar + 1} max="10">
        {" "}
        {progressBar + 1}{" "}
      </progress>
      <Outlet />
    </div>
  );
};

export default Questions;