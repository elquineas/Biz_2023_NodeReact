const name1 = "홍길동";
const name2 = "이몽룡";

const student1 = [{ 이름: name1 }, { 이름: name2 }];

/**
 * JavaScript 계산된 속성
 * JS의 JSON 객체는 []로 묶인 연산(계산)식을 사용하여
 * 속성이름을 만들수 있다.
 *
 * 일반적으로 프로그래밍에서 변수의 이름은 고정된 영문자를 사용한다
 * 변수의 이름을 또다른 변수를 사용하거나 연산식을 사용하여 만드는 것은 거의 불가능하다
 * 하지만 JS의 JSON 객체를 만들떄는 다양한 연산식을 사용하여 속성(변수)이름을 만들수 있다.
 */
const student2 = { [name1]: "서울특별시", [name2]: "광주광역시" };

const student3 = {
  ["NUM" + 1]: "홍길동",
  ["NUM" + 2]: "홍길동",
  ["NUM" + 3]: "홍길동",
};

console.log(student1);
console.log(student2);
console.log(student3);

let num1 = {};
for (let i = 0; i < 10; i++) {
  num1 = { ...num1, [`NUM${i + 1}`]: i + 1 };
}
console.log(num1);
