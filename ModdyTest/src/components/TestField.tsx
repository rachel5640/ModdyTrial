import styled from "styled-components";

const TestField = () => {
  return <Input placeholder="확인해보자"></Input>;
};

const Input = styled.input`
  margin: 1rem 0;
  width: 34.3rem;
  height: 3rem;

  border-style: none;
  border-radius: 8px;
  background-color: #f4f4f5;
`;
export default TestField;
