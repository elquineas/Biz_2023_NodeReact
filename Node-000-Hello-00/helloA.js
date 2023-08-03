const useState = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum()];
};

const [num, setNum] = useState(0);
const nations = ["대한민국", "우리나라"];
console.log(nations);
const [n1, n2] = nations;
console.log(n1);
console.log(n2);

const nations2 = [...nations, "Korea"];
console.log(nations2);
