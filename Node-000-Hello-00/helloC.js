const obj = {
  이름: "홍길동",
  나이: 16,
  전화: "010-0000-0000",
};

console.log(obj);
console.log(obj.이름);
console.log(obj["이름"]);

const searchKey = "이름";
console.log(obj[searchKey]);

const address = [
  { 이름: "홍길동", 나이: 36, 전화: "010-0000-0000" },
  { 이름: "이몽룡", 나이: 26, 전화: "010-1111-0000" },
  { 이름: "성춘향", 나이: 16, 전화: "010-2222-0000" },
];
