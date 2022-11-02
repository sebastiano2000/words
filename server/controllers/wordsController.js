import { getVerb, getAdverb, getNoun, getAdjective } from "../data/serviceWords.js";
const verbList = getVerb();
const adverbList = getAdverb();
const nounList = getNoun();
const adjectiveList = getAdjective();

let result = [];
let counter = 0;
/**
 *
 * @param {*} len refer to required length of generated array
 * @returns a list of 10 objects selected randomly from the "wordsList". The array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
 */
export function getRandomList(len = 10) {
  len = len > 15 ? 15 : len;
  while (result.length < len) {
    let mod = counter % 4;
    switch (mod) {
      case 0:
        getNewAdverb();
        break;
      case 1:
        getNewVerb();
        break;
      case 2:
        getNewNoun();
        break;
      case 3:
        getNewAdjective();
        break;
    }
    counter++;
  }
  return result;
}

function getNewVerb() {
  if (verbList.length) {
    let index = Math.floor(Math.random() * verbList.length);
    result.push(verbList[index]);
    verbList.splice(index, 1);
  }
  return;
}

function getNewNoun() {
  if (nounList.length) {
    let index = Math.floor(Math.random() * nounList.length);
    result.push(nounList[index]);
    nounList.splice(index, 1);
  }
  return;
}

function getNewAdjective() {
  if (adjectiveList.length) {
    let index = Math.floor(Math.random() * adjectiveList.length);
    result.push(adjectiveList[index]);
    adjectiveList.splice(index, 1);
  }
  return;
}

function getNewAdverb() {
  if (adverbList.length) {
    let index = Math.floor(Math.random() * adverbList.length);
    result.push(adverbList[index]);
    adverbList.splice(index, 1);
  }
  return;
}