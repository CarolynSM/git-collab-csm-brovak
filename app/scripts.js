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

var arrayOfNumbers = [1, 2, 3];

var arryOfObjects = [
  {
    name: "Ginger",
    age: 10
  },
  {
    name: "Scissors",
    age: 2
  }
];

function multiplyArrayNumbers(array) {
  total = 1;
  for (var i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
}

function addNumbers(array) {
  total = 0;
  for (var i = 0; i < array.length; i++) {
    total = +array[i];
  }
  return total;
}
