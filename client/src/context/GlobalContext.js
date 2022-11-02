import React, { useState } from "react";

// initail state
const initailState = { questions: [], progressBar: 1 };
export const GlobalContext = React.createContext(initailState);

export const GlobalContextProvider = ({ children }) => {
  /*
    questions: array containt 10 questions each question have
    word - pos [correct Answer] - choose [user answer]- score [ 10 [if choose correct answer] or o ]
  */
  const [questions, setQuestions] = useState([]);
  //progress bar refer number of questions which are answered
  const [progressBar, setProgressBar] = useState(1);

  /**
   * method:startNewQuizz
   * description:connect with back and get array of 10 questions and set questions state and progressBar state
   */
    const getWords = async () => {
        const resp = await fetch ("http://localhost:5000/getWords");

        let words = await resp.json();
        let counter = 1;
        words.forEach((element) => {
            element.id = counter;
            counter++;
        });
          
        setQuestions(words);
        setProgressBar(0);
    }

  return (
    <GlobalContext.Provider
      value={{ questions, progressBar, setProgressBar, getWords }}
    >
      {children}
    </GlobalContext.Provider>
  );
};