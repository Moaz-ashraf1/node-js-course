const fs = require('fs');
const { json } = require('stream/consumers');

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }
// // data stored as a js object ----> JSON
// const bookJSON = JSON. (book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();

// // Parse json data
// const data = JSON.parse(dataJSON);
// const title = data.title;
// console.log(title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);
data.name = 'Moaz Ashraf';
data.age = '20';
console.log(data);

//save data in json file
const userJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', userJSON);