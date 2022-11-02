import React, { useState,useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import "./ProgressBar.css";
import { useNavigate } from "react-router";

const Result = () => {
  // declaration
  const Navigator = useNavigate();
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState(0);
  const { questions, setProgressBar, getWords } = useContext(GlobalContext); // fetch data[questions] from context
  
  //calculate totalScore[final score]
  useEffect(() => {
    //submit
    let totalScore = 0;
    questions.forEach((item) => {
      totalScore = totalScore + Number(item.score);
    });
    setScore(totalScore);

    // send post request to scorecontroller
    fetch ("http://localhost:5000/getScore", 
        {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            'Access-Control-Origin': '*',
            },
            data: {
              score: JSON.stringify(totalScore),
            }
      }).then(async response => {
        let res = await response.json()
        console.log(res)
        setRank(res.score)
      });
  }, []);

  /**
   * method:handleTryAgain
   * function:start new quiz again
   */
  const handleTryAgain = async () => {
    await getWords();
    setProgressBar(-1);
    Navigator("/questions/newquestions");
  };

  const question = questions.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.word}</td>
        <td>{item.choose?item.choose:'No Answer'}</td>
        <td>{item.pos}</td>
        <td>{item.score}</td>
      </tr>
    );
  });

  // return view
  return (
    <div className='resultContainer'>
      <div className="resultCard">
        <p>final Score : {score}  -  Rank : {rank} %</p>
        <button onClick={handleTryAgain}>Try Again</button>
      </div>

      <div className="Answers">
        <h4>Quiz Answers</h4>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Your Answer</th>
              <th>Correct Answer</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {question}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Result;