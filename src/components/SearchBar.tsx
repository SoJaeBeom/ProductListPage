import styled from '@emotion/styled';

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 20px;
`;

export default function SearchBar({ onChange }: any) {
  return (
    <Input type="text" placeholder="검색어를 입력하세요" onChange={onChange} />
  );
}
