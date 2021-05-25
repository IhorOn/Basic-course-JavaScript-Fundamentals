let lineComment = '// A comment';
let multilineComment = '/* A comment */';
let notComment = ' Not a comment';

function checkIsComment(str) {
    if (str.indexOf('/*') >= 0) {
        if (str.indexOf('/*') >= 0) {
            return true;
        }
    } else if (str.indexOf('//') >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkIsComment(multilineComment));
console.log(checkIsComment(lineComment));
console.log(checkIsComment(notComment));