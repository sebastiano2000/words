import { readFileSync } from "fs";

const jsonData = readFileSync("data/TestData.json");
const data = JSON.parse(jsonData);
let wordList = data.wordList;
let scoresList = data.scoresList;

// seperate words according type
let sorted = {
    'adverb': [],
    'verb': [],
    'adjective': [],
    'noun': [],
};

// shuffle wordsList
wordList = wordList.sort(() => 0.5 - Math.random());
for (let i of wordList) {
    sorted[i.pos].push(i);
}

// return adverbs
export function getAdverb() {
    return sorted['adverb'];
}

// return nouns
export function getNoun() {
    return sorted['noun'];
}

// return adjectives
export function getAdjective() {
    return sorted['adjective'];
}

// return verbs
export function getVerb() {
    return sorted['verb'];
}

// return scores
export function getScores() {
    return scoresList;
}