const firstArr = ['pha', 'amma', 'alta'];
const secondArr = ['alpha', 'beta', 'gamma', 'delta', 'epsilon'];

getSubStr(firstArr, secondArr);

const anotherFirstArr = ['alef', 'buku', 'elta'];
// getSubStr(anotherFirstArr, secondArr);

function getSubStr(a, b) {

    for (let i of b) {
		 for (let j of a) {
			 str = i.includes(j);
			 if (str === true) {
				 console.log(j);
			 }
        }
	}
}

