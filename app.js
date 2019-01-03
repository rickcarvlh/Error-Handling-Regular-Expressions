let re;

re = /hello/;
re = /hello/i; //1 = case insensitive
// re = /hello/g; //Global search

// console.log(re);
// console.log(re.source);

//* exec() - return result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//* test() -  Returns true or false
// const result = re.test('Hello');
// console.log(result);

// * match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// * search() - return index of the first match if not found returns -1
// const str = 'Ricardo Hello there';
// const result = str.search(re);
// console.log(result);

// * replace() - Return a new string with some or all matches of a pattern
const str = 'Hello there';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
