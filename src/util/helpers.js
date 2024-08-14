const mapEdgesToNodes = (data) => {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
};

const camelize = (str) => {
  if (str === null || str === undefined) return;
  let urlRegex = new RegExp(/(https?:\/\/[^\s]+)/g);
  let isUrl = urlRegex.test(str);
  if (isUrl === true) return str;
  const camelized = str
    .replace('/', '')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\//g, '')
    .replace(/\s+/g, '')
    .replace(/-/g, '');
  return camelized;
};
/* eslint-disable */
const slugify = (text) => {
  const slugified = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  return slugified;
};

// For customer confirmation message & client email
// https://www.programiz.com/javascript/examples/generate-random-strings
function contactFormIdGenerator() {
  // Example: ABC1234567890
  let generateId = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const generateLetters = randomiseString(letters, 3);
  const generateNumbers = randomiseString(numbers, 10);
  generateId = generateLetters + generateNumbers;
  return generateId;
}

function randomiseString(string, numOfChars) {
  let result = '';
  const inputLength = string.length;
  for (let i = 0; i < numOfChars; i++) {
    result += string.charAt(Math.floor(Math.random() * inputLength));
  }
  return result;
}

export { mapEdgesToNodes, camelize, slugify, contactFormIdGenerator };
