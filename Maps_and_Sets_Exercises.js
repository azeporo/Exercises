/** @format */

//THE CODE RETURNS A SET WITH THE VALUES 1,2,3,4
new Set([1, 1, 2, 2, 3, 4]);

//THE CODE RETURNS "REF"
[...new Set('referee')].join('');

//THE MAP CONTAINS TWO KEY VALUE PAIRS WHERE THE VALUES ARE TRUE AND FALSE RESPECTIVELY
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//HAS DUPLICATE
let hasDeuplicates = (arr) => new Set(arr).size !== arr.length;

//VOWEL COUNT
function vowelCount(str) {
  let myMap = new Map();

  for (let char of str) {
    let char2 = char.toLowerCase();
    if ('aeiou'.indexOf(char2) !== -1) {
      if (myMap.has(char2)) {
        myMap.set(char2, myMap.get(char2) + 1);
      } else {
        myMap.set(char2, 1);
      }
    }
  }
  return myMap;
}
