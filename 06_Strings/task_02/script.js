let lineComment = '// A comment';
let multilineComment = '/* A comment */';
let notComment = 'Not a comment';

function checkIsComment(str) {
    if (str.slice(0, 2) == ('/*') && str.slice(-2) == ('*/')) {
       return true;
    } else if (str.slice(0, 2) == ('//')) {
        return true;
    } else {
        return false;
    }
} 

console.log(checkIsComment(lineComment));
console.log(checkIsComment(multilineComment));
console.log(checkIsComment(notComment));
