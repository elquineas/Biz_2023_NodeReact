const student = {
  이름: "홍길동",
  나이: 19,
  전화: "010-1111-1111",
};
const 이름 = student.이름;
const 나이1 = student.나이;
const 번호 = student.전화;

const student1 = {
  name: "홍길동",
  age: 19,
  tel: "010-1111-1111",
};

const { name, age, tel } = student1;
console.log(student1.name);
console.log(name);

const { ...all } = student1;
console.log(all.name);

const address = {
  성명: "성춘향",
  주소: "서울시",
  전화: "010-2222-1111",
  나이: 20,
};
const { 성명, 주소, ...나머지 } = address;
console.log(성명);
console.log(나머지);

const nums = [1, 2, 3, 4, 5];
const func = (num1, num2, ...nums) => {
  console.log(num1, num2);
  console.log(nums);
};
func(1, 2, 3, 4, 5, 6);

const func1 = (...nums) => {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  console.log(sum);
};

func1(1, 2, 3, 4, 5, 5, 6, 6, 3, 3, 4, 5);
