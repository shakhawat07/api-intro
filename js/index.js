// JSON = JavaScript Object Notation 
const user = { id: 11, name: 'Sk', job: 'vagabond' };
console.log(user);
// converts object into string and can't access the object property
const stringified = JSON.stringify(user);
console.log(stringified);
// converts string into object and can access the object property
const stringifyParsed = JSON.parse(stringified);
console.log(stringifyParsed);