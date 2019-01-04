let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with
re = /d$/i; // Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times -> this one might be wrong check MDN
re = /gre?a?y/i; // Optional Character
re = /gre?a?y\?/i; // Escape Character


// String to match
const str = 'Hello World';

// Log results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);

    } else {
        console.log(`${str} does NOT match ${re.source}`);

    }
}

reTest(re, str);