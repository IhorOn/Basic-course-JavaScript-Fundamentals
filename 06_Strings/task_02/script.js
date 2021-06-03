let lineComment = '// A comment';
let multilineComment = '/* A comment */';
let notComment = 'Not a comment';

function checkComment(str) {
    let isComment = false;

    if (str.slice(0, 2) == ('/*') && str.slice(-2) == ('*/')) {
       isComment = true;
    } else if (str.slice(0, 2) == ('//')) {
        isComment = true;
    }
    return isComment;

} 

console.log(checkComment(lineComment));
console.log(checkComment(multilineComment));
console.log(checkComment(notComment));