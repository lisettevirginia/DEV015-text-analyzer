const analyzer = {
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/).filter(word => /\w/.test(word));
    return words.length;
  },

  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const cleanedText = text.replace(/\s+/g, '').replace(/[^\w\s]/g, '');
    return cleanedText.length;
  },

  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/).filter(word => /\w/.test(word));
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }

    if (words.length > 0) {
      return parseFloat((totalLength / words.length).toFixed(2));
    } else {
      return 0;
    }
  },

  getNumberCount: (text) => {
    const numbers = text.match(/\b-?\d+(\.\d+)?\b/g) || [];
    return numbers.length;
  },

  getNumberSum: (text) => {
    const numbers = text.match(/\b-?\d+(\.\d+)?\b/g) || [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += parseFloat(numbers[i]);
    }

    return sum;
  }
};

export default analyzer;
