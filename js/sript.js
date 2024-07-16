let str = 'hello world';
console.log(str);
console.log(str[1]);

const str2 = str + ', my name is Amalia';
console.log(str2);

console.log(str2.length);

console.log(str[str.length - 1]);

const upperCaseString = 'Java Script is awesome';
console.log(upperCaseString.toLocaleLowerCase());
console.log(upperCaseString.toLocaleUpperCase());

const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = "dog";
console.log(paragraph.indexOf('dog'));
console.log(paragraph.includes("cat"));
console.log(paragraph.lastIndexOf("i"));
console.log(paragraph.startsWith("thiks"));
console.log(paragraph.endsWith("!"));

const strWidthWhiteSpace = '    hello     ';
console.log(strWidthWhiteSpace);
console.log(strWidthWhiteSpace.trim());

const strPad = 'hello';
console.log(strPad.padEnd(8, '!!!'));
console.log(strPad.padStart(8, '!!!'));

console.log(Date())

const age = 14;
const userName = 'Amalia';
const lastName = 'Savchenko';

const greetings = `Hello, my name is ${userName + ' ' + lastName}, i am ${age} years old`;
console.log(greetings)