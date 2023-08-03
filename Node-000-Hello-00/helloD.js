import RtMessage, { sum, sub, mul } from "./src/sub.js";

console.log(RtMessage());
console.log(sum(30, 40));
console.log(sub(30, 40));
console.log(mul(30, 40));

const address = [
  { 이름: "홍길동", 나이: 18 },
  { 이름: "이몽룡", 나이: 17 },
  { 이름: "성춘향", 나이: 16 },
];
console.log(address);
console.table(address);
console.dir(address);
