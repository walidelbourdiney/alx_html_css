"use strict";

const Array = [1, 2, 3, 4, 5, 6];

let newArray = [];
for (let i = 0; i < Array.length; i++) {
  let random = Math.floor(Math.random() * (Array.length - 1));
  newArray.push(Array[random]);
}
console.log(newArray);
