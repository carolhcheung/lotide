const args = process.argv.slice(2);
console.log(args);

const reverse = function (word1, word2) {
let word1Rev = '';
let word2Rev = '';  
for (let i = word1.length - 1; i >= 0; i--){
  word1Rev = word1Rev + word1[i];
    for (let j = word2.length - 1; j >= 0; j--){
    word2Rev = word2Rev + word2[j];
    }
} 
return word1Rev + word2Rev;

};

console.log(reverse('hello', 'goodbye'));

module.exports = reverse;