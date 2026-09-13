const numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];

const moreThanFour = numbers.filter((number) => number > 4);
console.log(moreThanFour);


const macbooks = [
  { name: "MacBook Pro M1", price: 1499 },
  { name: "MacBook Pro M2", price: 1999 },
  { name: "MacBook Pro Intel", price: 1299 },
  { name: "MacBook Pro M3", price: 2499 },
  { name: "MacBook Pro M4", price: 2999 },
  { name: "MacBook Pro M5", price: 3499 },
];

const findIntelMacbook = macbooks.find((macbook) => macbook.name.includes("Intel"));
console.log(findIntelMacbook);


const reverseArray = (array) => {
  return array.reverse();
};
console.log(reverseArray(numbers));
console.log(reverseArray(macbooks));


import { comments } from "./comments.js";

const outputEmailWithCom = comments.filter((comment) => comment.email.includes(".com"));
console.log(outputEmailWithCom);

const updatedComments = comments.map((comment) => {
  const newComment = { ...comment };
  
  if (comment.id <= 5) {
    newComment.postId = 2;
  }  {
    newComment.postId = 1;
  }
  return newComment;
});

console.log(updatedComments);


const shortComments = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name
  };
});

console.log(shortComments);


const updatedComments2 = comments.map((comment) => {
  const newComment = { ...comment };
  
  if (comment.body.length > 180) {
    newComment.isInvalid = true;
  }  {
    newComment.isInvalid = false;
  }
  return newComment;
});

console.log(updatedComments2);


const outputEmailsWithReduce = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

console.log(outputEmailsWithReduce)

const outputEmailsWithMap = comments.map((comment) => comment.email);

console.log(outputEmailsWithMap)


const emailToString = outputEmailsWithMap.toString()

console.log(emailToString)

const emailJoin = outputEmailsWithReduce.join()

console.log(emailJoin)