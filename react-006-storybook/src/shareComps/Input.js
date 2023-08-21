import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 35px;
  //   width: 200px;
  //   text-align: left;
`;

const SearchInput = styled.input`
  width: 95%;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  padding-left: 1.5rem;
  background-color: white;
  margin: 0;
  margin-right: 5%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0.62rem, 0.75rem;
  background-size: 1rem;
  transition: 0.7s;
  //   &:focus {
  //     padding-left: 2rem;
  //     width: 100%;
  //     border: none;
  //     outline: none;
  //   }
`;

/**
 * JS의 함수 기본 매개변수 설정
 * const func = (name,age) => {
 *      console.log(name, age);
 * }
 * name 값과 age 값을 전달해 주어야한다.
 * const func = ({ name = "", placeholder = "" }) => {
 * }
 * 이럴경우 값을 못받았을때, 기본값이 ""
 */
const Input = ({
  name = "",
  placeholder = "검색어를 입력하세요",
  id = "temp",
}) => {
  return (
    <Container>
      <SearchInput name={name} placeholder={placeholder} id={id} />
    </Container>
  );
};
export default Input;
