import express, { urlencoded, json, response } from "express";
import cors from "cors";
import { getRandomList } from "./controllers/wordsController.js";
import { calcScore } from "./controllers/scoreController.js";

const port = process.env.PORT || 5000;

// express application server & server confogration
const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json({ extended: false }));

/**
 * words endpoint
 * return a list of 10 objects selected randomly from the "wordsList"
 */
app.get("/getWords", (req, res) => {
    let result = getRandomList(10);
    res.json(result);
    res.end();
});

/**
 * rank endpoint
 * description:takes the final score in the request body, and responds back with the rank%
rounded to the nearest hundredth. The rank represents the percentage of scores (check scoresList in TestData.json)
below the given final score.
 */
app.post("/getScore", (req, res) => {
    console.log(req.body);
    let score = calcScore(req.body.score);
    res.json({ score });
});

app.listen(port, () => console.log(`server running on port : ${port}`));