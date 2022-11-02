import { getScores } from "../data/serviceWords.js";
const scoresList = getScores();
/**
 * 
 * @param {*} score refer to final score
 * @returns rank% rounded to the nearest hundredth. The rank represents the percentage of scores (check scoresList in TestData.json)
below the given final score.
 */
export function calcScore(score) {
    let scoresBelowGiven = scoresList.filter((item) => item < score);
    let answer = ((scoresBelowGiven.length / scoresList.length) * 100).toFixed(2);

    return answer;
}