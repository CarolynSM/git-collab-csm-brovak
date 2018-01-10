var arrayOfObjects = [
  {
    id: 1,
    name: Brian,
    age: 37
  },
  {
    id: 2,
    name: Carolyn,
    age: 29
  },
  {
    id: 3,
    name: Lucy,
    age: 9
  }
];

var carolynsNumbers = [1, 2, 3];

function multiplyNumbers(array) {
  var answer;
  for (var i = 0; i < array.length; i++) {
    answer *= array[i];
  }
  return answer;
}
