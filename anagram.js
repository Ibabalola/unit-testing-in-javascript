const _ = require('lodash');

const isAnagram = (firstString, secondString) => {
    if (!firstString || !secondString)
        return false;

    const firstWord = firstString.trim();
    const secondWord = secondString.trim();

    if (hasSpecialChar(firstWord) || hasSpecialChar(secondWord)) {
        return false;
    }

    return _.isEqual(getLetterCount(firstWord.toLowerCase()), getLetterCount(secondWord.toLowerCase()));
}

const hasSpecialChar = (string) => {
    // any character that is not a word character or whitespace
    const regex = /[^\w\s]/g;

    return string[string.search(regex)] !== undefined;
}

const getLetterCount = string => {
    const letters = string.split('');
    let result = {};

    letters.forEach(char => result[char] = letters.filter(filterChar => filterChar === char).length);

    delete result[' '];

    return result;
};

module.exports = isAnagram;