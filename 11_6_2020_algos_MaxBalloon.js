/**1189. Maximum Number of Balloons
 * Given a string text, you want to use the characters of
 * text to form as many instances of the word "balloon" as possible.
 *
 * You can use each character in text at most once.
 * Return the maximum number of instances that can be formed.
 *
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 *
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 *
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 * @param {string} text
 * @return {number}
 */

const maxNumberOfBallons = (text, word) => {
    let letterObj = {
        b :0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };
    for (let i = 0; i < text.length; i++) {
        if (text[i] in letterObj) {
            letterObj[text[i]] += 1;
        } else {
            continue;
        }
    }
    console.log(letterObj);
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        let wordArr = [];
        if (word[i] in letterObj.keys) {
            wordArr.push(word[i]);
            letterObj[word[i]] -= 1;
        }
        count +=1;
    }
}

console.log(maxNumberOfBallons("loonbalxballpoon", "balloon"));

const Balloons = (text, word) => {
    if(text.length < word.length) {return 0;};
    let count = Infinity;
    let wordDict = {};
    let textDict = {};

    for (let letter of word) {
        if(letter in wordDict) {
            wordDict[letter] += 1;
        } else {
            wordDict[letter] = 1;
        }
    }

    for (let letter of text) {
        if (letter in wordDict) {
            if (letter in textDict) {
                textDict[letter] += 1;
            } else {
                textDict[letter] = 1;
            }
        }
    }

    if (Object.keys(wordDict).length != Object.keys(textDict).length) {
        return 0;
    }

    for (let key in Object.keys(wordDict)) {
        let newAmount = Math.floor(textDict[key] / wordDict[key]);
        if (count < newAmount) {
            count = newAmount;
        }
    }
    return count;
}