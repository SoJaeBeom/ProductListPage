import styled from '@emotion/styled';

export type PlaceCategory = '강남 아지트 | 안국 아지트 | 온라인 | 롯데백화점 본점(을지로입구역) | 롯데백화점 잠실점 | 그 외 장소';
export type ClubTypeCategory = '함께 만드는 클럽 | 클럽장 있는 클럽 | 함께 듣는 클럽';

const Button = styled.button`
  color: black;
  height: 40px;
`;

export default function SearchCategory() {
  const categorysList = ['장소', '클럽유형'];
  return (
    <>
      {categorysList.map((categorys: string, index: number) => {
        return <Button key={index}>{categorys}</Button>;
      })}
    </>
  );
}
